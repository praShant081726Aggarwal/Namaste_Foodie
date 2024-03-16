import RestaurantCard from "./RestaurantCard";
// import restList from "../utils/storeData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//Body
const Body = () => {
  // State Variable
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [FilteredListofRest, setFilteredListofRest] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.407854&lng=76.9153281&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListofRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if no restaurant found 
  // if(FilteredListofRest==0){ 
  //   return (
  //     <div className="notFound">
  //       <h1>Sorry! No such restaurant found</h1>
  //     </div>
  //   )
  // }

  return ListofRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body" id="body">
      <div className="filter">
        <input  // Search Input
          type="text"
          className="SearchInput"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button   // Search button
          onClick={() => {
            const filteredListofRest = ListofRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListofRest(filteredListofRest);
          }}
        >
          Search
        </button>
        <button  // top rated button
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
        {FilteredListofRest.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
//
