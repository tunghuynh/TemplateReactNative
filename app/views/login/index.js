import React from 'react';
import {
    AsyncStorage,
    View, Image,
    ScrollView,
    Text,
    Button,
} from 'react-native';
import styles from './Login.styles';
import TextInputIcon from '../../components/TextInputIcon'
import Common from '../../common';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
        header: null
    };

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.cover}>
                <Button
                    style={styles.btnLanguage}
                    onPress={() => {
                        if (Common.i18n.getCurrentLocale() == 'vi') {
                            this.setState({});
                            Common.i18n.setLocale('en');
                        } else {
                            this.setState({});
                            Common.i18n.setLocale('vi');
                        }
                    }}
                    title={Common.i18n.getCurrentLocale() == 'vi' ? 'English' : 'Tiếng Việt'}/>
                <Image style={styles.logo}
                       source={require('../../assets/images/react_logo.png')}
                />
                <Text style={styles.displayName}>{Common.App.displayName.toUpperCase()}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.view}>
                <TextInputIcon iconName="account" color="#fff"
                               placeholder="Username"
                               style={{marginTop: 10}}/>
                <TextInputIcon iconName="key" color="#fff"
                               placeholder="Password"
                               secureTextEntry={true}
                               style={{marginTop: 20}}/>
                <Text style={[styles.text, {marginTop: 20}]}>Forgot Password?</Text>
                <Button title="Login" onPress={this._signInAsync} style={{marginTop: 20}}/>
            </ScrollView>
        </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main');
    };
}