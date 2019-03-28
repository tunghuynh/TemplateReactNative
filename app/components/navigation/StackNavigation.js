import React from 'react';
import DardboardScreen from "../../views/dardboard";
import AppsScreen from "../../views/apps";
import SettingsScreen from "../../views/settings";
import AboutScreen from "../../views/about";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class TouchableMenuIcon extends React.Component {

    toggleDrawer=()=>{
        this.props.navigationProps.toggleDrawer();
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
                    <Icon name="bars" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        );
    }
}

export default createStackNavigator(
    {
        Dardboard: {
            screen: DardboardScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Dardboard',
                headerLeft: <TouchableMenuIcon navigationProps={ navigation }/>
            })
        },
        Apps: {
            screen: AppsScreen,
            navigationOptions: () => ({
                headerTitle: 'Apps',
            })
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: () => ({
                headerTitle: 'Settings',
            })
        },
        About: {
            screen: AboutScreen,
            navigationOptions: () => ({
                headerTitle: 'About',
            })
        },
    },
    {
        initialRouteName: 'Dardboard',

    }
);