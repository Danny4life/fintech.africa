import { Link } from "react-router-dom";
import "./buttonHomepage.css"

const ButtonHomepage = () => {
    return ( 
        <div className="btn">
            <Link to="/signup">
                Create an account
            </Link>
        </div>
     );
}
 
export default ButtonHomepage;