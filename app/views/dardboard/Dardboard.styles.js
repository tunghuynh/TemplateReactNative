import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: '#ECEFF1',
    },
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 40,
        padding: 20,
    },
    header1: {
        fontSize: 28,
        // marginBottom: '30%',
    },
    text: {
        fontSize: 20,
        width: '70%',
        textAlign: 'center',
        lineHeight: 30,
        marginBottom: '10%',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default styles;