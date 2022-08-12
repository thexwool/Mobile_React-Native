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
        backgroundColor: '#3C82AC',
        marginRight: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    allCount:{
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 25,
        marginTop: -10
    },
    createdCount:{
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#489ACC'
    },
    completedCount:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#8284FA'
    },
    count:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 7,
        color: '#D9D9D9',
        backgroundColor: '#333333', //#333333
        borderRadius: 16,
        paddingHorizontal: 10
    },
    line:{
        backgroundColor: '#333333',
        padding: 0.5,
        marginHorizontal: 25,
        marginTop: 20
    },
    listEmpty:{
        color: '#808080',
        textAlign: 'center',
        marginTop: 40
    },
    emptyIcon:{
        textAlign: 'center',
        color: '#3D3D3D',
        marginBottom: 10
    },
    emptyText1:{
        textAlign: 'center',
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16
    },
    emptyText2:{
        textAlign: 'center',
        color: '#808080',
        fontSize: 15
    },
})