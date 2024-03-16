import NavBar from "./NavBar";
import {LOGO_URL}   from "../utils/constants";
import { Link } from "react-router-dom";
// import Search from "./Search";

const Header = () => {
    return (
      <div id="header" className="heading">
        <Link to="/"><img 
          src={LOGO_URL}
          id="logo-id"
        ></img></Link>
        <h2><Link to="/">Namaste Foodie</Link></h2>
        <NavBar />
      </div>
    );
  };
  

export default Header;