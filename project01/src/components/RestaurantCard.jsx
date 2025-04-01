import { CDN_URL } from "../utils/Constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    // console.log("data",resData);
    

    const {
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData.data?resData.data:resData.info;
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"
    // console.log("url",url);
    const cloudinaryImageId = resData.info?url+resData.info.cloudinaryImageId:CDN_URL;
    // console.log("ans",cloudinaryImageId);
    

    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
                className="res-logo"
                alt="res-logo" 
                src={ cloudinaryImageId } />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}⭐</h4>
            <h4>{costForTwo / 100}FOR Two</h4>
            <h4>{resData.data?resData.data.deliveryTime:resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
};

export const withPromtedLabel = (RestaurantCard) => {
    return () => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard />
            </div>
        )
    }
}

export default RestaurantCard;