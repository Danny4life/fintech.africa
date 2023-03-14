import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/signup-image.jpg";
import FormInput from "../../component/formInput/FormInput";
import { useState } from "react";
import LoginService from "../../component/services/LoginService";


const Login = () => {

    const navigate = useNavigate();

    const [loginModel, setLoginModel] = useState({

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
            value : loginModel.email,
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
            value : loginModel.password,
            required: true,
          }, 
    ]
    
    const onChange = (e) => {
        setLoginModel({...loginModel, [e.target.name]: e.target.value});
        
      }

      const loginUser = (e) => {
        e.preventDefault();
        LoginService.loginUser(loginModel).then((response) => {
            setLoginModel(response);
            // console.log(response);

            if(response.data.message == "Email or password not match"){
                alert("Email or password not match");
            } else if(response.data.message == "Login successful"){
                navigate("/dashboard");
            }else {
                alert("Email does not exists");
            }
        }, fail => {
            console.error(fail);
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
                            text-2xl font-bold text-[#012A4A] lg:leading-7 lg:ml-48"
                        >
                            Hi, Welcome Back
                        </h1>
                    </div>
                    <form action="/" method="/" onSubmit={loginUser}>
                        <div className="non-italic">
                            {inputs.map((input) => (

                                <FormInput  key={input.id} {...input}  values={loginModel[input.name]}
                                onChange={onChange} />
                            ))}
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