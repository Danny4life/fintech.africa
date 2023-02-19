import { Link } from "react-router-dom";

const DashboardPage = () => {



    return ( 
        <nav>
            <header className="w-[1440px] h-[97px] bg-[#F5F5F5] fixed">
                <div className="non-italic">
                    <div className="lg:pt-6">
                    <Link to={"/"}>
                        <h1 className="lg:text-3xl lg:font-bold lg:leading-9 text-[#012A4A]">Fintech.africa</h1>
                    </Link> 
                    </div>                  
                </div>

            </header>
        </nav>
     );
}
 
export default DashboardPage;