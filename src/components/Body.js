import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restList from "../utils/storeData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//Body
const Body = () => {
  // State Variable
  const [ListofRestaurant, setListofRestaurant] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []); 

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.407854&lng=76.9153281&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  
    const json = await data.json();
    setListofRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  if(ListofRestaurant.length==0){
    return <Shimmer/>;
  }

  return ( 
    <div className="body" id="body">
      {/* <div>
        <Search />
      </div> */}

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRatingString > 4.2
            );
            setListofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="resContainer" id="resContainer">
        {ListofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
//
