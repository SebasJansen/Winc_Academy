import React from "react";
import { VictoryLine, VictoryChart, VictoryGroup, VictoryLegend, VictoryLabel, createContainer, VictoryTooltip} from 'victory';
import axisTheme from "./materialTheme";
const studentData = require('./studentData');
const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");


function AllStudentsLineChart() {
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
    let tempDifficultyTotal = 0;
    let tempFunTotal = 0;
    for (let i = 0; i < assignmentsAverage.length; i++) {
        const element = assignmentsAverage[i];
        tempDifficultyTotal += element.difficultyRating;
        tempFunTotal += element.funRating;
        assignmentsAverage[i].averageDifficulty = tempDifficultyTotal / (i + 1);
        assignmentsAverage[i].averageFun = tempFunTotal / (i + 1);
    }
    return (
        <VictoryChart 
            domain={{ x: [0, 56], y: [0, 5]}} 
            domainPadding={10} 
            padding={{ top: 50, bottom: 210, right: 10, left: 50}}
            theme={axisTheme} 
            width={1200}
            height={500}
            containerComponent={
                <VictoryZoomVoronoiContainer
                    allowZoom={false}
                    zoomDomain={{x: [0, 20.5]}}
                    zoomDimension="x"
                    labels={({ datum }) => datum._y}
                    labelComponent={<VictoryTooltip/>}
                />
            }>
            <VictoryLabel   text={"Student average difficulty & fun from all students"} x={400} y={30}
                            textAnchor="middle" 
                            style={[{fontSize: 25}]}/>
            <VictoryGroup offset={5} colorScale={"qualitative"}>
                <VictoryLine
                    interpolation="natural"
                    data={assignmentsAverage}
                    x="name"
                    y="averageDifficulty"
                />
                <VictoryLine
                    interpolation="natural"
                    data={assignmentsAverage}
                    x="name"
                    y="averageFun"
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

export default AllStudentsLineChart