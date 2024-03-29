import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setresInfo] = useState(null);
  const {resId} = useParams(); 


  const fetchMenu = async () => {
    const data = await fetch(Menu_API + resId );
    const json = await data.json();
    setresInfo(json.data);
  }; 

  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((dish) => (
            <li key={dish.card.info.id}>{dish.card.info.name} - {"₹"}{dish.card.info.price/100 || dish.card.info.defaultPrice/100}</li>
        ))}
        
      </ul>
    </div>
  );
};

export default RestaurantMenu;