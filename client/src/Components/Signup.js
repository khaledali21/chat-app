import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
function Signup(props){
    const [user, setUser] = useState({
        fName: "",
        lName: "",
        email: "",
        password: ""
      });
      function handleChange(e){
        const {name, value} = e.target;
        setUser({...user, [name]: value});
      }
    return(
        <main className="form-signin">
            <form onSubmit={(e)=>{props.onSubmit(e, user); setUser({
              fName: "",
              lName: "",
              email: "",
              password: ""
            })}}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1> 
                <input 
                    type="text"
                    className="form-control"
                    name="fName"
                    value={user.fName}
                    onChange={(e)=>handleChange(e)}
                    placeholder="First name"
                    required autoFocus                    
                />
                <input 
                    type="text"
                    className="form-control"
                    name="lName"
                    value={user.lName}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Last name"
                    required                
                />
                <input 
                    type="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Email address"
                    required                       
                />
                <input 
                    type="password"
                    className="form-control"
                    name="password"
                    value={user.password}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Password"
                    required      
                />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            </form>
            {props.loggedIn && <Redirect to="/"/>};
            {props.wrongLogging && <p className="p">{props.message}</p>}
        </main>
    );
}
export default Signup