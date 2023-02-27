import { useState } from "react";
 import img1 from "../../assets/Notification.png";
import img from "../../assets/samuel.jpg";
import { Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import "./topbar.css"

const Topbar = () => {

    const [isMobile, setIsMobile] = useState(false);
    return ( 
        <section>
            <nav className="nav-container">
                <header className="navbar1 nav2">
                    <Link to={"/"} className="nav-logo">Fintech.africa</Link>
                    <ul 
                    className={isMobile ? "heroLinks" : "nav-links hero"}
                    onClick={() => setIsMobile(false)}
                    >
                        <div className="nav-home">
                            <li> <SettingsIcon style={{ color: "#012A4A" }} /></li>
                        </div>
                        <div className="nav-feature">
                        <img src={img1} alt="bell" />
                        </div>
                        <div className="flex items-center gap-3 avatar">
                            <img 
                                src={img} alt="samuel" 
                                className="w-[42px] h-[42px] rounded-[50%] bg-[#D9D9D9] object-cover" 
                            />
                            <span className="text-base font-medium leading-5  text-[#012A4A]">Samuel</span>
                        </div>
                    </ul>

                    <button 
                    className="mobile-menu-icon"
                    type="button"
                    onClick={() => setIsMobile(!isMobile)}
                    >
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}

                    </button>
                </header>
            </nav>
        </section>
     );
}
 
export default Topbar;