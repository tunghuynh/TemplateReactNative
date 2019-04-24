import {Text, View, Image, TouchableOpacity, StyleSheet, Alert, ScrollView} from 'react-native';
import React from 'react';
import AppStyle from "../../theme";
import {ThemeContext, getTheme, Button, IconToggle, Toolbar, Badge} from "react-native-material-ui";
import Common from "../../common";
import {FlatGrid} from 'react-native-super-grid';
import styles from './Apps.styles';
import ToolbarNav from '../../components/ToolbarNav';

export default class Apps extends React.Component {
    render() {
        const items = [
            {key: 'Chức năng 1', image: require('../../assets/images/home.png'), disabled: false},
            {key: 'Chức năng 2', image: require('../../assets/images/calendar.png'), disabled: true},
            {key: 'Chức năng 3', image: require('../../assets/images/calendar.png'), disabled: false},
            {key: 'Chức năng 4', image: require('../../assets/images/home.png'), disabled: true},
            {key: 'Chức năng 5', image: require('../../assets/images/calendar.png'), disabled: false},
            {key: 'About', image: require('../../assets/images/home.png'), disabled: false},
            {key: 'Settings', image: require('../../assets/images/calendar.png'), disabled: false},
        ];

        return (
            <ThemeContext.Provider value={getTheme(AppStyle.uiTheme)}>
                <ToolbarNav showMenu={true} keyMenu="Apps" countNotify="4" navigation={this.props.navigation}/>
                <FlatGrid
                    itemDimension={200}
                    items={items}
                    style={styles.gridView}
                    // staticDimension={300}
                    // fixed
                    spacing={10}
                    renderItem={({item, index}) => (
                        <TouchableOpacity style={styles.itemContainer}
                                          onPress={() => {
                                              if (!item.disabled) {
                                                  this.props.navigation.navigate(item.key);
                                              }
                                          }}>
                            <Image source={item.image} style={styles.itemImage}/>
                            <Text style={[styles.itemName, {
                                color: item.disabled ? AppStyle.global.disableColor : AppStyle.global.primaryDark
                            }]}>{Common.i18n.translate(item.key)}</Text>
                        </TouchableOpacity>
                    )}
                />

            </ThemeContext.Provider>
        );
    }
}

