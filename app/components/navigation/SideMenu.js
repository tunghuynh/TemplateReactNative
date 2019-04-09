import React, {Component} from 'react';
import {
    StyleSheet,
    StatusBar,
    View
} from 'react-native';
import menu from '../../configs/menu';
import Common from "../../common";


import { COLOR, ThemeProvider, Toolbar, Drawer, Avatar } from 'react-native-material-ui';
import Container from "./Container";

const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
        accentColor: COLOR.pink500,
    },
    toolbar: {
        container: {
            height: 50,
            paddingTop: 0,
        },
    },
    avatar: {
        container: {
            backgroundColor: '#333'
        }
    }
};

export default class SideMenu extends Component {
    render() {
        return (
        <ThemeProvider uiTheme={uiTheme}>
            <Container>
                <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.navigate('DrawerClose')}
                    centerElement="Menu"
                />
                <View style={styles.container}>
                    <Drawer>
                        <Drawer.Header>
                            <Drawer.Header.Account
                                style={{
                                    container: { backgroundColor: '#fafafa' },
                                }}
                                avatar={<Avatar text={'K'} />}
                                accounts={[
                                    { avatar: <Avatar text="H" /> },
                                    { avatar: <Avatar text="L" /> },
                                ]}
                                footer={{
                                    dense: true,
                                    centerElement: {
                                        primaryText: 'Kevin Le',
                                        secondaryText: 'kevin@codeprototype.com',
                                    },
                                    rightElement: 'arrow-drop-down',
                                }}
                            />
                        </Drawer.Header>
                        <Drawer.Section
                            key="1"
                            divider
                            items={menu
                                .filter(item=>item.visible && item.group==1)
                                .map((item, index)=>({
                                    icon: 'bookmark-border',
                                    key: index,
                                    value: Common.i18n.translate(item.key),
                                    active: false,
                                    onPress: () => {
                                        this.setState({active: item.key});
                                        this.props.navigation.navigate(item.key);
                                    }
                                }))
                            }
                        />
                        <Drawer.Section
                            key="2"
                            title="Personal"
                            items={menu
                                .filter(item=>item.visible && item.group==2)
                                .map((item, index)=>({
                                    icon: 'bookmark-border',
                                    key: index,
                                    value: Common.i18n.translate(item.key),
                                    active: false,
                                    onPress: () => {
                                        this.setState({active: item.key});
                                        this.props.navigation.navigate(item.key);
                                    }
                                }))
                            }
                        />
                    </Drawer>
                </View>
            </Container>
        </ThemeProvider>
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
