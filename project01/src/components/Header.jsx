import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // console.log("Header Render");

  // it is called every time when btnNameReact updated
  // useEffect(() => {
  //   console.log("useEffect Called");
  // }, [btnNameReact]);

  const {loggeedInUser} = useContext(UserContext);
  console.log(loggeedInUser);
  

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>Home</li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
            className="login"
          >
            {btnNameReact}
          </button>
          <li className="font-bold">{loggeedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
