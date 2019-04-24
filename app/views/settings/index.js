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
    Modal, Alert, AsyncStorage
} from 'react-native'

import {SettingsScreen, SettingsData, Chevron} from 'react-native-settings-screen'
import Common from "../../common";
import AppStyle from "../../theme";
import {ThemeContext, getTheme, Toolbar, Button} from "react-native-material-ui";
import RadioGroup from 'react-native-radio-button-group';
import styles from "./Settings.styles";
import {cutName} from "../../common/functions";
import ToolbarNav from "../../components/ToolbarNav";

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
let radiogroup_options = [
    {id: 'vi', label: 'Tiếng Việt', labelView: 'VI'},
    {id: 'en', label: 'English', labelView: 'EN'},
];

export default class Settings extends React.Component {

    state = {
        refreshing: false,
        modalVisible: false,
        setting: {
            notify: true,
            language: Common.i18n.getCurrentLocale()
        }
    };

    constructor() {
        super();
        this._loadSettingInAsync();
    };

    render() {
        let settingsData = [
            {type: 'CUSTOM_VIEW', key: 'account', render: renderAccount},
            {
                type: 'SECTION',
                header: Common.i18n.translate('settings.general').toUpperCase(),
                footer:
                    Common.i18n.translate('settings.generalFooter'),
                rows: [
                    {
                        title: Common.i18n.translate('settings.language'),
                        subtitle: Common.i18n.getCurrentLocale() == 'vi' ? 'Tiếng Việt' : 'English',
                        showDisclosureIndicator: true,
                        onPress: () => {
                            this.setState({modalVisible: true, setting: {language: Common.i18n.getCurrentLocale()}});
                        }
                    },
                ],
            },
            {
                type: 'SECTION',
                header: Common.i18n.translate('settings.appNotify').toUpperCase(),
                rows: [
                    {
                        title: Common.i18n.translate('settings.notification'),
                        renderAccessory: () =>
                            <Switch value={this.state.setting.notify}
                                    onValueChange={() => {
                                        this.setState({setting: {notify: !this.state.setting.notify}});
                                        this._saveSettingInAsync('userSetting.notify', this.state.setting.notify+"");
                                    }}/>,
                    },
                    {
                        title: Common.i18n.translate('settings.appColor'),
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
                        v1.0.0
                    </Text>
                ),
            },
        ];

        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <View style={styles.container}>
                    <ToolbarNav showMenu={false} keyMenu="Settings" navigation={this.props.navigation}/>
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
                                              this.setState({modalVisible: false});
                                          }}>
                            <View style={{
                                minWidth: 250, backgroundColor: 'white',
                                borderColor: '#ccc',
                                borderWidth: 1,
                                borderRadius: 5
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    borderBottomWidth: 1, borderColor: '#ccc', height: 50
                                }}>
                                    <Text
                                        style={{marginLeft: 20, fontSize: 18}}
                                    >Choose language</Text>
                                </View>

                                <View style={{marginLeft: 20, marginTop: 20}}>
                                    <RadioGroup
                                        activeButtonId={this.state.setting.language}
                                        options={[
                                            {id: 'vi', label: 'Tiếng Việt'},
                                            {id: 'en', label: 'English'},
                                        ]}
                                        onChange={(option) => {
                                            this.setState({setting: {language: option.id}});
                                        }}
                                    />
                                </View>
                                <View style={{
                                    flexDirection: 'row', justifyContent: 'flex-end',
                                    borderTopWidth: 1, borderColor: '#ccc', borderBottomRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    backgroundColor: '#eee'
                                }}>
                                    <Button
                                        primary
                                        text={'Cancel'}
                                        onPress={() => {
                                            this.setState({modalVisible: false, setting: {language: Common.i18n.getCurrentLocale()}});
                                        }}>
                                    </Button>
                                    <Button
                                        primary
                                        text={'OK'}
                                        onPress={() => {
                                            Common.i18n.setLocale(this.state.setting.language);
                                            this._saveSettingInAsync('userSetting.language', this.state.setting.language);
                                            this.setState({modalVisible: false});
                                        }}>
                                    </Button>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                    <SettingsScreen
                        data={settingsData}
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
    };

    _saveSettingInAsync = async (key, value) => {
        await AsyncStorage.setItem(key, value);
    };
    _loadSettingInAsync = async () => {
        const languageStore = await AsyncStorage.getItem('userSetting.language');
        if (languageStore!=undefined && languageStore!=''){
            this.setState({setting: {language: languageStore}});
            Common.i18n.setLocale(languageStore);
        }
        const notifyStore = await AsyncStorage.getItem('userSetting.notify');
        if (notifyStore!=undefined && notifyStore!=''){
            this.setState({setting: {notify: notifyStore}});
        }
    };
}

