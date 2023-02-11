
import ButtonHomepage from "../../component/ButtonHomepage";
import LandingPageNavbar from "../../component/landing-page-navbar/LandingPageNavbar";
import img1 from "../../assets/img1.png";
import transaction from "../../assets/transaction.png";
import GoodIcon from "../../svg/GoodIcon";
import TransferIcon from "../../svg/TransferIcon";
import VerifyIcon from "../../svg/VerifyIcon";
import Briefcase from "../../svg/Briefcase";
import Transaction from "../../svg/Transaction";
import SecurityIcon from "../../svg/SecurityIcon";




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
                    <div className="sm:max-md:h-[450px] md:flex-1 
                        lg:pl-44 lg:w-[742px] lg:h-[600px] bg-[#cbb7e9]"
                        >
                        
                        <img src={img1} alt="image" 
                            className="h-[300px] ml-6 md:ml-16 rounded-[50%] bg-[#9981b7] 
                            lg:mt-20 lg:h-[455px]" 
                        />
                        <div 
                            className="hidden lg:block w-[178px] h-[145px] bg-[#FFFFFF] md:max-xl:hidden
                            lg:absolute lg:bottom-[18rem]"
                        >
                            <div className="flex pt-4 ml-2 gap-1">
                                <span className="w-[24px] h-[24px] bg-[rgba(0, 0, 0, 0.04)] rounded-[50%] flex justify-center items-center"><TransferIcon /></span>
                                <span className="font-normal text-sm leading-4 text-[#012A4A] mt-1">Easy Transfer.</span>   
                            </div>

                            <div className="flex pt-4 ml-2 gap-1">
                                <span className="w-[24px] h-[24px] bg-[rgba(0, 0, 0, 0.04)] rounded-[50%] flex justify-center items-center"><VerifyIcon /></span>
                                <span className="font-normal text-sm leading-4 text-[#012A4A] mt-1">Verified Payment.</span>   
                            </div>

                            <div className="flex pt-4 ml-2 gap-1">
                                <span className="w-[24px] h-[24px] bg-[rgba(0, 0, 0, 0.04)] rounded-[50%] flex justify-center items-center"><TransferIcon /></span>
                                <span className="font-normal text-sm leading-4 text-[#012A4A] mt-1">Pay on the go.</span>   
                            </div>      

                        </div>
                         <div 
                            className="hidden lg:flex gap-1 justify-center items-center absolute right-6
                            md:top-28 md:right-8 w-[207px] h-[64px] bg-[#FFFFFF]">
                                <span><GoodIcon /></span>
                                <span className="font-semibold text-base leading-5 text-[#0b161f]">
                                    Payment Successful
                                </span>
                        </div>
                       
                    </div>
                </section>

                <section>
                    <div className="h-[453px] bg-[#E5E5E5] flex">
                        <div className="flex-1 non-italic flex flex-col justify-center items-center">
                            <h1 className="text-4xl w-[23rem] text-[#3A0CA3] font-bold ml-[-8rem] leading-10 mb-4">
                                Get the convenience of transacting with our services
                            </h1>

                            <p className="text-base font-normal w-[26rem] text-[#012A4A] leading-6 ml-[-5rem]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, 
                                sed praesent.
                            </p>
                        </div>
                        <div className="flex-1">
                            <div className="flex">
                                <div className="pt-20 pl-28">
                                    <div className="hover:bg-slate-300 w-[150px] h-[150px] px-12 py-8">
                                        <div className="mb-4">
                                            <Briefcase />
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Keeping secrecy
                                        </p>
                                    </div>                             
                                </div>

                                <div className="pt-20 pl-36">
                                    <div className="hover:bg-slate-300 w-[150px] h-[150px] px-12 py-8">
                                        <div className="mb-4">
                                            <Transaction />
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Convenient transaction
                                        </p>
                                    </div>                              
                                </div>

                            </div>

                            <div className="flex">
                                <div className="pt-2 pl-28">
                                    <div className="hover:bg-slate-300 w-[150px] h-[150px] px-12 py-8">
                                        <div className="mb-4">
                                            <TransferIcon />
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Free transaction
                                        </p>
                                    </div>
                                   
                                </div>

                                <div className="pl-36">
                                    <div className="hover:bg-slate-300 w-[150px] h-[150px] px-12 py-8">
                                        <div className="mb-4">
                                            <SecurityIcon />
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Security gauranteed
                                        </p>
                                    </div>
                                   
                                </div>

                            </div>                    
                        </div>
                    </div>
                </section>

                <section className="bg-[rgba(0, 0, 0, 0.04)] h-[420px]">
                    <div className="flex">
                        <div className="flex-1 flex justify-center items-center mt-20">
                            <img src={transaction} alt="transaction-image" className="" />
                        </div>
                        <div className="flex-1 non-italic flex flex-col justify-center items-center">
                            <h1 className="w-[25rem] text-[#3A0CA3] font-bold leading-10 text-4xl mb-4">
                                Choose how you want to make transfers
                            </h1>
                            <p className="text-base w-[25rem] font-normal text-[#012A4A] leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, 
                                sed praesent.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </section>
       
     );
}
 
export default Homepage;