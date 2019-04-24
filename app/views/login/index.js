import React from 'react';
import {
    AsyncStorage,
    View, Image,
    ScrollView,
    Text,
} from 'react-native';
import styles from './Login.styles';
import TextInputIcon from '../../components/TextInputIcon'
import Common from '../../common';
import {Button, ThemeContext, getTheme, COLOR} from "react-native-material-ui";
import AppStyle from "../../theme";

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
        header: null
    };

    render() {
        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <View style={styles.container}>
                    <View style={styles.cover}>
                        <View style={styles.vLanguage}>
                            <Button
                                style={{
                                    text: {
                                        color: AppStyle.global.contentLight
                                    }
                                }}
                                onPress={() => {
                                    if (Common.i18n.getCurrentLocale() == 'vi') {
                                        this.setState({});
                                        Common.i18n.setLocale('en');
                                    } else {
                                        this.setState({});
                                        Common.i18n.setLocale('vi');
                                    }
                                }}
                                text={Common.i18n.getCurrentLocale() == 'vi' ? 'EN' : 'VI'}/>
                        </View>
                        <Image style={styles.logo}
                               source={require('../../assets/images/react_logo.png')}
                        />
                        <Text style={styles.displayName}>{Common.App.displayName.toUpperCase()}</Text>
                    </View>
                    <ScrollView contentContainerStyle={styles.view}>
                        <TextInputIcon iconName="account" color="#fff"
                                       placeholder={Common.i18n.translate('login.username')}
                                       style={{marginTop: 10}}/>
                        <TextInputIcon iconName="key" color="#fff"
                                       placeholder={Common.i18n.translate('login.password')}
                                       secureTextEntry={true}
                                       style={{marginTop: 20}}/>
                        <Text style={[styles.text, {marginTop: 20}]}>{Common.i18n.translate('login.forgotPass')}</Text>
                        <Button raised primary text={Common.i18n.translate('login.login')}
                                onPress={this._signInAsync}
                                style={{
                                    container: {
                                        width: '100%',
                                        backgroundColor: AppStyle.global.primaryDark
                                    }
                                }}/>
                    </ScrollView>
                </View>
            </ThemeContext.Provider>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main');
    };
}
