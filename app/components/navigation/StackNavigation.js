import React from 'react';
import menu from '../../configs/menu';
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Common from '../../common';

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
let routes = {};

menu.forEach((item) => {
    if (item.key != undefined && item.visible) {
        if (item.showMenuIcon) {
            routes[item.key] = {
                screen: item.screen,
                navigationOptions: ({navigation}) => ({
                    headerTitle: Common.i18n.translate(item.key),
                    headerLeft: <TouchableMenuIcon navigationProps={navigation}/>
                })
            }
        }else{
            routes[item.key] = {
                screen: item.screen,
                navigationOptions: ({navigation}) => ({
                    headerTitle: Common.i18n.translate(item.key)
                })
            }
        }
    }
});

export default createStackNavigator(
    routes, {
        initialRouteName: 'Dardboard',
    }
);