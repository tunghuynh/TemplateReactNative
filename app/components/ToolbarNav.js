import React from 'react';
import Common from "../common";
import {Badge, IconToggle, Toolbar} from "react-native-material-ui";

export default class ToolbarNav extends React.Component {
    static defaultProps = {
        showMenu: false,
        keyMenu: '',
        countNotify: '0',
        navigation: {}
    };

    render() {
        if (this.props.showMenu) {
            return (
                <Toolbar
                    leftElement="menu"
                    onLeftElementPress={() => this.props.navigation.toggleDrawer()}
                    centerElement={Common.i18n.translate('menu.'+this.props.keyMenu)}
                    rightElement={
                        <Badge text={this.props.countNotify<=0?'':this.props.countNotify>9?'9+':this.props.countNotify} style={{container: {top: 2, right: 2, backgroundColor: "#ff0000"}}}>
                            <IconToggle
                                name="notifications"
                                color="#ffffff"
                                onPress={() => {
                                    this.props.navigation.navigate('Notifications');
                                }}
                            />
                        </Badge>
                    }
                />
            );
        } else {
            return (
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement={Common.i18n.translate('menu.'+this.props.keyMenu)}
                />
            );
        }
    }
}