import React from "react"
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Student from "./Student";

function Students() {
    let match = useRouteMatch();
    return (
        <div className="studentDiv">
            <ul className="studentNav">
                <li>
                    <Link to={`${match.url}/evelyn`}>
                    Evelyn
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/aranka`}>
                    Aranka
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/floris`}>
                    Floris
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/hector`}>
                    Hector
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/martina`}>
                    Martina
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/maurits`}>
                    Maurits
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/rahima`}>
                    Rahima
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/sandra`}>
                    Sandra
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/wietske`}>
                    Wietske
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/storm`}>
                    Storm
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:studentId`}>
                    <Student />
                </Route>
                <Route path={match.path}>
                    <div>Please select a student.</div>
                </Route>
            </Switch>
        </div>
    );
}

export default Students