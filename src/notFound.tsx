import { Link } from "react-router-dom";

const NotFound:React.FC = () => {
    return ( 
        <div className="not-found">
         <h2>Sorry</h2>
         <p>This page dosen't exist bro!!</p>
         <Link to="/">go back to Dashboard...</Link>
        </div>
     );
}
 
export default NotFound;