import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import img from "../../assets/signup-image.jpg";
import FormInput from "../../component/formInput/FormInput";



const Signup = () => {

const navigate = useNavigate();

const [user, setUser] = useState({
    firstname : "",
    lastname : "",
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
        name : "firstname",
        type : "text",
        placeholder : "Enter your first name",
        errorMessage: "First name must be enter!",
        label : "First Name",
        pattern : "^[A-Za-z0-9]{3,16}$",
        required: true,
      },

      {
        id : 2,
        name : "lastname",
        type : "text",
        placeholder : "Enter your last name",
        errorMessage: "Last name must be enter!",
        label : "Last Name",
        pattern : "^[A-Za-z0-9]{3,16}$",
        required: true,
      },

      {
        id : 3,
        name : "email",
        type : "email",
        placeholder : "Enter your email",
        errorMessage : "it should be a valid email address!",
        label : "Email",
        required: true,
      },

      {
        id : 4,
        name : "phoneNumber",
        type : "number",
        placeholder : "Enter Phone number",
        errorMessage : "Enter digit number only!",
        label : "Phone Number",
        required: true,
      },

      {
        id : 5,
        name : "bvn",
        type : "number",
        placeholder : "Enter your BVN",
        errorMessage : "it should be a valid bvn number!",
        label : "BVN",
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
        required: true,
      },

      {
        id : 7,
        name : "confirmpassword",
        type : "password",
        placeholder : "Confirm Password",
        errorMessage : "password don't match!",
        label : "Confirm Password",
        pattern : user.password,
        required: true,
      },

      {
        id : 8,
        name : "pin",
        type : "number",
        placeholder : "Enter transaction pin",
        errorMessage : "it should be a valid pin number!",
        label : "Pin",
        required: true,
      }
]

    const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
    
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
                    <form action="/" method="/" onSubmit={handleSubmit}>

                        {inputs.map((input) => (
                            <FormInput key={input.id} {...input}  values={user[input.name]}
                            onChange={onChange} />
                        ))}
                         <div className="non-italic">
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="firstname" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    First Name
                                </label>
                                <input 
                                type="text" 
                                name="firstname"    
                                placeholder="Enter your first name" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="lastname" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Last Name
                                </label>
                                <input 
                                type="text" 
                                name="lastname"    
                                placeholder="Enter your last name" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="email" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Email
                                </label>
                                <input 
                                type="email" 
                                name="email"    
                                placeholder="Enter your email" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="phone" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Phone Number
                                </label>
                                <input 
                                type="number" 
                                name="phone"    
                                placeholder="Enter your number" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="bvn" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    BVN
                                </label>
                                <input 
                                type="number" 
                                name="bvn"    
                                placeholder="Enter your bvn" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="password" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Password
                                </label>
                                <input 
                                type="password" 
                                name="password"    
                                placeholder="Enter your password" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="confirmPassword" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Confirm Password
                                </label>
                                <input 
                                type="password" 
                                name="password"    
                                placeholder="Confirm your password" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="pin" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Pin
                                </label>
                                <input 
                                type="number" 
                                name="pin"    
                                placeholder="Enter transaction pin" 
                                required 
                                className="w-[18rem] text-base text-[#C4C4C4] font-light leading-6 mb-8
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                           <div className="lg:ml-48 non-italic ml-6">
                            <button 
                            className="w-[18rem] mb-12 mt-10  
                            text-base font-bold text-[#FFFFFF] leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE] rounded-md py-2 px-2"
                            onClick={() => navigate("/email-verification")}
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