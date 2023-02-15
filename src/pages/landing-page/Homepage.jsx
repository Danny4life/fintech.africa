
import ButtonHomepage from "../../component/ButtonHomepage";
import LandingPageNavbar from "../../component/landing-page-navbar/LandingPageNavbar";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/photo.png";
import transaction from "../../assets/transaction.png";
import GoodIcon from "../../svg/GoodIcon";
import TransferIcon from "../../svg/TransferIcon";
import VerifyIcon from "../../svg/VerifyIcon";
import Briefcase from "../../svg/Briefcase";
import Transaction from "../../svg/Transaction";
import SecurityIcon from "../../svg/SecurityIcon";
import Dot1 from "../../svg/Dot1";
import Hr1 from "../../svg/Hr1";





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
                    <div className="h-[453px] bg-[#FFFFFF] lg:flex">
                        <div className="lg:flex-1 non-italic lg:flex lg:flex-col justify-center items-center">
                            <h1 className="text-2xl leading-7 ml-6 w-[80%] pt-12 font-normal
                            lg:text-4xl lg:w-[23rem] text-[#3A0CA3] lg:font-bold lg:ml-[-8rem] lg:leading-10 mb-4">
                                Get the convenience of transacting with our services
                            </h1>

                            <p className="ml-6 text-base font-normal lg:w-[26rem] text-[#012A4A] leading-6 lg:ml-[-5rem]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, 
                                sed praesent.
                            </p>
                        </div>
                        <div className="hidden lg:flex-1 lg:block">
                            <div className="lg:flex">
                                <div className="lg:pt-20 lg:pl-28">
                                    <div className="lg:hover:bg-slate-300 lg:w-[150px] lg:h-[150px] lg:px-12 lg:py-8">
                                        <div className="mb-4">
                                            <Briefcase />
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Keeping secrecy
                                        </p>
                                    </div>                             
                                </div>

                                <div className="lg:pt-20 lg:pl-36">
                                    <div className="lg:hover:bg-slate-300 lg:w-[150px] lg:h-[150px] lg:px-12 lg:py-8">
                                        <div className="mb-4">
                                            <Transaction />
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Convenient transaction
                                        </p>
                                    </div>                              
                                </div>

                            </div>

                            <div className="lg:flex">
                                <div className="lg:pt-2 lg:pl-28">
                                    <div className="lg:hover:bg-slate-300 lg:w-[150px] lg:h-[150px] lg:px-12 lg:py-8">
                                        <div className="mb-4">
                                            <TransferIcon />
                                        </div>
                                        <p className="w-[4.063rem] text-sm font-normal leading-5 text-[#012A4A]">
                                            Free transaction
                                        </p>
                                    </div>
                                   
                                </div>

                                <div className="lg:pl-36">
                                    <div className="lg:hover:bg-slate-300 lg:w-[150px] lg:h-[150px] lg:px-12 lg:py-8">
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

                <section className="bg-[#E5E5E5] h-[420px]">
                    <div className="lg:flex">
                        <div className="lg:flex-1 lg:flex justify-center items-center lg:mt-20">
                            <img src={transaction} alt="transaction-image" className="" />
                        </div>
                        <div className="lg:flex-1 non-italic lg:flex flex-col justify-center items-center">
                            <h1 className="text-2xl leading-7 font-normal ml-6 pt-12 w-[80%]
                            lg:w-[25rem] text-[#3A0CA3] lg:font-bold lg:leading-10 lg:text-4xl mb-4">
                                Choose how you want to make transfers
                            </h1>
                            <p className="ml-6 text-base lg:w-[25rem] font-normal text-[#012A4A] leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, 
                                sed praesent.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#FFFFFF]">
                    <div className="lg:flex">
                        <div className="lg:flex-1 non-italic">
                            <h1 className="text-2xl leading-7 font-normal ml-6 pt-12
                            lg:font-bold lg:text-4xl lg:leading-10 text-[#3A0CA3] lg:pt-12 lg:ml-28 mb-8">
                                How it works
                            </h1>
                            <p className="ml-6
                            lg:w-[26rem] font-normal lg:text-[#012A4A] text-base lg:ml-28 leading-6 mb-12">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.
                            </p>
                            <div className="flex">
                                <div>
                                    <div className="ml-6
                                    flex justify-center items-center w-[32px] h-[32px] bg-[#FFFFFFF] border border-[#012A4A] rounded-2xl lg:ml-24"
                                    >   
                                        <span className="flex justify-center items-center">
                                            <Dot1 />
                                        </span> 
                                    </div>
                                    <div className="lg:ml-28 pt-1 ml-9">
                                        <Hr1 />
                                    </div>
                                </div>
                                

                                <div className="non-italic ml-8">
                                    <span className="text-sm font-light text-[#012A4A] leading-6">STEP ONE</span> 
                                    <h2 className="lg:text-2xl font-semibold text-[#012A4A] leading-7 mb-6 pt-4">Sign in or Sign up your account</h2>   
                                    <p className="lg:w-[26rem] lg:text-base font-normal text-[#012A4A] leading-6 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Feugiat eget ipsum, sed praesent.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div>
                                    <div className="ml-6
                                    flex justify-center items-center w-[32px] h-[32px] bg-[#FFFFFFF] border border-[#012A4A] rounded-2xl lg:ml-24"
                                    >   
                                        <span className="flex justify-center items-center">
                                            <Dot1 />
                                        </span> 
                                    </div>
                                    <div className="lg:ml-28 pt-1 ml-9">
                                        <Hr1 />
                                    </div>
                                </div>
                                

                                <div className="non-italic ml-8">
                                    <span className="text-sm font-light text-[#012A4A] leading-6 mb-4">STEP TWO</span> 
                                    <h2 className="lg:text-2xl font-semibold text-[#012A4A] leading-7 pt-4 mb-6">Click transfer on your dashboard</h2>   
                                    <p className="lg:w-[26rem] text-base font-normal text-[#012A4A] leading-6 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Feugiat eget ipsum, sed praesent.
                                    </p>
                                </div>
                            </div>

                            <div className="flex">
                                <div>
                                    <div className="ml-6
                                    flex justify-center items-center w-[32px] h-[32px] bg-[#FFFFFFF] border border-[#012A4A] rounded-2xl lg:ml-24"
                                    >   
                                        <span className="flex justify-center items-center">
                                            <Dot1 />
                                        </span> 
                                    </div>
                                    <div className="lg:ml-28 pt-1 ml-9">
                                        <Hr1 />
                                    </div>
                                </div>
                                

                                <div className="non-italic ml-8">
                                    <span className="text-sm font-light text-[#012A4A] leading-6 mb-6">STEP THREE</span> 
                                    <h2 className="lg:text-2xl font-semibold text-[#012A4A] leading-7 pt-4 mb-6">Select your desire bank and send</h2>   
                                    <p className="lg:w-[26rem] text-base font-normal text-[#012A4A] leading-6 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Feugiat eget ipsum, sed praesent.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex-1 lg:py-16 lg:ml-44 lg:block flex justify-center">
                            <div className="
                            lg:w-[476px] w-[350px] lg:h-[577px] h-[400px] bg-[#cbb7e9] rounded-2xl flex justify-center">
                                <img src={img2} alt="image" className="h-[400px] lg:h-[577px]" />

                            </div>
                           
                        </div>
                          
                    </div>

                    <div className="non-italic text-center lg:flex lg:flex-col lg:justify-center lg:items-center">
                        <h1 className="text-2xl leading-7 font-normal pt-12 mb-6
                        lg:text-4xl lg:font-bold lg:leading-10 text-[#3A0CA3]">
                            Hear from our customers
                        </h1>
                        <p className="text-base font-normal leading-6 text-[#012A4A] mb-16 lg:w-[416px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.

                        </p>
                    </div>

                    <div className="lg:flex lg:gap-6 lg:justify-center lg:flex-row non-italic flex flex-col gap-4 items-center lg:mb-12 mb-4">
                        <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                       <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnsonss</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center mb-20
                    lg:flex lg:gap-6 lg:justify-center non-italic lg:flex-row">
                        <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                       <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                        <div className="w-[23rem] h-[13rem] bg-[#E5E5E5]">
                            <h3 className="text-base font-semibold text-[#012A4A] leading-7 pt-8 ml-6 mb-6">Adekola Johnson</h3>
                            <p className="w-[326px] text-base font-normal leading-7 text-[#012A4A] ml-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>

                        </div>
                    </div>

                </section>
            </main>

            <footer>
                <div className="text-center
                h-[453px] bg-[#cbb7e9] non-italic lg:flex lg:flex-col lg:justify-center lg:items-center">
                    <h1 className="text-2xl leading-7 font-normal pt-12
                    lg:text-5xl lg:font-bold lg:leading-[65px] text-[#000000] mb-8">
                        Subscribe on our Newsletter
                    </h1>
                    <p className="lg:w-[628px] text-base font-normal leading-6 text-[#012A4A]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus in orci quis eleifend id. Adipiscing cras scelerisque aliquet nisi, velit, aliquam tortor vestibulum.
                    </p>
                    <div className="box-border pt-8 lg:gap-4 lg:flex">
                        <input className="mb-8 text-base font-normal text-[#767676] leading-6 w-[263px] h-[58px] bg-[#FFFFFF] py-4 px-8 border border-[#767676]" placeholder="@ Email"></input>
                        <button className="text-base text-[#FFFFFF] font-normal leading-6 w-[263px] h-[58px] bg-[#4361EE] py-4 px-8">Subscribe</button>
                        
                    </div>
                </div>
            </footer>
        </section>
       
     );
}
 
export default Homepage;





