import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Students from "./Students"
import Home from "./Home"
const studentData = require('./studentData.json');

function NavMenu() {
    return (
            <Router>
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/students">Students</Link>
                        </li>
                    </ul>
                    
                    <Switch>
                        <Route path="/students">
                            <Students studentData={studentData}/>
                        </Route>
                        <Route path="/">
                            <Home studentData={studentData}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
    );
}

export default NavMenu