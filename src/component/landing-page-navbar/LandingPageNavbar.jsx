import { useState } from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPageNavbar = () => {

    const [isMobile, setIsMobile] = useState(false);
    return ( 
        <section>
            <nav>
                <header className="navbar">
                    <h3 className="logo">Fintech.africa</h3>
                    <ul 
                    className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}
                    >
                        <Link to="/" className="home">
                            <li>Home</li>
                        </Link>
                        <Link to="/" className="feature">
                            <li>Features</li>
                        </Link>
                        <Link to="/" className="about">
                            <li>About</li>
                        </Link>
                        <Link to="/" className="contact">
                            <li>Contact Us</li>
                        </Link>
                        <Link to="/" className="login">
                            <li>Login</li>
                        </Link>
                        <Link to="/signup" className="account">
                            <li>Create an account</li>
                        </Link>
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
 
export default LandingPageNavbar;