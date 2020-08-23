import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
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
    input: {
        backgroundColor: '#FAFAFC',
        borderWidth: 1,
        borderColor: '#E6E6F0',
        color: '#6A6180',
        fontSize: 12,
        padding: 14,

    },
    inputEmail: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    inputPass: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    rememberAndPassBlock: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkboxBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBox: {
        width: 20,
        height: 20,
        borderRadius: 7,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxText: {
        color: '#9C98A6',
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        marginLeft: 8,
    },
    forgetPassButtonText: {
        color: '#9C98A6',
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
    },
});

export default styles;