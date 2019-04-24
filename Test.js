/*import React from 'react';
import {FlatList, ActivityIndicator, Text, View, Button} from 'react-native';
import RestAPIHelper from './app/common/RestAPIHelper';

export default class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    onPressLoad() {
        RestAPIHelper.sendRestAPI('http://10.15.155.78/restapi.php?abc=123',
            (result) => {
                alert(JSON.stringify(result));
            },
            (error) => {
                alert(error);
            }, {}
        );
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={{flex: 1, paddingTop: 20}}>
                <Button title="Fetch Data" onPress={this.onPressLoad} />
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                    keyExtractor={({id}, index) => id}
                />
            </View>
        );
    }
}
*/
import React, {Component} from 'react';
import {View,ScrollView, Text, StyleSheet} from 'react-native';
// import svg from 'react-native-svg';
import {VictoryBoxPlot, VictoryAxis, VictoryBar, VictoryCandlestick, VictoryArea, VictoryPolarAxis, VictoryErrorBar, VictoryGroup, VictoryLine, VictoryPie, VictoryScatter, VictoryStack, VictoryVoronoi, VictoryChart, VictoryTheme} from "victory-native";

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

export default class Test extends Component {

    render() {

        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text>VictoryBoxPlot</Text>
                <VictoryChart domainPadding={20}>
                    <VictoryBoxPlot
                        boxWidth={20}
                        data={[
                            {x: 1, y: [1, 2, 3, 5]},
                            {x: 2, y: [3, 2, 8, 10]},
                            {x: 3, y: [2, 8, 6, 5]},
                            {x: 4, y: [1, 3, 2, 9]}
                        ]}
                    />
                </VictoryChart>
                <Text>VictoryArea</Text>
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryArea
                        style={{data: {fill: "#c43a31"}}}
                        data={[
                            { x: 1, y: 2, y0: 0 },
                            { x: 2, y: 3, y0: 1 },
                            { x: 3, y: 5, y0: 1 },
                            { x: 4, y: 4, y0: 2 },
                            { x: 5, y: 6, y0: 2 }
                        ]}
                    />
                </VictoryChart>
                <Text>VictoryAxis</Text>
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis crossAxis
                                 width={400}
                                 height={400}
                                 domain={[-10, 10]}
                                 theme={VictoryTheme.material}
                                 offsetY={200}
                                 standalone={false}
                    />
                    <VictoryAxis dependentAxis crossAxis
                                 width={400}
                                 height={400}
                                 domain={[-10, 10]}
                                 theme={VictoryTheme.material}
                                 offsetX={200}
                                 standalone={false}
                    />
                </VictoryChart>
                <Text>VictoryBar</Text>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={10}
                >
                    <VictoryBar
                        style={{data: {fill: "#c43a31"}}}
                        data={[
                            { x: 1, y: 2, y0: 1 },
                            { x: 2, y: 3, y0: 2 },
                            { x: 3, y: 5, y0: 2 },
                            { x: 4, y: 4, y0: 3 },
                            { x: 5, y: 6, y0: 3 }
                        ]}
                    />
                </VictoryChart>
                <Text>VictoryCandlestick</Text>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={{x: 25}}
                    scale={{x: "time"}}
                >
                    <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
                    <VictoryAxis dependentAxis/>
                    <VictoryCandlestick
                        candleColors={{positive: "#5f5c5b", negative: "#c43a31"}}
                        data={[
                            {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
                            {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
                            {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
                            {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
                            {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5}
                        ]}
                    />
                </VictoryChart>
                <Text>VictoryPolarAxis</Text>
                <VictoryChart polar
                              theme={VictoryTheme.material}
                              startAngle={90}
                              endAngle={450}
                >
                    <VictoryPolarAxis
                        tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}
                        labelPlacement="vertical"
                    />
                    <VictoryBar style={{ data: { fill: "tomato", width: 30 } }}
                                data={[
                                    { x: 0, y: 2 },
                                    { x: 60, y: 3 },
                                    { x: 120, y: 5 },
                                    { x: 180, y: 4 },
                                    { x: 240, y: 4 },
                                    { x: 300, y: 4 }
                                ]}
                    />
                </VictoryChart>
                <Text>VictoryErrorBar</Text>
                <VictoryChart
                    domainPadding={15}
                    theme={VictoryTheme.material}
                >
                    <VictoryErrorBar
                        data={[
                            {x: 15, y: 35000, error: 0.2},
                            {x: 20, y: 42000, error: 0.05},
                            {x: 25, y: 30000, error: 0.1},
                            {x: 30, y: 35000, error: 0.2},
                            {x: 35, y: 22000, error: 0.15}
                        ]}
                        errorX={(datum) => datum.error * datum.x}
                        errorY={(datum) => datum.error * datum.y}
                    />
                </VictoryChart>
                <Text>VictoryGroup</Text>
                <VictoryChart>
                    <VictoryGroup offset={20}
                                  colorScale={"qualitative"}
                    >
                        <VictoryBar
                            data={[{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 5}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}]}
                        />
                        <VictoryBar
                            data={[{x: 1, y: 3}, {x: 2, y: 4}, {x: 3, y: 9}]}
                        />
                    </VictoryGroup>
                </VictoryChart>
                <Text>VictoryLine</Text>
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryLine
                        style={{
                            data: {stroke: "#c43a31"},
                            parent: {border: "1px solid #ccc"}
                        }}
                        data={[
                            {x: 1, y: 2},
                            {x: 2, y: 3},
                            {x: 3, y: 5},
                            {x: 4, y: 4},
                            {x: 5, y: 7}
                        ]}
                    />
                </VictoryChart>
                <Text>VictoryPie</Text>
                <VictoryPie
                    data={[
                        {x: "Cats", y: 35},
                        {x: "Dogs", y: 40},
                        {x: "Birds", y: 55}
                    ]}
                />
                <Text>VictoryPolarAxis</Text>
                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryPolarAxis
                        width={400}
                        height={400}
                        theme={VictoryTheme.material}
                        standalone={false}
                    />
                    <VictoryPolarAxis dependentAxis
                                      width={400}
                                      height={400}
                                      domain={[0, 10]}
                                      theme={VictoryTheme.material}
                                      standalone={false}
                    />
                </VictoryChart>
                <Text>VictoryScatter</Text>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domain={{x: [0, 5], y: [0, 7]}}
                >
                    <VictoryScatter
                        style={{data: {fill: "#c43a31"}}}
                        size={7}
                        data={[
                            {x: 1, y: 2},
                            {x: 2, y: 3},
                            {x: 3, y: 5},
                            {x: 4, y: 4},
                            {x: 5, y: 7}
                        ]}
                    />
                </VictoryChart>
                <Text>VictoryStack</Text>
                <VictoryStack>
                    <VictoryArea
                        data={[{x: "a", y: 2}, {x: "b", y: 3}, {x: "c", y: 5}]}
                    />
                    <VictoryArea
                        data={[{x: "a", y: 1}, {x: "b", y: 4}, {x: "c", y: 5}]}
                    />
                    <VictoryArea
                        data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
                    />
                </VictoryStack>
                <Text>VictoryVoronoi</Text>
                <VictoryChart
                    theme={VictoryTheme.material}
                    domain={{x: [0, 5], y: [0, 7]}}
                >
                    <VictoryVoronoi
                        style={{data: {stroke: "#c43a31", strokeWidth: 2}}}
                        data={[
                            {x: 1, y: 2},
                            {x: 2, y: 3},
                            {x: 3, y: 5},
                            {x: 4, y: 4},
                            {x: 5, y: 7}
                        ]}
                    />
                </VictoryChart>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f5fcff",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        padding: 20,
    }
});