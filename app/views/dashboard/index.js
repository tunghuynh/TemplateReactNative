import React from 'react';
import {
    AsyncStorage,
    View,
    Text,
    ImageBackground,
    Dimensions,
    StatusBar, ScrollView
} from 'react-native';
import styles from './Dashboard.styles';
import Common from "../../common";
import {ThemeContext, getTheme, Button, Toolbar} from "react-native-material-ui";
import AppStyle from "../../theme";
import ToolbarNav from "../../components/ToolbarNav";
import {VictoryBar, VictoryChart, VictoryGroup, VictoryPolarAxis, VictoryTheme} from "victory-native";

const backgroundImage = require('../../assets/images/bg_dashboard.jpg');

export default class Dashboard extends React.Component {
    renderTabBar() {
        return <StatusBar hidden/>
    }

    render() {
        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <View style={{flex: 1}}>
                <ToolbarNav showMenu={true} keyMenu="Dashboard" countNotify="11" navigation={this.props.navigation}/>
                <ScrollView contentContainerStyle={styles.view}>
                    <VictoryChart polar
                                  theme={VictoryTheme.material}
                                  startAngle={90}
                                  endAngle={450}
                                  animate={{
                                      duration: 500,
                                      onLoad: { duration: 200 }
                                  }}
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
                    <VictoryChart>
                        <VictoryGroup offset={20}
                                      colorScale={"qualitative"}
                                      animate={{
                                          duration: 500,
                                          onLoad: { duration: 500 }
                                      }}
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
                </ScrollView>
                </View>
            </ThemeContext.Provider>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
