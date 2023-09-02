import { Link } from "react-router-dom";

const Navbar : React.FC= () => {
    return ( 
        <nav className="navbar">
            <h1>Tour of heroes</h1>
            <div className="links">
                <Link to="/">
                    <button>Dashboard</button>
                </Link>
                <Link to="/heroes">
                    <button>Heroes</button>
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;