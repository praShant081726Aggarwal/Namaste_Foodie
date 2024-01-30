import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

/////////////Header
const Header = () => {
  return (
    <div id="header" className="heading">
      <img
        src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"
        id="logo-id"
      ></img>
      <NavBar />
    </div>
  );
};

//NavBar
const NavBar = () => {
  return (
    <div id="navBar">
      <ul>
        <li>🛒</li>
        <li>🔔</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

///// BODY
const Body = () => {
  return (
    <div className="body" id="body">
        <div>
        <Search />
        </div>
        <div className="resContainer" id="resContainer">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        </div>
    </div>
  );
};

//Search
const Search = () => {
  return <div id="Search">Search</div>;
};

//Restaurant Card
const RestaurantCard = ()=>{
    return (
        <div className="resCard" id="resCard">
            <img className="resImg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
            <h3>Aggarwal's Sweets</h3>
            <h4>Shake, chaat, North indian, dosa, maggies, coffee</h4>
            <h4>5.0 stars</h4>
            <h4>35 min</h4>
        </div>
    )
}

///////AppLayout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
