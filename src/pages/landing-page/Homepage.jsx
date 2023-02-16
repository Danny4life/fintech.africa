
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
import Facebook from "../../svg/FacebookIcon";
import Twitter from "../../svg/Twitter";
import LinkedinIcon from "../../svg/LinkedinIcon";
import SectionOne from "../../component/homepage-section/SectionOne";
import SectionTwo from "../../component/homepage-section/SectionTwo";






const Homepage = () => {
    return ( 
        <section>
            <section className="">
                <nav className="">
                    <header className="">
                        <LandingPageNavbar />
                    </header>                
                </nav>            
            </section>
            <main className="">
                <section>
                    <SectionOne 
                        btn={<ButtonHomepage />} 
                        img={img1} good={<GoodIcon />} 
                        verify={<VerifyIcon />} 
                        transfer={<TransferIcon />} 
                    />
                </section>
                <section>
                    <SectionTwo 
                        briefcase={<Briefcase />} 
                        transaction={<Transaction />} 
                        transfer={<TransferIcon />} 
                        security={<SecurityIcon />} 
                    />
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
                    <p className="text-base text-[#012A4A] leading-6 font-normal">We will never spam you. Only useful mails with promo and events</p>
                </div>

                <div className="h-[166px] bg-[#012A4A] non-italic">
                    <div className="lg:flex lg:justify-around lg:items-center lg:pt-12 pt-4 ml-6">
                        <h3 className="lg:text-2xl font-bold text-[#FFFFFF] leading-7">Fintech.africa</h3>
                        <div className="flex gap-4 mb-4 lg:mb-0">
                            <a href="#" className="text-base font-semibold leading-6 text-[#FFFFFF] tracking-tight">Home</a>
                            <a href="#" className="text-base font-semibold leading-6 text-[#FFFFFF] tracking-tight">About Us</a>
                            <a href="#" className="text-base font-semibold leading-6 text-[#FFFFFF] tracking-tight">Features</a>
                            <a href="#" className="text-base font-semibold leading-6 text-[#FFFFFF] tracking-tight">Contact Us</a>
                        </div>
                        <div className="flex gap-4 cursor-pointer">
                            <Facebook />
                            <Twitter />
                            <LinkedinIcon />
                          
                        </div>
                    </div>

                    <div className="lg:flex lg:justify-around lg:items-center lg:pt-12 pt-4 ml-6">
                        <h3 className="text-sm font-normal text-[#FFFFFF] leading-6 tracking-tighter">© 2023 All rights reserved</h3>
                        <div className="flex gap-4 mb-4 lg:mb-0">
                            <a href="#" className="text-sm font-normal leading-6 text-[#FFFFFF] tracking-tight">Privacy Policy</a>
                            <a href="#" className="text-sm font-normal leading-6 text-[#FFFFFF] tracking-tight">Terms of conditions</a>
                            <a href="#" className="text-sm font-normal leading-6 text-[#FFFFFF] tracking-tight">Legal</a>
                            <a href="#" className="text-sm font-normal leading-6 text-[#FFFFFF] tracking-tight">Help</a>
                        </div>
                        <div className="hidden lg:block">
                           <span className="text-sm font-normal leading-6 text-[#FFFFFF] tracking-tight">English Version</span>
                        </div>
                    </div>

                </div>
            </footer>
        </section>
       
     );
}
 
export default Homepage;





