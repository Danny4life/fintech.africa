import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../svg/Arrow";
import Line from "../../svg/Line";

const LocalTransferDetails = () => {

    const navigate = useNavigate();

    return ( 
        <section>
            <div 
            onClick={() => navigate("/dashboard")}
            className="ml-6 gap-2 non italic flex lg:ml-72 lg:pt-16 lg:px-1 lg:gap-4 cursor-pointer">
                <span>
                    <Arrow />
                </span>
                <span className="text-base font-medium text-[#012A4A] leading-5">Go back</span>
            </div>
            <div className='flex justify-center pt-12'>
                <div className='w-[860px] h-[54px] bg-[#C4C4C4] flex justify-center items-center'>
                    <span className='ml-2 text-base font-bold leading-5 text-[#012A4A] items-center non-italic'>TRANSFER</span>
                </div>
            </div> 
            <div className="flex justify-center items-center non-italic leading-5">
                <div className="flex-1 flex justify-center flex-col lg:ml-72 lg:pt-12 pt-8 ml-6">
                    <span className="lg:text-lg font-bold text-[#435FEC] lg:flex lg:justify-center lg:mr-48 lg:mb-2"><Link to={"#"}>Local Transfer</Link></span> 
                    <div className="hidden lg:flex"><Line /></div>  
                </div>
               
                <div className="flex-1 pt-8">
                    <span className="lg:text-lg font-bold text-[#012A4A]"><Link to={"#"}>Other Bank Transfer</Link></span>
                </div>
            </div> 
            
        </section>
     );
}
 
export default LocalTransferDetails;