import { Link, useNavigate } from "react-router-dom";
import Arrow from "../../svg/Arrow";
import Line from "../../svg/Line";
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import BankModal from "../bankModal/BankModal";


const OtherBankTransferDetails = () => {

    const navigate = useNavigate();

    return ( 
    <section className="h-max bg-[#E5E5E5] non-italic">

        <div 
            onClick={() => navigate("/local-bank-transfer")}
            className="ml-6 gap-2 non italic flex lg:ml-72 lg:pt-20 lg:px-1 lg:gap-4 cursor-pointer pt-6">
            <span className="lg:pt-20">
                <Arrow />
            </span>
            <span className="text-base font-medium text-[#012A4A] leading-5 lg:pt-20">Go back</span>
        </div>
        <div className='flex justify-center pt-6'>
            <div className='w-[860px] h-[54px] bg-[#C4C4C4] flex justify-center items-center'>
                <span className='ml-2 text-base font-bold leading-5 text-[#012A4A] items-center non-italic'>TRANSFER</span>
            </div>
        </div> 
        <div className="flex justify-center items-center non-italic leading-5">
            <div className="
            flex-1 flex justify-center lg:ml-72 lg:pt-10 pt-8 mr-8">
                <span className="
                lg:text-lg font-bold text-[#012A4A] lg:flex lg:justify-center lg:mr-20 lg:mb-2">
                    <Link to={"/local-bank-transfer"}>Local Transfer</Link>
                </span> 
                
            </div>
           
            <div className="flex-1 pt-8 flex justify-center lg:flex-col lg:mr-36">
                <span className="lg:text-lg font-bold text-[#435FEC] lg:flex lg:justify-center lg:mr-52">
                    <Link to={"/other-bank-transfer"}>Other Bank Transfer</Link>
                </span>
                <div className="hidden lg:flex lg:mr-[11.875rem]"><Line /></div>  
            </div>
        </div> 

        <section className="flex justify-center items-center pt-6 non-italic">
            <form action="" className="w-[860px] lg:h-[662px] h-[420px] bg-[#FFFFFF]">
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
                    lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] rounded-none ml-6 py-2 px-2 lg:text-base text-sm font-medium"
                    required 
                    />
                </div>
               
                <div className="pt-6 relative">
                    <label htmlFor="select" 
                    className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                        Select Bank
                    </label>
                    {/* <div>
                        <input 
                        type="text" 
                        name="select" 
                        placeholder="Select"
                        className="leading-5 lg:bg-[#FFFFFF] w-[330px] cursor-pointer
                        lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium"
                        required 
                        />
                         <span className="sticky top-80 left-[900px] right-[330px] cursor-pointer">
                            <ArrowDropDownIcon />
                        </span>

                        <BankModal />
                    </div> */}
                   
                </div>
                <div>
                    <label htmlFor="select" className="text-base font-medium leading-5 text-[#012A4A] ml-6 block pt-1">Select</label>
                    <select className="leading-5 lg:bg-[#FFFFFF] w-[330px] cursor-pointer text-[#012A4A]
                    lg:w-[810px] lg:h-[48px] h-[35px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium">
                        <option value="select" className="hidden">Select Bank</option>
                        <option value="select" className="">First Bank</option>
                        <option value="select" className="">GTB</option>
                        <option value="select" className="">Polaris Bank</option>
                        <option value="select" className="">First Bank</option>
                        <option value="select" className="">GTB</option>
                        <option value="select" className="">Polaris Bank</option>
                    </select>
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
                    className="leading-5 lg:bg-[#FFFFFF] w-[330px] rounded-none
                    lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium"
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
                    className="leading-5 lg:bg-[#FFFFFF] w-[330px] rounded-none
                    lg:w-[810px] lg:h-[48px] h-[30px] border border-[#D9D9D9] ml-6 py-2 px-2 lg:text-base text-sm font-medium" 
                    required
                    />
                </div>
                <div className="pt-4">
                    <label htmlFor="narration" 
                    className="text-base font-medium leading-5 text-[#012A4A] ml-6 block">
                        Narration
                    </label>
                    <textarea 
                    className=" mb-2 lg:text-base text-sm font-medium w-[330px]
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
 
export default OtherBankTransferDetails;