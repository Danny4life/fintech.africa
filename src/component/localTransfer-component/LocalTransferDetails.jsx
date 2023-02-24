import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../svg/Arrow";
import Line from "../../svg/Line";

const LocalTransferDetails = () => {

    const navigate = useNavigate();

    return ( 
        <section className="h-max bg-[#E5E5E5] non-italic">
            <div 
            onClick={() => navigate("/dashboard")}
            className="ml-6 gap-2 non italic flex lg:ml-72 lg:pt-10 lg:px-1 lg:gap-4 cursor-pointer pt-6">
                <span className="lg:pt-20">
                    <Arrow />
                </span>
                <span className="text-base font-medium text-[#012A4A] leading-5 lg:pt-20">Go back</span>
            </div>
            <div className='flex justify-center pt-8'>
                <div className='w-[860px] h-[54px] bg-[#C4C4C4] flex justify-center items-center'>
                    <span className='ml-2 text-base font-bold leading-5 text-[#012A4A] items-center non-italic'>TRANSFER</span>
                </div>
            </div> 
            <div className="flex justify-center items-center non-italic leading-5">
                <div className="flex-1 flex justify-center flex-col lg:ml-72 lg:pt-10 pt-8 ml-6">
                    <span className="lg:text-lg font-bold text-[#435FEC] lg:flex lg:justify-center lg:mr-48 lg:mb-2"><Link to={"/local-bank-transfer"}>Local Transfer</Link></span> 
                    <div className="hidden lg:flex"><Line /></div>  
                </div>
               
                <div className="flex-1 pt-8">
                    <span className="lg:text-lg font-bold text-[#012A4A]"><Link to={"/other-bank-transfer"}>Other Bank Transfer</Link></span>
                </div>
            </div> 

            <section className="flex justify-center items-center pt-8 non-italic">
                <form action="" className="w-[860px] lg:h-[553px] h-[420px] bg-[#FFFFFF]">
                    <div className="pt-6">
                        <label htmlFor="accountNumber" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            Account Number
                        </label>
                        <input 
                        type="number" 
                        name="accountNumber" 
                        placeholder="Account number"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px]
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium text-[#D9D9D9]"
                        required 
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="amount" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            Amount
                        </label>
                        <input 
                        type="number" 
                        name="amount" 
                        placeholder="Amount"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px]
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium text-[#D9D9D9]"
                        required 
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="pin" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            Pin
                        </label>
                        <input 
                        type="number" 
                        name="pin" 
                        placeholder="pin"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px]
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium text-[#D9D9D9]" 
                        required
                        />
                    </div>
                    <div className="pt-4">
                        <label htmlFor="narration" 
                        className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                            Narration
                        </label>
                        <textarea 
                        className=" mb-2 lg:text-base text-sm font-medium text-[#D9D9D9] w-[330px]
                        lg:w-[810px] lg:h-[134px] border border-[#D9D9D9] ml-6 py-2 px-2" 
                        name="narration" 
                        placeholder="Message"
                        id="" cols="" rows="">  
                        </textarea>
                    </div>
                    <div className="non-italic ml-6">
                        <button 
                            type="submit"
                            className="w-[330px] h-[35px] text-sm
                            lg:text-base font-bold text-[#FFFFFF] leading-4 lg:w-[810px] lg:h-[3rem] bg-[#4361EE] rounded-md py-2 px-2"
                            
                        >
                                Send money
                        </button>
                    </div>
                   
                   

                </form>
            </section>
            
        </section>
     );
}
 
export default LocalTransferDetails;