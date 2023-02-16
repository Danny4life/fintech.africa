
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
import FooterSection from "../../component/homepage-section/FooterSection";



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
            <main>
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
                <FooterSection 
                    facebook={<Facebook />} 
                    twitter={<Twitter />}
                    linkedin={<LinkedinIcon />} 
                />
            </footer>
        </section>    
     );
}
 
export default Homepage;





