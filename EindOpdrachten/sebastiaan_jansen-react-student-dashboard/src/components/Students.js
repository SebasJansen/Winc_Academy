import React from "react"
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Student from "./Student";


function Students(props) {
    let match = useRouteMatch();
    const studentData = props.studentData;
    return (
        
        <div className="studentDiv">
            <ul className="studentNav">
                {studentData.map((student, index) => {
                    return(
                        <li key={index}>
                            <Link to={`${match.url}/${index}`}>
                                {student.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Switch>
                <Route path={`${match.path}/:studentId`}>
                    <Student studentData={studentData}/>
                </Route>
                <Route path={match.path}>
                    <div>Please select a student.</div>
                </Route>
            </Switch>
        </div>
    );
}

export default Students