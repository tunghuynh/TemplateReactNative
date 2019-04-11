// Material Design Color System
// https://material.io/design/color/the-color-system.html

import {COLOR} from "react-native-material-ui";


export const global = {
    primaryColor: '#4d8b4a',
    secondaryLight: '#c6dcca',
    accentColor: COLOR.pink500,
};

export const uiTheme = {
    palette: {
        primaryColor: global.primaryColor,
        accentColor: global.accentColor,
    },
    //iconSet: 'MaterialCommunityIcons',
    toolbar: {
        container: {
            paddingTop: 25,
            height: 56 + 25
        },
    },
    avatar: {
        container: {
            backgroundColor: global.primaryColor
        },
        content: {
            fontSize: 18
        }
    },
    drawerHeader: {
        contentContainer: {
            height: 180
        }
    },
    drawerHeaderAccount: {
        container: {
            backgroundColor: 'rgba(255, 255, 255, 0.0)',
            paddingTop: 50,
        },
    },
    listItem: {
        primaryText: {
            //color: '#00ff00'
        },
        secondaryText: {
            //color: '#ff00ff'
        },
    }
}
