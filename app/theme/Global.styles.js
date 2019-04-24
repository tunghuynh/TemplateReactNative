// Material Design Color System
// https://material.io/design/color/the-color-system.html

export const global = {
    primaryDark: '#0e4040',
    primaryColor: '#226666',
    secondaryLight: '#669999',
    accentColor: '#9a334f',
    contentLight: '#dfe6e4',
    contentDark: '#313131',
    linkColor: '#2687db',
    disableColor: '#aaa',
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
