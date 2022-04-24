import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { removeFromBasket } from "../../redux/actions";

const CheckoutProduct = ({ id, title, image, rating, price, hideButton }) => {
  let dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  };
  return (
    <div className="checkout_product">
      <img src={image} alt="" className="checkout_product_image" />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <p className="checkout_product_price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="checkout_product_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeItemFromBasket}>
            <i>
              <ShoppingCartOutlinedIcon />
            </i>
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
