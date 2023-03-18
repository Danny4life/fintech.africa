import img from "../../assets/verification.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Confirm from "../../component/alert/Confirm";




const EmailVerification = () => {


 
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);

        setTimeout(() => {
            navigate("/login");
        }, 2000);

    };

    return ( 
        <section className="bg-[#E5E5E5] h-screen flex justify-center items-center">
            <div className="w-[430px] h-[350px]
            lg:w-[860px] lg:h-[527px] bg-white"
            >
                <div className="flex flex-col justify-center items-center non-italic lg:pt-28 pt-12">
               
                    <img src={img} alt="image" className="lg:mb-6" />
                    {
                        show === true ?  <Confirm />  : ""
                    }
                              
                    <h3 className="text-base
                    lg:text-3xl font-bold leading-10 text-[#21334F] lg:mb-8">
                        Verify your email
                    </h3>
                    <p className="w-[21rem] text-base font-normal text-[#21334F] mb-6">
                        Hi there, use the link sent to your email to verify your email and start enjoying Fintech
                    </p>
                </div> 
                <div className="flex justify-center items-center">
                <Link to="#" 
                onClick={(e) => handleSubmit(e)}
                className="text-base font-medium leading-5 text-[#FFFFFF]
                w-[132px] h-[42px] bg-[#4361EE] flex justify-center items-center">
                    verify email
                </Link>
            </div>     
            </div>
        </section>
     );
}
 
export default EmailVerification;