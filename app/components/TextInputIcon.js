import React from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TextInput, View, StyleSheet} from "react-native";

export default class TextInputIcon extends React.Component {
    static defaultProps = {
        iconName: '',
        color: '#000',
        placeholder: 'Placeholder',
        secureTextEntry: false
    };
    render() {
        return (
            <View style={styles.searchSection} borderBottomColor={this.props.color}>
                <Icon style={styles.searchIcon} name={this.props.iconName}
                      size={20} color={this.props.color} />
                <TextInput
                    style={[styles.input, {color:this.props.color}]}
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.color}
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={(searchString) => {this.setState({searchString})}}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.4,
    },
    searchIcon: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 5,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 0,
    },
});