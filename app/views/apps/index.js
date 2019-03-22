import React from 'react';
import {
  ScrollView,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import styles from './Apps.styles';

const Apps = ({ activeRoute }) => (
// class Apps extends React.Component {
//     render() {
//         return (
            <ScrollView contentContainerStyle={styles.view}>
                <Text style={styles.header1}>{activeRoute.name}</Text>
                <Text style={styles.text}>Welcome! Here you can book your next trip!!</Text>
            </ScrollView>
//         );
//     }
// }
);

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
});

export default connect(
    mapStateToProps,
)(Apps);



