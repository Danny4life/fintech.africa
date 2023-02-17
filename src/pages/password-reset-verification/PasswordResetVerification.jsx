import { Link } from "react-router-dom";
import img from "../../assets/verification.png";

const PasswordResetVerification = () => {
    return ( 
        <section className="bg-[#E5E5E5] h-screen flex justify-center items-center">
        <div className="w-[430px] h-[350px]
        lg:w-[860px] lg:h-[527px] bg-white"
        >
            <div className="flex flex-col justify-center items-center non-italic lg:pt-28 pt-12">
                <img src={img} alt="image" className="lg:mb-6" />
                <h3 className="text-base
                lg:text-3xl font-bold leading-10 text-[#21334F] lg:mb-8">
                    Check your email
                </h3>
                <p className="w-[21rem] text-base font-normal text-[#21334F] mb-6">
                We sent a password reset link to your email. Please click the link to reset your password
                </p>
                <Link to="/" className="text-[#012A4A] text-base font-normal leading-5 lg:mb-8 mb-3">
                    Don’t receive the email? <span className="text-[#4361EE] font-bold">Click to Resend link</span>
                </Link>
            </div>  
            <div className="flex justify-center items-center">
                <Link to="/" 
                className="text-base font-medium leading-5 text-[#FFFFFF]
                w-[132px] h-[42px] bg-[#4361EE] flex justify-center items-center">
                    Back to Login
                </Link>
            </div>    
        </div>
    </section>
     );
}
 
export default PasswordResetVerification;