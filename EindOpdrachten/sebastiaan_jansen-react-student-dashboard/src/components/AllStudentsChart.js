import React from "react";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryZoomContainer, VictoryLegend, VictoryLabel} from 'victory';
import axisTheme from "./materialTheme";
const studentData = require('./studentData');


function AllStudentsChart() {
    const newStudentData = studentData.student;
    const assignmentData = newStudentData.map(x => x.assignments)
    const flattenArray = assignmentData.flat()
    const uniqueAssignmentNames = assignmentData[0].map(x => x.name)
    let sortedAssignments = [];
    uniqueAssignmentNames.forEach(assignment => {
        let groupedAssignments = flattenArray.filter(x => x.name === assignment)
        sortedAssignments.push(groupedAssignments)
    });
    let assignmentsTotal = [];
    sortedAssignments.forEach(assignmentSet => {
        const reducer = assignmentSet.reduce((total, current) => {
            return { name: current.name, difficultyRating : total.difficultyRating + current.difficultyRating, funRating : total.funRating + current.funRating} });
        assignmentsTotal.push(reducer)
    })
    const assignmentsAverage = assignmentsTotal.map((current) => {
        return { name: current.name, difficultyRating : (current.difficultyRating / newStudentData.length), funRating : (current.funRating / newStudentData.length)} });

    return (
        <VictoryChart 
            domain={{ x: [0, 56], y: [0, 5]}} 
            domainPadding={10} 
            theme={axisTheme} 
            width={1200}
            height={300}
            containerComponent={
                <VictoryZoomContainer
                    allowZoom={false}
                    zoomDomain={{x: [0, 20.5]}}
                    zoomDimension="x"
                />
            }>
            <VictoryLabel   text={"Studentaverage from all students"} x={320} y={30}
                            textAnchor="middle" 
                            style={[{fontSize: 25}]}/>
            <VictoryGroup offset={5} colorScale={"qualitative"}>
                <VictoryBar
                    data={assignmentsAverage}
                    x="name"
                    y="difficultyRating"
                />
                <VictoryBar
                    data={assignmentsAverage}
                    x="name"
                    y="funRating"
                />
            </VictoryGroup>
            <VictoryLegend 
                data={[
                    {
                        name:'difficultyRating',
                        symbol: {
                            fill: '#334D5C',
                        },
                    },
                    {
                        name:'funRating',
                        symbol: {
                            fill: '#45B29D',
                        },
                    },
                ]}
            />
        </VictoryChart>
    )
}

export default AllStudentsChart