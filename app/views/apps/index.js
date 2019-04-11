import {Text, View, TouchableOpacity, Modal, Alert} from 'react-native';
import React from 'react';
import RadioGroup from 'react-native-radio-button-group';
import AppStyle from "../../theme";
import {ThemeContext, getTheme, Button, Toolbar} from "react-native-material-ui";
import Common from "../../common";

var radiogroup_options = [
    {id: 'vi', label: 'Tiếng Việt'},
    {id: 'en', label: 'English'},
];

export default class Apps extends React.Component {
    state = {
        modalVisible: true,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {

        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <Toolbar
                    leftElement="menu"
                    onLeftElementPress={() => this.props.navigation.toggleDrawer()}
                    centerElement={Common.i18n.translate('menu.Apps')}
                />

                <View style={{marginTop: 22}}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <TouchableOpacity style={{
                            flex: 1, flexDirection: 'row',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            alignItems: 'center', justifyContent: 'center'
                        }}
                                          onPress={() => {
                                              this.setModalVisible(!this.state.modalVisible);
                                          }}>
                            <View style={{minWidth: 250, backgroundColor: 'white'}}>
                                <View style={{
                                    justifyContent: 'center',
                                    borderBottomWidth: 1, borderColor: '#ccc', height: 50}}>
                                    <Text
                                        style={{marginLeft: 20, fontSize: 18}}
                                    >Choose language</Text>
                                </View>

                                <View style={{marginLeft: 20, marginTop: 20}}>
                                    <RadioGroup
                                        options={radiogroup_options}
                                        onChange={(option) => this.setState({selectedOption: option})}
                                    />
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end',
                                    borderTopWidth: 1, borderColor: '#ccc',
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
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                    </Button>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal>

                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text>Show Modal</Text>
                    </TouchableOpacity>
                </View>

            </ThemeContext.Provider>
        );
    }
}

