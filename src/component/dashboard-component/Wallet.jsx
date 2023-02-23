
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Wallet = () => {
    return ( 
        <section className="h-screen bg-[#E5E5E5]">
            <section>
                <div className="flex justify-center items-center pt-16">
                    <div className="w-[820px] h-[206px] bg-[#FFFFFF]">
                        <div className="flex justify-center items-center">
                            <div className="flex-none justify-center items-center pt-16">
                                <div className="w-[67px] h-[68px] bg-[#E5E5E5] flex justify-center items-center ml-6">
                                    <AccountBalanceWalletOutlinedIcon />
                                </div>
                            </div>
                            <div className="flex-1 h-5 w-5 bg-yellow-500">middle</div>
                            <div className="flex-1 h-5 w-5 bg-blue-800">right</div>


                        </div>

                    </div>
                </div>
               
            </section>
           
        </section>
     );
}
 
export default Wallet;