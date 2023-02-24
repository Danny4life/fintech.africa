import Topbar from "../../component/dashboard-component/Topbar";
import LocalTransferDetails from "../../component/localTransfer-component/LocalTransferDetails";

const LocalTrasnfer = () => {
    return ( 

        <section>
            <nav>
                <Topbar />
            </nav>
            <section>
                <LocalTransferDetails />
            </section>
            
        </section>
     );
}
 
export default LocalTrasnfer;