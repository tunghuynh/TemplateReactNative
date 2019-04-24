import {StyleSheet} from "react-native";
import {global} from '../../theme/Global.styles';
import AppStyle from "../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: global.primaryColor,
    },
    cover: {
       // flex: 1,
        backgroundColor: AppStyle.global.contentDark,
        alignItems: 'center',
    },
    vLanguage: {
        flex: 1,
        width: '100%',
        alignItems: 'flex-end'
    },
    btnLanguage: {

    },
    logo: {
        marginTop: 50,
        width: 250,
        height: 250,
        tintColor: AppStyle.global.contentLight,
    },
    displayName: {
        fontSize: 25,
        color: AppStyle.global.contentLight,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 30,
        padding: 20,
    },
    text: {
        color: AppStyle.global.contentLight,
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'right',
        alignSelf: 'stretch'
    }
});

export default styles;