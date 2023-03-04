import { useState } from "react";
 import img1 from "../../assets/Notification.png";
import img from "../../assets/samuel.jpg";
import { Link, useNavigate } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';
import "./topbar.css"

const Topbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

 
   //const Menus = ["Wallet", "Profile", "Transfer", "Logout"];
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
                        <div className="flex items-center gap-3 avatar cursor-pointer">
                            <img 
                                onClick={() => setOpen(!open)}
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
               { open && (
                    <div className="flex  justify-end mr-24 items-center cursor-pointer pt-2">
                    <div className="bg-white w-32 p-4 shadow-lg">
                        <ul>
                            {/* {
                                Menus.map((menu) => (
                                    <li 
                                    // onClick={() => navigate("/")}
                                    className="p-2 text-base text-[#012A4A] rounded hover:bg-blue-100" key={menu}>
                                        {menu.}

                                    </li>
                                ))
                            } */}
                            <li 
                            onClick={() => navigate("/dashboard")} 
                            className="p-2 text-base text-[#012A4A] rounded hover:bg-blue-100">
                                Wallet
                            </li>
                            <li
                            onClick={() => navigate("/profile")}  
                            className="p-2 text-base text-[#012A4A] rounded hover:bg-blue-100">
                                Profile
                            </li>
                            <li
                            onClick={() => navigate("/local-bank-transfer")}  
                            className="p-2 text-base text-[#012A4A] rounded hover:bg-blue-100">
                                Transfer
                            </li>
                            <li
                            onClick={() => navigate("/")}  
                            className="p-2 text-base text-[#012A4A] rounded hover:bg-blue-100">
                                Logout
                            </li>
                        </ul>
                    </div>

                    </div>
                )}
                
            </nav>
          
        </section>
     );
}
 
export default Topbar;