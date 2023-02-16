
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
import SectionThree from "../../component/homepage-section/SectionThree";
import SectionFour from "../../component/homepage-section/SectionFour";






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
                <section>
                    <SectionThree 
                        transactionOne={transaction} 
                    />
                </section>
                <section>
                    <SectionFour 
                        dot={<Dot1 />} 
                        hr={<Hr1 />} 
                        img2={img2} 
                    />
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





