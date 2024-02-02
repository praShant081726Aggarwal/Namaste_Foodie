import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restList from "../utils/storeData";
import { useState } from "react";
//Body
const Body = () => {
  // State Variable
  const [ListofRestaurant, setListofRestaurant] = useState(restList);

  return (
    <div className="body" id="body">
      <div>
        <Search />
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRatingString > 4
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
