import LandingPageNavbar from "../../component/landing-page-navbar/LandingPageNavbar";

const Homepage = () => {
    return ( 
        <>
         <section>
            <nav className="">
                <header className="">
                    {/* <h1 className="font-bold text-base text-slate-800">Fintech.africa</h1>
                    <div>
                        <ul className="font-bold">
                            <li className="text-xs text-blue-500"><a>Home</a></li>
                            <li className="text-xs text-slate-800"><a>Features</a></li>
                            <li className="text-xs text-slate-800"><a>About</a></li>
                            <li className="text-xs text-slate-800"><a>Contact Us</a></li>
                        </ul>
                        <div className="non-italic">
                            <span className="font-normal text-sx text-slate-800">Login</span>
                            <div><button className="bg-blue-400 h-6 text-center flex justify-center items-center text-white rounded-md py-2 px-3 text-xs">Create an account</button></div>
                        </div>
                    </div>                 */}

                    <LandingPageNavbar />
                </header>                
            </nav>            
        </section>
        <main>

            hello

        </main>
        </>
       
     );
}
 
export default Homepage;