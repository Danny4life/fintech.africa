import Topbar from "../../component/dashboard-component/Topbar";
import OtherBankTransferDetails from "../../component/otherBankTransfer/OtherBankTransferDetails";


const OtherBankTransfer = () => {
    return ( 
        <section>
         <nav>
            <Topbar />
        </nav>
        <section>
            <OtherBankTransferDetails />
        </section>
       </section>
     );
}
 
export default OtherBankTransfer;