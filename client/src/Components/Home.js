import React from "react" 
import Link from '@material-ui/core/Link';
function Home(props) {
    return(
    <div className="paper">
    {props.loggedIn?
        <h1>You're logged in</h1>: 
        <div>
              <Link href="/signup" variant="body2">
                Sign up
              </Link>
              <Link href="/login" variant="body2">
                Sign in
              </Link>
        </div>}
    </div>
    );
}

export default Home;
