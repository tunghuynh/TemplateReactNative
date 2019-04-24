import React from 'react';
import {
    View,
    ScrollView,
    Text,
    Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './About.styles';
import Common from "../../common";
import {Button, ThemeContext, getTheme, Toolbar} from "react-native-material-ui";
import AppStyle from "../../theme";
import ToolbarNav from "../../components/ToolbarNav";

export default class About extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <View style={{flex: 1}}>
                    <ToolbarNav showMenu={false} keyMenu="About" navigation={this.props.navigation}/>
                    <ScrollView contentContainerStyle={styles.view}>
                        {/*<Text style={styles.h1}>{activeRoute.name}</Text>*/}
                        <Text style={[styles.text, styles.p]}>This is first Template React Native.
                        </Text>
                        <Text style={[styles.text, styles.p]}>You can use this project as a
                            starting point for yours. This is a simple prototype and can be
                            modified according to your needs.</Text>
                        <Text style={styles.signature}>Tùng Huynh</Text>
                        <View style={styles.web}>
                            <Icon name="web" size={30} color={AppStyle.global.linkColor} style={{marginRight: 10}}/>
                            <Text onPress={() =>
                                Linking.openURL('http://tunghuynh.net')}
                                  style={styles.link}
                            >
                                http://tunghuynh.net
                            </Text>
                        </View>

                        <Button
                            primary raised
                            text="Goto Apps"
                            onPress={() => {
                                this.props.navigation.navigate('Apps');
                            }}
                        />
                    </ScrollView>
                </View>
            </ThemeContext.Provider>
        );
    }
}
