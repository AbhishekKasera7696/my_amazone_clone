import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getBasketTotal} from "../../utils/BasketTotal";

const SubTotal = () => {
    const {basket,user} = useSelector(state => state.data)
    let navigate = useNavigate();
    const handleCheckout = () =>{
        if(user){
            navigate("/payment")
        }else{
            navigate("/login")
        }
    }
  return (
    <div className='subtotal'>
        <CurrencyFormat
         renderText={(value) => (
             <>
             <p>
                 Subtotal ({basket.length} items) : <strong>{value}</strong>
             </p>
             <small className='subtotal_gift'>
                   <input type="checkbox"/>
                   This Order Contain A Gift
             </small>
             </>
         )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button onClick={handleCheckout}>Proceed  to Checkout</button>
    </div>
  )
}

export default SubTotal
