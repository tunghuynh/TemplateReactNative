import {StyleSheet} from "react-native";
import AppStyle from "../../theme";

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        padding: 20
    },
    h1: {
        fontSize: 22,
        alignSelf: 'center',
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10
    },
    p: {
        textAlign: 'left',
        marginBottom: 20
    },
    web: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    signature: {
        fontSize: 16,
        marginBottom: 4,
    },
    link: {
        fontSize: 16,
        color: AppStyle.global.linkColor
    }
});
export default styles;