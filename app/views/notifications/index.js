import React from 'react';
import {
    AsyncStorage,
    ScrollView,
    Text,
    View,
} from 'react-native';
import styles from './Notifications.styles';
import Common from "../../common";
import {ThemeContext, getTheme, Button, Toolbar} from "react-native-material-ui";
import AppStyle from "../../theme";
import ToolbarNav from "../../components/ToolbarNav";

export default class Notifications extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <ToolbarNav showMenu={false} keyMenu="Notifications" navigation={this.props.navigation}/>
                <View style={styles.view}>
                    <Text>Không có thông báo mới</Text>
                </View>
            </ThemeContext.Provider>
        );
    }

}
