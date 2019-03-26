import React from 'react';
import {
    ScrollView,
    Text,
    Button,
    ImageBackground,
} from 'react-native';
import {connect} from 'react-redux';
import {navigateTo} from '../../reducers/actions';
import translate, {getCurrentLocale, setLocale} from '../../i18n';
import { Actions } from 'react-native-router-flux';
import styles from './Dardboard.styles';

const backgroundImage = require('../../assets/images/bg_dardboard.jpg');

class Dardboard extends React.Component {
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
                    <Text style={styles.header1}>{this.props.activeRoute.name}</Text>
                    <Text style={styles.text}>
                        Book your next trip by clicking the button below.
                    </Text>
                    <Button 
                        title="Go to Apps 1" 
                        style={styles.button}
                        onPress={() => {
                            this.props.navigateTo('Apps');
                        }}
                    />
                    <Button
                        title="Logout"
                        style={styles.button}
                        onPress={() => {
                            Actions.loginScreen();
                        }}
                    />
                </ScrollView>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    activeRoute: state.routes.activeRoute,
});

const mapDispatchToProps = dispatch => ({
    navigateTo: routeName => {
        dispatch(navigateTo(routeName));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dardboard);

