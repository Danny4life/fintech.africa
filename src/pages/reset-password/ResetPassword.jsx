
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormInput from "../../component/formInput/FormInput";
import img from "../../assets/signup-image.jpg";


const ResetPassword = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        newPassword : "",
        confirmPassword : "",
        
    });


    const inputs = [      
        {
          id : 1,
          name : "new password",
          type : "password",
          placeholder : "Password",
          errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
          label : "New Password",
          pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
  
        {
          id : 2,
          name : "confirm password",
          type : "password",
          placeholder : "Re-enter Password",
          errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
          label : "Confirm Password",
          pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        }, 
  ]
  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
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
                        </h1>
                        <h1 className="ml-6 mb-8
                            text-2xl font-bold text-[#012A4A] lg:leading-7 lg:ml-48"
                        >
                            Reset Password
                        </h1>
                    </div>
                    <form action="/" method="/" onSubmit={handleSubmit}>
                        <div className="non-italic">
                            {inputs.map((input) => (

                                <FormInput  key={input.id} {...input}  values={user[input.name]}
                                onChange={onChange} />
                            ))}
                            
                            <div className="mb-6">
                            </div>                     
                           <div className="lg:ml-48 non-italic ml-6">
                            <button
                            type="submit" 
                            className="w-[20rem] mb-8 
                            text-base font-bold text-[#FFFFFF] leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE] rounded-md py-2 px-2"
                            
                            >
                                Reset Password
                            </button>
                           </div>
                        </div>
                    </form>
                </div>
                <div className="lg:flex-1">
                    <div className="hidden lg:flex">
                        <img src={img} alt="image" className="lg:h-[1023px] object-cover" />
                    </div>
                </div>

            </section>
        </section>
     );
}
 
export default ResetPassword;