import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        marginHorizontal: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#333333'
    },
    taskContent: {
        flex: 1,
        fontSize: 16,
        color: '#FFF'
    },
    button: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center'
    }
})