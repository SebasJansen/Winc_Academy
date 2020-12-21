import React from "react";
import AllStudentsChart from "./AllStudentsChart";
import AllStudentsLineChart from "./AllStudentsLineChart";

function Home(props) {
    return (
        <div className="chartsContainer">
            <AllStudentsChart studentData={props.studentData}/>
            <AllStudentsLineChart studentData={props.studentData}/>
        </div>
    )
}

export default Home