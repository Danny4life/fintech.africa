import { Link } from "react-router-dom";
import Setting from "../../svg/Setting";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import img from "../../assets/samuel.jpg";

const Topbar = () => {



    return ( 
        <>
      
            <nav className="">
            <header className="w-[1440px] h-[97px] bg-[#F5F5F5]">
                <div className="non-italic">
                    <div className="lg:pt-6 pt-8 lg:flex lg:justify-between">
                        <Link to={"/"}>
                            <h1 className="
                                text-3xl lg:ml-24 lg:px-10 font-bold leading-9 text-[#012A4A]">
                                Fintech.africa
                            </h1>
                        </Link> 

                        <div className="lg:flex items-center hidden lg:mr-24 px-10 gap-4 cursor-pointer">
                            <Setting />
                            <NotificationsNoneIcon />
                            <div className="flex items-center gap-3">
                                <img 
                                    src={img} alt="samuel" 
                                    className="w-[42px] h-[42px] rounded-[50%] bg-[#D9D9D9] object-cover" 
                                />
                                <span className="text-base font-medium leading-5 text-[#012A4A]">Samuel</span>
                            </div>
                            
                        </div>
                    </div>  
                                   
                </div>

            </header>
        </nav>  
        </> 
        
     );
}
 
export default Topbar;