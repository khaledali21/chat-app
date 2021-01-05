import React, {useState} from "react" 
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home"
import axios from "axios"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [wrongLogging, setWrongLogging] = useState(false);
  const [loggingMessage, setLoggingMessage] = useState("");

  function handleSignup(e, user){
    e.preventDefault();
    axios.post("/api/signup", {user})
    .then(res=>{
      if(res.data === "Signed up")
      {
        setLogin(true);
        <Redirect to="/"/>;
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
  function handleSignin(e, user){
    e.preventDefault();
    axios.post("/api/login", user)
    .then(res=>{
      if(res.data === "Logged in")
      {
        setLogin(true);
        <Redirect to="/"/>;
      }
      else if(res.data === "wrong Email")
      {
        setLoggingMessage("The Email you entered is incorrect");
        setWrongLogging(true);
      }     
      else if(res.data === "wrongPassword")
      {
        setLoggingMessage("The Password you entered is incorrect");
        setWrongLogging(true);
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return  (
    <div> 
      <Router>
        <Route exact path="/">
          <Home loggedIn={isLoggedIn}/>
        </Route>
        <Route exact path="/signup">
        <Signup onSubmit={handleSignup}/>
        </Route>
        <Route exact path="/login">
        <Login onSubmit={handleSignin} wrongLogging={wrongLogging} message={loggingMessage}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
