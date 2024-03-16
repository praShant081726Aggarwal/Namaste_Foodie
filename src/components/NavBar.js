import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {

    const [btnName, setbtnName] = useState("Login");

    return (
      <div id="navBar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li>Cart</li> 
          <button className="login"
            onClick={()=>{
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login"); 
              // console.log(btnName);
            }}
          >{btnName}</button>
        </ul>
      </div>
    );
  };

  export default NavBar; 