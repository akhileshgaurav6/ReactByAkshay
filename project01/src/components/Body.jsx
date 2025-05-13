import RestaurantCard, {withPromtedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //local state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setRilteredRestaurant] = useState([]);

  const [searchText, setSearhText] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard)

  // whenever state variables update, react triggers reconciliation cycle(re-renders the component)
  // console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // setListOfRestaurant(json.data.cards[2].card)
    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //     return <Shimmer />
  // }
  function searchRestaurant() {
    const filteredRestaurant = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurant(filteredRestaurant);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! please check your internet connection</h1>
    );

    const { loggeedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearhText(e.target.value);
            }}
          />
          <button onClick={searchRestaurant}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search m-4 p-4 flex items-center">
          <label>Username</label>
          <input className="border border-black p-2" value={loggeedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          // to={"/restaurants" + restaurant.data.id}
          <Link
            key={restaurant?.data?.id}
            to={
              "/restaurants/" + (restaurant?.info?.id || restaurant?.data?.id)
            }
          >
            <RestaurantCard
              key={restaurant.data ? restaurant.data.id : restaurant.info.id}
              resData={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
