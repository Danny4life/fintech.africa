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
                            <h1 className="font-normal text-2xl leading-7 ml-6 mb-4 md:text-3xl
                            lg:font-bold lg:text-5xl lg:leading-[3.813rem] lg:ml-24 
                            text-[#3A0CA3] lg:w-[90%] lg:pt-16 lg:pl-4"
                            >
                                Quick and easy payment platform for all your transactions
                            </h1>

                            <p className="ml-6 
                            lg:w-[70%] lg:font-normal lg:text-base lg:leading-6 text-[#012A4A] lg:ml-28">
                                Save and manage all your transaction in one place, easy payment 
                                anytime & anyday.
                            </p>
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