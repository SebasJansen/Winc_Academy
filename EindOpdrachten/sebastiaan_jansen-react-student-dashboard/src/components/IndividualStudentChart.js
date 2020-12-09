import React, {Component} from "react";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryZoomContainer, VictoryLegend, VictoryLabel} from 'victory';
import axisTheme from "./materialTheme";
const studentData = require('./studentData.json');

class IndividualStudentChart extends Component {
    render(){
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
                <VictoryLabel   text={"Studentdata from " + studentData.student[this.props.id].name} x={280} y={30}
                                textAnchor="middle" 
                                style={[{fontSize: 25}]}/>
                <VictoryGroup offset={5} colorScale={"qualitative"}>
                    <VictoryBar
                        data={studentData.student[this.props.id].assignments}
                        x="name"
                        y="difficultyRating"
                    />
                    <VictoryBar
                        data={studentData.student[this.props.id].assignments}
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
}

export default IndividualStudentChart