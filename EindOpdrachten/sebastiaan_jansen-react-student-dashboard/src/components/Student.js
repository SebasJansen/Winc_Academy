import React from "react"
import {
    useParams
} from "react-router-dom";
import IndividualStudentChart from "./IndividualStudentChart";
import IndividualStudentLineChart from "./IndividualStudentLineChart";

function Student({ studentData }) {
    let { studentId } = useParams();
    return (
        <div className="selectedStudentDiv">
            <div key={studentId}>
                <IndividualStudentChart studentData={studentData} id={studentId}/>
                <IndividualStudentLineChart studentData={studentData} id={studentId}/>
            </div>
        </div>
    )
}

export default Student