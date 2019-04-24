import {StyleSheet} from "react-native";
import AppStyle from "../../theme";

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: AppStyle.global.contentLight,
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
        //backgroundColor: AppStyle.global.secondaryLight,
        //borderColor: AppStyle.global.secondaryLight,
        //borderWidth: 0.5
    },
    itemName: {
        marginTop: 10,
        fontSize: 16,
        color: AppStyle.global.primaryDark,
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: AppStyle.global.primaryDark,
    },
    itemImage: {
        width: 80,
        height: 80,
    }
});

export default styles;