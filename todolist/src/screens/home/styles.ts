import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        padding: 24
    },
    topContainer:{
        height: 160,
        backgroundColor: '#0D0D0D',

    },
    bottomContainer:{
        height: '100%',
        backgroundColor: '#191919'
    },
    title: {
        fontFamily: 'Roboto',
        color: '#4EA8DE',
        fontSize: 34,
        marginTop: 50,
        textAlign: 'center',
        marginRight: 30,
        fontWeight: 'bold'
    },
    icon: {
        backgroundColor: 'yellow',
        width: 200
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -35,
        marginBottom: 42
    },
    input: {
        flex: 1,
        height: 62,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,
        marginRight: 6,
        marginLeft: 25
    },
    button: {
        width: 62,
        height: 62,
        borderRadius: 8,
        backgroundColor: '#1E6F9F',
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center'
    }
})