import React from "react" 
function Home(props) {
    return(
    <div className="paper">
    {props.loggedIn?
        <div>
          <h1 className="h1">Find friends who are using this app by email</h1>
          <form class="form-inline mr-auto">
            <input class="form-control mr-sm-2" type="text" placeholder="Email address" aria-label="Search"/>
            <button class="btn btn-unique btn-rounded btn-sm my-0" type="submit">Find</button>
          </form>
          <h2>Or go to your contacts list</h2>
          <a href="/contacts" className="btn btn-primary btn-lg active" role="button">
            Contacts
          </a>
        </div>
        : 
        <div>
          <a href="/signup" className="btn btn-primary btn-lg active" role="button">
            Sign up
          </a>
          <a href="/login" className="btn btn-primary btn-lg active" role="button">
            Sign in
          </a>
        </div>}
    </div>
    );
}

export default Home;
