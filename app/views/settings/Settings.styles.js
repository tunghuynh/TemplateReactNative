import {StyleSheet} from "react-native";
import AppStyle from "../../theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    accountContainer: {
        marginTop: 40,
        marginBottom: 50,
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#ccc',
        flexDirection: 'row',
    },
    accountImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: AppStyle.global.primaryColor,
        marginHorizontal: 20,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginLeft: 20,
        backgroundColor: AppStyle.global.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarContent: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    accountTitle: {
        color: 'black',
        fontSize: 24,
        marginLeft: 20
    },
    accountSubtitle: {
        color: '#999',
        fontSize: 14,
        marginLeft: 20
    },
});

export default styles;
