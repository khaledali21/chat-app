import React, {useState} from "react" 
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home"
import Contacts from "./Components/Contacts"
import axios from "axios"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [wrongLogging, setWrongLogging] = useState(false);
  const [loggingMessage, setLoggingMessage] = useState("");
  const [user, setUser] = useState({
    id: "",
    fName: "",
    lName: "",
  });
  function handleSignup(e, newUser){
    e.preventDefault();
    axios.post("/api/signup", newUser)
    .then(res=>{
      if(res.data.message === "Signed up")
      {
        setUser(res.data.user);
        setLogin(true);
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }
  function handleSignin(e, newUser){
    e.preventDefault();
    axios.post("/api/login", newUser)
    .then(res=>{
      if(res.data.message === "Logged in")
      {
        setUser(res.data.user);
        setLogin(true);
      }
      else if(res.data === "wrong Email")
      {
        setLoggingMessage("The Email you entered is incorrect");
        setWrongLogging(true);
      }     
      else if(res.data === "wrong Password")
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
          <Signup onSubmit={handleSignup} wrongLogging={wrongLogging} message={loggingMessage} loggedIn={isLoggedIn}/>
        </Route>
        <Route exact path="/login">
          <Login onSubmit={handleSignin} wrongLogging={wrongLogging} message={loggingMessage} loggedIn={isLoggedIn}/>
        </Route>
        <Route exact path="/contacts">
          <Contacts user={user}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
