import React from "react";
import "./SingleProduct.css"
import { useParams } from "react-router-dom";
import { products } from "../../utils/ProductsData";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/actions";
import Header from "../../components/Header/Header";



const SingleProduct = () => {
  let { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);
  //   console.log(singleProduct)

  let dispatch = useDispatch();

  const addItemToBasket = () => {
      const item = {
          id : singleProduct.id,
          rating : singleProduct.rating,
          title:singleProduct.title,
          price:singleProduct.price,
          image:singleProduct.image,
          specification:singleProduct.specification,
          detail:singleProduct.detail,
      };
      dispatch(addToBasket(item));
  }


  return (
     <>
        
        <Header/>

        <div className="single_product_container">
      <img
        className="single_product_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
      />
      <div>
        <div className="single_product">
          <img
            src={singleProduct.image}
            className="single_product_image"
            alt=""
          />
          <div className="single_product_info">
            <div className="single_product_title">{singleProduct.title}</div>
            <div className="single_product_rating">
              {Array(singleProduct.rating)
                .fill()
                .map((_, index) => (
                  <p key={index}>⭐</p>
                ))}
            </div>
            <p className="single_product_price">
                Price : <strong>$</strong>
                <strong>{singleProduct.price}</strong>
            </p>
            <div className="single_product_specification">
                <h4>Specification</h4>
                {singleProduct.specification && singleProduct.specification.map((item,index) =>(
                     <li key={index}>{item}</li>

                ))};
            </div>
            <div className="single_product_description">
            <h4>Product Description</h4>
            <p>{singleProduct.detail}</p>
            </div>
            <button onClick={addItemToBasket}>
                 <i>
                     <ShoppingCartOutlinedIcon/>
                 </i>
                 Add To Basket
            </button>
          </div>
        </div>
      </div>
    </div>



     </>

  );
};

export default SingleProduct;
