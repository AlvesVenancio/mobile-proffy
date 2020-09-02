import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
    },
    
    header: {
        backgroundColor: '#8257E5',
        paddingHorizontal: 24,
        paddingTop: 20,
    },

    userLogoutContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },

    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    userPhoto: {
        width: 40,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    userName: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 12,
        color: '#D4C2FF',
        marginLeft: 15,
        maxWidth: 114,
    },
    
    logoutButton: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#774DD6',
        alignItems: 'center',
        justifyContent: 'center',
    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: 20,
        marginBottom: 30,
    },

    body: {
        paddingHorizontal: 32,
        backgroundColor: '#F7F7F0',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 15,
    },
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-between',
    },

    button: {
        height: 100,
        width: '42%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 20,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    buttonImg: {
        width: '50%',
        resizeMode: 'contain',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16,
    },

    totalConnection: {
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 20,
    }
});

export default styles;