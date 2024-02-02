import { CDN_RESTIMGURL } from "../utils/constants";
//Restaurant Card
const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name,cloudinaryImageId,avgRatingString,cuisines} = resData?.info;
    return (
        <div className="resCard" id="resCard">
            <img className="resImg" src={ CDN_RESTIMGURL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{avgRatingString}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard;