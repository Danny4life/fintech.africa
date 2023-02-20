import { Link, useNavigate } from "react-router-dom";

const PasswordReset = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/password-reset-verification")

    }

    return ( 
        <section className="bg-[#E5E5E5] h-screen flex justify-center items-center">
        <div className="w-[430px] h-[350px]
        lg:w-[860px] lg:h-[527px] bg-white"
        >
            <div className="flex flex-col justify-center items-center non-italic lg:pt-16 pt-6">
                <h3 className="text-base
                lg:text-3xl font-bold leading-10 text-[#21334F] lg:mb-8">
                    Forget Password
                </h3>
                <p className="lg:w-[27rem] lg:text-base text-sm font-normal text-[#C4C4C4] lg:mb-6 ml-6">
                Enter the email associated with your account and we’ll send an email with instruction to reset your password
                </p>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="lg:ml-56 ml-6">
                    <label htmlFor="email" className="block text-base font-medium text-[#000000] leading-6 mb-2">
                        Email
                    </label>
                    <input 
                    type="email" 
                    name="email"    
                    placeholder="Enter your email" 
                    required 
                    className="w-[20rem] text-base text-[#C4C4C4] font-light leading-6 mb-4
                                lg:w-[24.688rem] h-[3rem] bg-[#FFFFFF] border-[#000000] 
                                rounded-md opacity-80 py-2 px-2 border"
                    />
             </div>  
            <div className="lg:ml-56 non-italic ml-6">
                <button 
                    type="submit"
                    className="w-[20rem] lg:mb-8 mb-2
                                text-base font-bold text-[#FFFFFF] 
                                leading-4 lg:w-[24.688rem] h-[3rem] bg-[#4361EE]
                                 rounded-md py-2 px-2"
                    
                            >
                                Reset Password
                </button>
            </div>  
            <div className="flex justify-center items-center">
                <Link to="/login" 
                className="text-base font-medium leading-5 text-[#000000;]
                w-[132px] h-[42px] bg-[#E5E5E5] flex justify-center items-center">
                    Back to Login
                </Link>
            </div>  
            </form>     
        </div>      
    </section>
     );
}
 
export default PasswordReset;