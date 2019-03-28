import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    Text,
    View,
} from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator,
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import Login from "./app/views/login";
import StackNavigation from "./app/components/navigation/StackNavigation";
import SideMenu from "./app/components/navigation/SideMenu";

class SplashScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
    };

    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center',
            }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
                <Text style={{color: '#fff'}}>Đang tải dữ liệu</Text>
            </View>
        );
    }
}

const AuthStack = createStackNavigator({
    SignIn: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    }
});

const MainDrawer = createDrawerNavigator(
    { RootStack: StackNavigation },
    { contentComponent: SideMenu }
);

export default createAppContainer(createSwitchNavigator(
    {
        SplashScreen: SplashScreen,
        Main: MainDrawer,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'SplashScreen',
    }
));
