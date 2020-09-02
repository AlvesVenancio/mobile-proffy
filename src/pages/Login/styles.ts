import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        justifyContent: 'flex-start',
    },
    header: {
        backgroundColor: '#8257E5',
        height: 280,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImg: {
        height: 290,
    },
    loginForm: {
        paddingHorizontal: 32,
        paddingTop: 30,
        paddingBottom: 10,
    },
    titleAndCreateBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
    },
    createAccountButtonText: {
        color: '#8257E5',
        fontSize: 12,
    },
    inputsBlock: {
        marginBottom: 10,
    },    
    inputEmail: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inputPass: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    rememberAndPassBlock: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    forgetPassButtonText: {
        color: '#9C98A6',
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
    },
});

export default styles;