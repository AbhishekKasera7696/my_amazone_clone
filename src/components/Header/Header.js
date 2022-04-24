import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../../redux/actions";


const Header = () => {
  const {user,basket} = useSelector(state => state.data);

  let dispatch = useDispatch();
  const handleAuth = () => {
    if (user){
     dispatch(logoutInitiate());
    }
  }
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.ibb.co/JKmHtQ9/Amazon-logo-black-template-removebg-preview.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="header_option" style={{ marginRight: "-10px" }}>
        <LocationOnOutlinedIcon />
      </div>

      <div className="header_option">
        <span className="header_option1">Hello</span>
        <span className="header_option2">Select Your Address</span>
      </div>

      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="searchInput" />
        <SearchIcon className="searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={`${user ? "/" : "/login"}`} className="header_link">
          <div onClick={handleAuth} className="header_option">
            <span className="header_option1">Hello, {user?user.email:"Guest"}{" "}</span>
            <span className="header_option2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders" className="header_link">
          <div className="header_option">
            <span className="header_option1">Returns</span>
            <span className="header_option2">& Orders</span>
          </div>
        </Link>
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_option1">Your</span>
            <span className="header_option2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_basket">
              <ShoppingCartOutlinedIcon/>
              <span className="header_option2  basket_count">{basket && basket.length}</span>
          </div>
        </Link>
        
      </div>
      
    </nav>
    
  );
};

export default Header;
