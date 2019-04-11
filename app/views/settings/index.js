/**
 * https://github.com/jsoendermann/react-native-settings-screen/tree/master/SettingsScreenExample
 */
import * as React from 'react'
import {
    Text,
    View,
    RefreshControl,
    TouchableOpacity,
    Switch,
    Modal, Alert
} from 'react-native'

import {SettingsScreen, SettingsData, Chevron} from 'react-native-settings-screen'
import Common from "../../common";
import AppStyle from "../../theme";
import {ThemeContext, getTheme, Toolbar, Button} from "react-native-material-ui";
import RadioGroup from 'react-native-radio-button-group';
import styles from "./Settings.styles";
import {cutName} from "../../common/functions";

const renderAccount = () => (
    <View style={styles.accountContainer}>
        <View style={styles.avatarContainer}>
            <Text style={styles.avatarContent}>{cutName(Common.App.account.username)}</Text>
        </View>
        {/*<Image source={require('../../assets/images/react_logo.png')} style={styles.avatarContainer}/>*/}
        <View style={{flex: 1}}>
            <Text style={styles.accountTitle}>{Common.App.account.username}</Text>
            <Text style={styles.accountSubtitle}>{Common.App.account.email}</Text>
        </View>
        {/*<Chevron/>*/}
    </View>
);
var radiogroup_options = [
    {id: 'vi', label: 'Tiếng Việt'},
    {id: 'en', label: 'English'},
];

export default class Settings extends React.Component {
    state = {
        refreshing: false,
        notify: true,
        modalVisible: false,
        languageStr: Common.i18n.getCurrentLocale() == 'vi' ? 'Tiếng Việt' : 'English',
        languageChoose: Common.i18n.getCurrentLocale()
    }

    settingsData: SettingsData = [
        {type: 'CUSTOM_VIEW', key: 'account', render: renderAccount},
        {
            type: 'SECTION',
            header: 'General'.toUpperCase(),
            footer:
                'Please restart application to apply change',
            rows: [
                {
                    title: Common.i18n.translate('settings.language'),
                    subtitle: this.state.languageStr,
                    showDisclosureIndicator: true,
                    onPress: ()=>{
                        this.state.languageChoose = Common.i18n.getCurrentLocale();
                        this.setModalVisible(true);
                    }
                },
            ],
        },
        {
            type: 'SECTION',
            header: 'Apps & Notification'.toUpperCase(),
            rows: [
                {
                    title: 'Notification',
                    renderAccessory: () => <Switch value={this.state.notify} onValueChange={() => {
                        this.setState({notify: !this.state.notify});
                    }}/>,
                },
                {
                    title: 'App color',
                    renderAccessory: () => (
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                backgroundColor: AppStyle.global.primaryColor,
                            }}
                        />
                    ),
                    showDisclosureIndicator: true,
                },
            ],
        },
        {
            type: 'CUSTOM_VIEW',
            render: () => (
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 18,
                        color: '#999',
                        marginBottom: 40,
                        marginTop: -30,
                    }}
                >
                    {Common.App.displayName} by Tùng Huynh
                </Text>
            ),
        },
    ];

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <View style={styles.container}>
                    <Toolbar
                        leftElement="arrow-back"
                        onLeftElementPress={() => this.props.navigation.goBack()}
                        centerElement={Common.i18n.translate('menu.Settings')}
                    />
                    <Text>{Common.i18n.translate('settings.language')}</Text>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                        }}>
                        <TouchableOpacity style={{
                            flex: 1, flexDirection: 'row',
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            alignItems: 'center', justifyContent: 'center'
                        }}
                                          onPress={() => {
                                              this.setModalVisible(!this.state.modalVisible);
                                          }}>
                            <View style={{minWidth: 250, backgroundColor: 'white',
                                borderColor: '#ccc',
                                borderWidth: 1,
                                borderRadius: 5}}>
                                <View style={{
                                    justifyContent: 'center',
                                    borderBottomWidth: 1, borderColor: '#ccc', height: 50}}>
                                    <Text
                                        style={{marginLeft: 20, fontSize: 18}}
                                    >Choose language</Text>
                                </View>

                                <View style={{marginLeft: 20, marginTop: 20}}>
                                    <RadioGroup
                                        activeButtonId={this.state.languageChoose}
                                        options={radiogroup_options}
                                        onChange={(option) => this.setState({languageChoose: option.id})}
                                    />
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end',
                                    borderTopWidth: 1, borderColor: '#ccc', borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    backgroundColor: '#eee'}}>
                                    <Button
                                        primary
                                        text={'Cancel'}
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                    </Button>
                                    <Button
                                        primary
                                        text={'OK'}
                                        onPress={() => {
                                            this.setState({
                                                languageStr: Common.i18n.getCurrentLocale() == 'vi' ? 'Tiếng Việt' : 'English'
                                            });
                                            Common.i18n.setLocale(this.state.languageChoose);
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                    </Button>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                    <SettingsScreen
                        data={this.settingsData}
                        scrollViewProps={{
                              refreshControl: (
                                  <RefreshControl
                                      refreshing={this.state.refreshing}
                                      onRefresh={() => {
                                          this.setState({refreshing: true})
                                          setTimeout(() => this.setState({refreshing: false}), 3000)
                                      }}
                                  />
                              ),
                        }}
                    />
                </View>
            </ThemeContext.Provider>
        )
    }
}

