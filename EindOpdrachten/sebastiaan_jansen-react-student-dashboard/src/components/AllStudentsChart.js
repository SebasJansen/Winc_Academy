import React from "react";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryZoomContainer, VictoryLegend, VictoryLabel} from 'victory';
import axisTheme from "./materialTheme";


function AllStudentsChart(props) {
    const newStudentData = props.studentData;
    const assignmentData = newStudentData.map(x => x.assignments)
    const flattenArray = assignmentData.flat()
    const uniqueAssignmentNames = assignmentData[0].map(x => x.name)
    const sortedAssignments = uniqueAssignmentNames.map(assignment => {
        return(flattenArray.filter(x => x.name === assignment))
    });
    const assignmentsTotal = sortedAssignments.map(assignmentSet => {
        return(assignmentSet.reduce((total, current) => {
            return {    
                name: current.name, 
                difficultyRating : total.difficultyRating + current.difficultyRating, 
                funRating : total.funRating + current.funRating
            }
        }))
    })
    const assignmentsAverage = assignmentsTotal.map((current) => {
        return { name: current.name, difficultyRating : (current.difficultyRating / newStudentData.length), funRating : (current.funRating / newStudentData.length)} });

    return (
        <VictoryChart 
            domain={{ x: [0, 56], y: [0, 5]}} 
            domainPadding={10}
            padding={{ top: 50, bottom: 210, right: 10, left: 50}}
            theme={axisTheme} 
            width={1200}
            height={500}
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