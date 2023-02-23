
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Wallet = () => {
    return ( 
        <section className="h-screen bg-[#E5E5E5]">
            <section>
                <div className="flex justify-center items-center pt-16">
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
                                <span className='flex justify-end items-center lg:mr-8 pt-12 cursor-pointer'>
                                    <VisibilityOutlinedIcon />
                                </span>
                            </div>


                        </div>

                    </div>
                </div>
               
            </section>
           
        </section>
     );
}
 
export default Wallet;