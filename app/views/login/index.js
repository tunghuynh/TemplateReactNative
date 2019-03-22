import React from 'react';
import {
    View, Image,
    ScrollView,
    Text,
    TextInput,
    Button,
    ImageBackground,
} from 'react-native';
import translate, {getCurrentLocale, setLocale} from '../../i18n';
import {Actions} from 'react-native-router-flux';
import styles from './Login.styles';
import ButtonSubmit from "../../components/ButtonSubmit";
import TextInputIcon from '../../components/TextInputIcon'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {displayName} from '../../../app.json';

const backgroundImage = require('../../assets/images/bg_dardboard.jpg');

export default class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cover}>
                    <Button
                        style={styles.btnLanguage}
                        onPress={() => {
                            if (getCurrentLocale() == 'vi') {
                                this.setState({});
                                setLocale('en');
                            } else {
                                this.setState({});
                                setLocale('vi');
                            }
                        }}
                        title={getCurrentLocale() == 'vi' ? 'English' : 'Tiếng Việt'}/>
                    <Image style={styles.logo}
                        source={require('../../assets/images/react_logo.png')}
                    />
                    <Text style={styles.displayName}>{displayName.toUpperCase()}</Text>
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
                    <Button title="Login" onPress={() => {
                        Actions.mainScreen();
                    }} style={{marginTop: 20}}/>
                </ScrollView>
            </View>
        );
    }
}

