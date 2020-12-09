import React from "react";
import AllStudentsChart from "./AllStudentsChart";
import AllStudentsLineChart from "./AllStudentsLineChart";

function Home() {
    return (
        <div className="chartsContainer">
            <AllStudentsChart/>
            <AllStudentsLineChart/>
        </div>
    )
}

export default Home