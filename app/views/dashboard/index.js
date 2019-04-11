import React from 'react';
import {
    AsyncStorage,
    ScrollView,
    Text,

    ImageBackground,
} from 'react-native';
import styles from './Dashboard.styles';
import Common from "../../common";
import {ThemeContext, getTheme, Button, Toolbar} from "react-native-material-ui";
import AppStyle from "../../theme";

const backgroundImage = require('../../assets/images/bg_dashboard.jpg');

export default class Dashboard extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <ImageBackground
                    source={backgroundImage}
                    style={styles.container}
                    imageStyle={{opacity: 0.3}}>
                    <Toolbar
                        leftElement="menu"
                        onLeftElementPress={() => this.props.navigation.toggleDrawer()}
                        centerElement={Common.i18n.translate('menu.Dashboard')}
                    />
                    <ScrollView contentContainerStyle={styles.view}>
                        <Button
                            onPress={() => {
                                if (Common.i18n.getCurrentLocale() == 'vi') {
                                    this.setState({});
                                    Common.i18n.setLocale('en');
                                } else {
                                    this.setState({});
                                    Common.i18n.setLocale('vi');
                                }
                            }}
                            primary
                            text={Common.i18n.getCurrentLocale() == 'vi' ? 'English' : 'Tiếng Việt'}/>
                        <Text
                            style={styles.welcome}>{Common.i18n.translate('common.label.welcome', {name: 'Tùng Huynh'})}</Text>
                        <Text style={styles.instructions}>{Common.i18n.translate('common.label.processing')}</Text>
                        {/*<Text style={styles.header1}>{this.props.activeRoute.name}</Text>*/}
                        <Text style={styles.text}>
                            Book your next trip by clicking the button below.
                        </Text>
                        <Button
                            accent
                            text="Go to Apps"
                            onPress={() => {
                                this.props.navigation.navigate('Apps');
                            }}
                        />
                        <Button
                            accent raised
                            text="Logout"
                            onPress={this._signOutAsync}
                        />
                    </ScrollView>
                </ImageBackground>
            </ThemeContext.Provider>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
