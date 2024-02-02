import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import restList from "../utils/storeData";
//Body
const Body = () => { 
    return (
      <div className="body" id="body">
          <div>
          <Search />
          </div>
          <div className="resContainer" id="resContainer">
          {
            restList.map(restaurant => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
          }
          </div>
      </div>
    );
  };

  export default Body;
