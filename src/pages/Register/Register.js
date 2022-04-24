import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import AmazonLogo from "../../Amazon_Logo.png";
import { useSelector,useDispatch } from "react-redux";
import { registerInitiate } from "../../redux/actions";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


   const {user} = useSelector(state => state.data);

   const navigate = useNavigate()

    console.log("user=>",user);

   useEffect(() => {
     if(user){
      navigate('/');
     }
  
   }, [user,dispatch])

   let dispatch = useDispatch();

  const register = (e) => {
      e.preventDefault()
      dispatch(registerInitiate(email,password));
      setEmail("");
      setPassword("");
  }
  return (
    <div className="register">
      <Link to="/">
        <img src={AmazonLogo} className="register_logo" alt="logo" />
      </Link>
      <div className="register_container">
        <h1>Create Account</h1>
        <form>
            <h5>E-mail</h5>
          <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={register} className="continue">
              Continue
          </button>
          <div className="detail">
              <p>Already have an account ?</p>
              <Link to="/login" className="signin_link">
                  <p>Sign In</p>
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
