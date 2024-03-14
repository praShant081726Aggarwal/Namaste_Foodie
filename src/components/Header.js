import NavBar from "./NavBar";
import {LOGO_URL}   from "../utils/constants";

const Header = () => {
    return (
      <div id="header" className="heading">
        <img
          src={LOGO_URL}
          id="logo-id"
        ></img>
        <NavBar />
      </div>
    );
  };
  

export default Header;