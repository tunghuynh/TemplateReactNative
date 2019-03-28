import React from 'react';
import {
    AsyncStorage,
    ScrollView,
    Text,
    Button,
    ImageBackground,
} from 'react-native';
import translate, {getCurrentLocale, setLocale} from '../../i18n';
import styles from './Dardboard.styles';

const backgroundImage = require('../../assets/images/bg_dardboard.jpg');

export default class Dardboard extends React.Component {
    render() {
        return (
            <ImageBackground
                source={backgroundImage}
                style={styles.container}
                imageStyle={{opacity: 0.3}}>
                <ScrollView contentContainerStyle={styles.view}>
                    <Button
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
                    <Text style={styles.welcome}>{translate('common.label.welcome', {name: 'Tùng Huynh'})}</Text>
                    <Text style={styles.instructions}>{translate('common.label.processing')}</Text>
                    {/*<Text style={styles.header1}>{this.props.activeRoute.name}</Text>*/}
                    <Text style={styles.text}>
                        Book your next trip by clicking the button below.
                    </Text>
                    <Button 
                        title="Go to Apps 1" 
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Apps');
                        }}
                    />
                    <Button
                        title="Logout"
                        style={styles.button}
                        onPress={this._signOutAsync}
                    />
                </ScrollView>
            </ImageBackground>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
