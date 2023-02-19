import Topbar from "../../component/dashboard-component/Topbar";
import Wallet from "../../component/dashboard-component/Wallet";

const Dashboard = () => {
    return ( 
        <section className="">
         <nav className="">
            <Topbar />
        </nav>
        <section>
            <Wallet />
        </section>

        </section>
       
     );
}
 
export default Dashboard;