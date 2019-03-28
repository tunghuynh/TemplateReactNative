import React, {Component} from 'react';
import { Button, View } from 'react-native';

export default class SideMenu extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'column', marginTop:30, justifyContent: 'space-around'}}>
                    <Button
                        title="Dardboard"
                        onPress={() => {
                            this.props.navigation.navigate('Dardboard');
                            this.props.navigation.closeDrawer();
                        }}
                    />
                    <Button
                        title="Apps"
                        onPress={() => {
                            this.props.navigation.navigate('Apps');
                            this.props.navigation.closeDrawer();
                        }}
                    />
                    <Button
                        title="Settings"
                        onPress={() => {
                            this.props.navigation.navigate('Settings');
                            this.props.navigation.closeDrawer();
                        }}
                    />
                    <Button
                        title="About"
                        onPress={() => {
                            this.props.navigation.navigate('About');
                            this.props.navigation.closeDrawer();
                        }}
                    />
                </View>
            </View>
        );
    }
}


