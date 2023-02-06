import LandingPageNavbar from "../../component/landing-page-navbar/LandingPageNavbar";

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
                        <div className="non-italic">
                            <h1 className="font-normal text-2xl leading-7 ml-6 md:font-bold md:text-5xl md:leading-[3.813rem] md:ml-24 text-[#3A0CA3] md:w-[90%] md:py-16 md:px-4">Quick and easy payment platform for all your transactions</h1>
                        </div>
                    </div>
                    <div className="md:flex-2 md:bg-red-700">middle</div>
                    <div className="md:flex-1 md:bg-yellow-700">right</div>
                </section>
            </main>
        </section>
       
     );
}
 
export default Homepage;