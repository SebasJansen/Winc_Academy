import React from "react"
import {
    useParams
} from "react-router-dom";
import IndividualStudentChart from "./IndividualStudentChart";
import IndividualStudentLineChart from "./IndividualStudentLineChart";

function Student() {
    let { studentId } = useParams();
    return (
        <div className="selectedStudentDiv">
            {(() => {
            switch (studentId) {
                case 'evelyn':
                    return (
                        <div>
                            <IndividualStudentChart id={0}/>
                            <IndividualStudentLineChart id={0}/>
                        </div>
                    )
                case 'aranka':
                    return (
                        <div>
                            <IndividualStudentChart id={1}/>
                            <IndividualStudentLineChart id={1}/>
                        </div>
                    )
                case 'floris':
                    return (
                        <div>
                            <IndividualStudentChart id={2}/>
                            <IndividualStudentLineChart id={2}/>
                        </div>
                    )
                case 'hector':
                    return (
                        <div>
                            <IndividualStudentChart id={3}/>
                            <IndividualStudentLineChart id={3}/>
                        </div>
                    )
                case 'martina':
                    return (
                        <div>
                            <IndividualStudentChart id={4}/>
                            <IndividualStudentLineChart id={4}/>
                        </div>
                    )
                case 'maurits':
                    return (
                        <div>
                            <IndividualStudentChart id={5}/>
                            <IndividualStudentLineChart id={5}/>
                        </div>
                    )
                case 'rahima':
                    return (
                        <div>
                            <IndividualStudentChart id={6}/>
                            <IndividualStudentLineChart id={6}/>
                        </div>
                    )
                case 'sandra':
                    return (
                        <div>
                            <IndividualStudentChart id={7}/>
                            <IndividualStudentLineChart id={7}/>
                        </div>
                    )
                case 'wietske':
                    return (
                        <div>
                            <IndividualStudentChart id={8}/>
                            <IndividualStudentLineChart id={8}/>
                        </div>
                    )
                case 'storm':
                    return (
                        <div>
                            <IndividualStudentChart id={9}/>
                            <IndividualStudentLineChart id={9}/>
                        </div>
                    )
                default:
                    return (
                    <div>Click on a user</div>
                    )
            }
            })()}
        </div>
    )
}

export default Student