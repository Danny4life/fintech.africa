import img from "../../assets/verification.png";

const EmailVerification = () => {
    return ( 
        <section className="bg-[#E5E5E5] h-screen flex justify-center items-center">
            <div className="w-[430px] h-[350px]
            lg:w-[860px] lg:h-[527px] bg-white"
            >
                <div className="flex flex-col justify-center items-center non-italic lg:pt-28 pt-12">
                    <img src={img} alt="image" className="lg:mb-6" />
                    <h3 className="text-base
                    lg:text-3xl font-bold leading-10 text-[#21334F] lg:mb-8">
                        Verify your email
                    </h3>
                    <p className="w-[21rem] text-base font-normal text-[#21334F] mb-6">
                        Hi there, use the link sent to your email to verify your email and start enjoying Fintech
                    </p>
                    {/* <button 
                    type="button"
                    className="text-white
                    w-[204px] h-[62px] bg-[#4361EE] py-5 px-5 flex justify-center items-center text-base font-semibold leading-6"
                    >
                        Verify email
                    </button> */}

                </div>    
            </div>
        </section>
     );
}
 
export default EmailVerification;