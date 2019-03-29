import React, {Component} from 'react';
import { Button, View } from 'react-native';
import menu from '../../configs/menu';
import Common from "../../common";

export default class SideMenu extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flexDirection: 'column', marginTop:30, justifyContent: 'space-around'}}>
                    {menu.map(item => (
                    <Button
                        title={Common.i18n.translate(item.key)}
                        onPress={() => {
                            this.props.navigation.navigate(item.key);
                            this.props.navigation.closeDrawer();
                        }}
                    />
                    ))}
                </View>
            </View>
        );
    }
}


