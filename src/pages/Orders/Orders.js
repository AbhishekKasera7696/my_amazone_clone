import React, {useState, useEffect} from 'react';
import "./Orders.css";
import {db} from "../../utils/firebase";
import Order from "../../components/Order/Order";
import {useSelector} from "react-redux";

const Orders = () => {
  
  const {user} = useSelector((state) => state.data);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    if(user){
      db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot((snapshot) =>
        
       setOrder(
         snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.id,
            data:doc.data(),
         }))
       )
      
      );
    }else{
      setOrder([])
    }
  },[user])

  return (
    <div className='orders'>
        <h1>Yours Order</h1>
        <div className='orders_order'>
          {orders &&  orders.map((order,index) => (
               <Orders order={order} key={index}/>
          ))}
        </div>
    </div>
  )
}

export default Orders
