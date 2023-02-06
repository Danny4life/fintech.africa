import LandingPageNavbar from "../../component/landing-page-navbar/LandingPageNavbar";

const Homepage = () => {
    return ( 
        <>
         <section>
            <nav className="">
                <header className="">
                    {/* navbar must be sticky */}
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