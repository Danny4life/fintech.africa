
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link, useNavigate } from 'react-router-dom';

const Wallet = () => {

    const navigate = useNavigate();


    return ( 
        <section className="h-screen bg-[#E5E5E5] non-italic">
            <section>
                <div className="flex justify-center items-center lg:pt-36">
                    <div className="w-[820px] h-[206px] bg-[#FFFFFF]">
                        <div className="flex justify-center items-center">
                            <div className="flex-none justify-center items-center pt-16">
                                <div className="w-[67px] h-[68px] bg-[#E5E5E5] flex justify-center items-center ml-6 rounded-lg">
                                    <AccountBalanceWalletOutlinedIcon />
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className='non-italic pt-12 ml-8'>
                                    <h3 className='text-base text-[#012A4A] font-medium leading-5 mb-2'>
                                        Account Balance
                                    </h3>
                                    <h1 className='text-base lg:text-3xl text-[#012A4A] font-extrabold leading-10 mb-4'>N2,000,000</h1>
                                    <div className='font-medium text-base leading-5 text-[#012A4A]'>
                                        <span className='block'>Wema Bank </span>
                                        <span className=''>7337653876</span>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="flex-1]">
                                <span className='flex justify-end items-center mr-6 lg:mr-8 pt-12 cursor-pointer'>
                                    <VisibilityOutlinedIcon />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pt-8'>
                    <div className='w-[820px] border-solid border border-[#012A4A] h-[100px]'>
                        <div className='flex justify-center items-center pt-6 gap-10 text-[#012A4A]'>
                            <div
                            onClick={() => navigate("/local-bank-transfer")} 
                            className='w-[102px] lg:w-[204px] h-[51px] bg-violet-300 flex justify-center items-center cursor-pointer'>
                                <Link to={"#"}>Transfer</Link>
                            </div>
                            <div 
                            onClick={() => navigate("/profile")} 
                            className=
                            'lg:w-[204px] w-[102px] h-[51px] bg-[#E5E5E5] flex justify-center items-center border-solid border border-[#012A4A] cursor-pointer'>
                                <Link to={"#"}>Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>  
                <div>
                    <div className='flex justify-center pt-6 relative'>
                         <span className='absolute left-80 bottom-3 hidden lg:flex'><SearchOutlinedIcon /></span>
                        <input 
                        className='lg:placeholder:px-6 lg:py-6 lg:px-12 py-2 px-2 text-base font-normal text-[#C4C4C4]
                        w-[820px] h-[48px] border border-[#C4C4C4] bg-[#FFFFFF] rounded-md' 
                        type="text" 
                        placeholder='Search Transactions' />
                       
                    </div>
                </div>   
                 <div className='flex justify-center pt-6'>
                    <div className='w-[820px] h-[48px] bg-[#C4C4C4] flex items-center'>
                        <span className='ml-2 text-base font-medium leading-5 text-[#012A4A]'>Transaction history</span>
                    </div>
                </div>            
            </section>
           
        </section>
     );
}
 
export default Wallet;