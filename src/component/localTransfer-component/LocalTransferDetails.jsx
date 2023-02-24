import { useNavigate } from "react-router-dom";
import Arrow from "../../svg/Arrow";

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
            
        </section>
     );
}
 
export default LocalTransferDetails;