import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/signup-image.jpg";
import FormInput from "../../component/formInput/FormInput";
import { useState } from "react";


const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        email : "",
        password : "",
        
    });

    const inputs = [      
          {
            id : 1,
            name : "email",
            type : "email",
            placeholder : "Enter your email",
            errorMessage : "it should be a valid email address!",
            label : "Email",
            required: true,
          },
    
          {
            id : 2,
            name : "password",
            type : "password",
            placeholder : "Password",
            errorMessage : "Password should be 8-20 characters and includes atleast 1 letter, 1 number, and 1 special character",
            label : "Password",
            pattern :`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
          }, 
    ]
    


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
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
                            text-2xl font-bold text-[#012A4A] lg:leading-7 lg:ml-48"
                        >
                            Hi, Welcome Back
                        </h1>
                    </div>
                    <form action="/" method="/" onSubmit={handleSubmit}>
                        <div className="non-italic">
                            {inputs.map((input) => (

                                <FormInput  key={input.id} {...input}  values={user[input.name]}
                                onChange={onChange} />
                            ))}
                            {/* <div className="lg:ml-48 ml-6">
                                <label htmlFor="email" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                                    Email
                                </label>
                                <input 
                                type="email" 
                                name="email"    
                                placeholder="Enter your email" 
                                required 
                                className="w-[20rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
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
                                className="w-[20rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] rounded-md opacity-80 py-2 px-2 border"
                                />
                            </div> */}
                            <div className="mb-6">
                                <Link to="/password-reset" className="ml-6
                                    lg:ml-48 text-base font-normal text-[#4285F4] leading-6">
                                    Forget passord?
                                </Link>
                            </div>                     
                           <div className="lg:ml-48 non-italic ml-6">
                            <button
                            type="submit" 
                            className="w-[20rem] mb-8 
                            text-base font-bold text-[#FFFFFF] leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE] rounded-md py-2 px-2"
                            
                            >
                                Login
                            </button>
                           </div>
                           <div className="lg:ml-48 ml-6">
                             <Link to="/signup" className="text-base font-normal text-[#000000] leading-6 cursor-pointer">Don't have an account? <a className="text-base font-bold leading-6 text-[#4361EE]">Create an account</a></Link>
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
 
export default Login;