import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    View, ImageBackground, AsyncStorage
} from 'react-native';
import menu from '../../configs/menu';
import Common from "../../common";


import {ThemeContext, getTheme, Toolbar, Drawer, Avatar} from 'react-native-material-ui';
import Container from "./Container";
import {cutName} from "../../common/functions";

export default class SideMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            active: 'dashboard',
            username: Common.App.account.username,
            email: Common.App.account.email
        };
        //props.navigation.toggleDrawer();
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <ThemeContext.Provider value={getTheme(Common.uiTheme)}>
                <Container>
                    <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent/>
                    <Toolbar
                        //leftElement="close"
                        //onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                        //centerElement={Common.App.displayName}
                        style={{
                            container: {
                                height: 0,
                                paddingTop: 0
                            }
                        }}
                    />
                    <View style={styles.container}>
                        <Drawer>
                            <Drawer.Header>
                                <ImageBackground
                                    source={require('../../assets/images/bg_drawer.jpg')}
                                    style={{flex: 1, resizeMode: 'cover'}}>
                                    <Drawer.Header.Account
                                        avatar={<Avatar text={cutName(this.state.username)}/>}
                                        //accounts={[
                                        //    { avatar: <Avatar text="N" /> },
                                        //    { avatar: <Avatar text="C" /> },
                                        //]}
                                        footer={{
                                            dense: true,
                                            centerElement: {
                                                primaryText: this.state.username,
                                                secondaryText: this.state.email,
                                            },
                                            //rightElement: 'arrow-drop-down',
                                        }}
                                    />
                                </ImageBackground>
                            </Drawer.Header>
                            <Drawer.Section
                                key="1"
                                divider
                                items={menu
                                    .filter(item => item.visible && item.group == 1)
                                    .map((item, index) => ({
                                        icon: item.icon!=''?item.icon:'lens',
                                        key: index,
                                        value: Common.i18n.translate('menu.' + item.key),
                                        active: this.state.active == item.key,
                                        onPress: () => {
                                            this.setState({active: item.key});
                                            this.props.navigation.navigate(item.key);
                                        }
                                    }))
                                }
                                style={{
                                    icon: {fontSize: 50, color: 'red'}
                                }}
                            />
                            <Drawer.Section
                                key="2"
                                //title="Personal"
                                divider
                                items={menu
                                    .filter(item => item.visible && item.group == 2)
                                    .map((item, index) => ({
                                        icon: item.icon!=''?item.icon:'lens',
                                        key: index,
                                        value: Common.i18n.translate('menu.' + item.key),
                                        active: this.state.active == item.key,
                                        onPress: () => {
                                            this.setState({active: item.key});
                                            this.props.navigation.navigate(item.key);
                                        }
                                    }))
                                }
                            />
                            <Drawer.Section
                                key="3"
                                //title="Personal"
                                items={[
                                    {
                                        icon: 'power-settings-new',
                                        value: Common.i18n.translate('menu.Logout'),
                                        active: false,
                                        onPress: () => {
                                            this._signOutAsync();
                                        }
                                    }
                                ]
                                }
                            />
                        </Drawer>
                    </View>
                </Container>
            </ThemeContext.Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: '#455A64',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
