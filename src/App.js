import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { useDispatch } from "react-redux";
import { auth} from "./utils/firebase";
import { setuser } from "./redux/actions";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./pages/Orders/Orders";

const promise = loadStripe(
  "pk_test_51KrCqXSHAJOyoZmNXZQWhmZCcBISLTZt22VimoCuRLEaeMTe8wQwPrnht6FgNBQrXJSqBiDHa9iWT2bjKiqwDMdA00d2S3oJt7"
);

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setuser(authUser));
      } else {
        dispatch(setuser(null));
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}

       




      

        <Routes>

        <Route path="/orders" element={
              <Elements stripe={promise}>
                <Orders />
              </Elements>
            }/>
        </Routes>


        <Routes>
           <Route
              path="/payment"
               element={
               <Elements stripe={promise}>
                <Payment />
               </Elements>
            }
          />
       </Routes>


          <Routes>
          <Route path="/checkout" element={<Checkout />} />
          </Routes>
         
       

           <Routes>
           <Route path="/product/:id" element={<SingleProduct />} />
           </Routes>
          
      

          <Routes>
          <Route path="/register" element={<Register />} />
           </Routes>

          <Routes>
          <Route path="/login" element={<Login />} />
           </Routes>

          <Routes>
          <Route path="/" element={<Header />} />
          </Routes>

          <Routes>
           <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
