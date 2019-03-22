import {StyleSheet} from "react-native";
import {primaryLight} from '../../theme/Global.styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: primaryLight,
    },
    cover: {
        backgroundColor: '#454545',
        height: 300,
        alignItems: 'center',
    },
    btnLanguage: {

    },
    logo: {
        width: 250,
        height: 250,
        tintColor: primaryLight,
    },
    displayName: {
        fontSize: 25,
        color: primaryLight,
        fontWeight: 'bold'
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
        color: '#fff',
        marginTop: 10,
        marginBottom: 20,
        textAlign: 'right',
        alignSelf: 'stretch'
    }
});

export default styles;