
import ButtonHomepage from "../../component/ButtonHomepage";
import LandingPageNavbar from "../../component/landing-page-navbar/LandingPageNavbar";
import img1 from "../../assets/img1.png";
import GoodIcon from "../../svg/GoodIcon";



const Homepage = () => {
    return ( 
        <section>
            <section className="">
                <nav className="">
                    <header className="">
                        {/* navbar must be sticky */}
                        <LandingPageNavbar />
                    </header>                
                </nav>            
            </section>
            <main className="">
                <section className=" md:flex">
                    <div className="md:flex-1">
                        <div className="non-italic bg-[#e5efe6] lg:h-[600px] h-[300px] lg:w-[742px]">
                            <h1 className="pt-12 font-normal text-2xl leading-7 ml-6 mb-4 md:text-3xl
                            lg:font-bold lg:text-5xl lg:leading-[3.813rem] lg:ml-24 
                            text-[#3A0CA3] lg:w-[90%] lg:pt-28 lg:pl-4"
                            >
                                Quick and easy payment platform for all your transactions
                            </h1>

                            <p className="ml-6 mb-4
                            lg:w-[70%] lg:font-normal lg:text-base lg:leading-6 text-[#012A4A] lg:ml-28 lg:mb-6">
                                Save and manage all your transaction in one place, easy payment 
                                anytime & anyday.
                            </p>
                            
                            <div className="ml-6 lg:ml-28">
                                <ButtonHomepage />
                            </div>
                           
                        </div>
                    </div>
                    <div className="md:flex-2 bg-[#d5c3b1]"></div>
                    <div className="h-[300px] md:flex-1 
                        lg:pl-44 lg:w-[742px] lg:h-[600px] bg-[#cbb7e9]"
                        >
                        
                        <img src={img1} alt="image" 
                            className="h-[300px] ml-6 md:ml-16 rounded-[50%] bg-[#7b4db5] 
                            lg:mt-20 lg:h-[455px]" 
                        />
                        <div className="w-[178px] h-[145px] bg-[#FFFFFF] flex absolute bottom-[18rem]">
                            <div>
                                <span>Easy Transfer</span>
                            </div>

                        </div>
                         <div 
                            className="flex md:max-xl:hidden gap-1 justify-center items-center absolute bottom-56 right-6
                            md:top-24 md:right-8 w-[207px] h-[64px] bg-[#FFFFFF]">
                                <span><GoodIcon /></span>
                                <span className="font-semibold text-base leading-5 text-[#012A4A]">
                                    Payment Successful
                                </span>
                        </div>
                       
                    </div>
                </section>
            </main>
        </section>
       
     );
}
 
export default Homepage;