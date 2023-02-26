import Topbar from "../../component/dashboard-component/Topbar";
import UserProfileDetails from "../../component/user-profile/UserProfileDetails";

const UserProfile = () => {
    return ( 
       <section>
        <nav>
            <Topbar />
        </nav>
        <section>
          <UserProfileDetails />
        </section>
       </section>
     );
}
 
export default UserProfile;