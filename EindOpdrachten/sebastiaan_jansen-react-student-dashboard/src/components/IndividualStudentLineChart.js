import React, {Component} from "react";
import { VictoryLine, VictoryChart, VictoryGroup, VictoryLegend, VictoryLabel, createContainer, VictoryTooltip} from 'victory';
import axisTheme from "./materialTheme";
const studentData = require('./studentData.json');
const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

class IndividualStudentLineChart extends Component {
    render(){
        const individualStudentData = studentData[this.props.id];
        const individualAssignmentData = individualStudentData.assignments;
        let tempDifficultyTotal = 0;
        let tempFunTotal = 0;
        for (let i = 0; i < individualAssignmentData.length; i++) {
            const element = individualAssignmentData[i];
            tempDifficultyTotal += element.difficultyRating;
            tempFunTotal += element.funRating;
            individualAssignmentData[i].averageDifficulty = tempDifficultyTotal / (i + 1);
            individualAssignmentData[i].averageFun = tempFunTotal / (i + 1);
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
                <VictoryLabel   text={"Student average difficulty & fun from " + studentData[this.props.id].name} x={375} y={30}
                                textAnchor="middle" 
                                style={[{fontSize: 25}]}/>
                <VictoryGroup offset={5} colorScale={"qualitative"}>
                    <VictoryLine
                        interpolation="natural"
                        data={studentData[this.props.id].assignments}
                        x="name"
                        y="averageDifficulty"
                    />
                    <VictoryLine
                        interpolation="natural"
                        data={studentData[this.props.id].assignments}
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
}

export default IndividualStudentLineChart