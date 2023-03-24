import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../../assets/signup-image.jpg";
import FormInput from "../../component/formInput/FormInput";
import UserService from "../../component/services/UserService";



const Signup = () => {

const navigate = useNavigate();

const [usersModel, setUsersModel] = useState({
    id: "",
    firstName : "",
    lastName : "",
    email : "",
    phoneNumber: "",
    bvn : "",
    password : "",
    confirmPassword : "",
    pin : "",
});

const inputs = [

    {
        id : 1,
        name : "firstName",
        type : "text",
        placeholder : "Enter your first name",
        errorMessage: "First name must be enter!",
        label : "First Name",
        pattern : "^[A-Za-z0-9]{3,16}$",
        value : usersModel.firstName,
        required: true,
      },

      {
        id : 2,
        name : "lastName",
        type : "text",
        placeholder : "Enter your last name",
        errorMessage: "Last name must be enter!",
        label : "Last Name",
        pattern : "^[A-Za-z0-9]{3,16}$",
        value : usersModel.lastName,
        required: true,
      },

      {
        id : 3,
        name : "email",
        type : "email",
        placeholder : "Enter your email",
        errorMessage : "it should be a valid email address!",
        label : "Email",
        value : usersModel.email,
        required: true,
      },

      {
        id : 4,
        name : "phoneNumber",
        type : "number",
        placeholder : "Enter Phone number",
        errorMessage : "Enter digit number only!",
        label : "Phone Number",
        value : usersModel.phoneNumber,
        required: true,
      },

      {
        id : 5,
        name : "bvn",
        type : "number",
        placeholder : "Enter your BVN",
        errorMessage : "it should be a valid bvn number!",
        label : "BVN",
        value : usersModel.bvn,
        required: true,
      },

      {
        id : 6,
        name : "password",
        type : "password",
        placeholder : "Password",
        errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
        label : "Password",
        pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        value : usersModel.password,
        required: true,
      },

      {
        id : 7,
        name : "confirmpassword",
        type : "password",
        placeholder : "Confirm Password",
        errorMessage : "password don't match!",
        label : "Confirm Password",
        pattern : usersModel.password,
        required: true,
      },

      {
        id : 8,
        name : "pin",
        type : "number",
        placeholder : "Enter transaction pin",
        errorMessage : "it should be a valid pin number!",
        label : "Pin",
        value : usersModel.pin,
        required: true,
      }
]

  const onChange = (e) => {
    setUsersModel({...usersModel, [e.target.name]: e.target.value});
    
  }

  const createUsersAccount = (e) => {
    e.preventDefault();
    UserService.createUsersAccount(usersModel).then((response) => {
        setUsersModel(response);
        navigate("/email-verification");
        // console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

  }
  
    return ( 
        <section>
            <section className="lg:flex">
                <div className="lg:flex-1 non-italic]">
                    <div className="">
                        <h1 className="pt-6 ml-6 mb-20
                            text-2xl font-bold lg:leading-7 text-[#012A4A] lg:pt-20 lg:ml-48"
                        >
                            Fintech.africa
                        </h1>
                        <h1 className="ml-6 mb-8
                            text-2xl font-bold text-[#000000] lg:leading-7 lg:ml-48"
                        >
                            Get Started with Fintech
                        </h1>
                    </div>
                    <form action="/" method="/" onSubmit={createUsersAccount}>

                        {inputs.map((input) => (
                            <FormInput key={input.id} {...input}  values={usersModel[input.name]}
                            onChange={onChange}
                            className="py-2 px-2"
                             />
                        ))}
                         <div className="non-italic">
                           <div className="lg:ml-48 non-italic ml-6">
                            <button 
                            type="submit"
                            className="w-[18rem] mb-12 mt-10 ml-2 lg:ml-0 
                            text-base font-bold text-[#FFFFFF] leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE] rounded-md py-2 px-2"
                            
                            >
                                Sign Up
                            </button>
                           </div>
                           <div className="lg:ml-48 ml-6">
                             <Link to="/login" className="text-base font-normal text-[#000000] leading-6 cursor-pointer">
                                Already have an account? <a className="font-bold">Login</a>
                            </Link>
                           </div>
                        </div> 

                    </form>
                </div>
                <div className="lg:flex-1">
                    <div className="hidden lg:flex">
                        <img src={img} alt="image" className="lg:h-[1284px] object-cover" />
                    </div>
                </div>

            </section>
        </section>
     );
}
 
export default Signup;