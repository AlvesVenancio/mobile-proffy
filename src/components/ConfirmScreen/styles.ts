import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#8257E5',
    },
    body: {
        flex: 1,
    },
    confirmImg: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        textAlign: 'center',
        paddingVertical: 20,
        width: 200,
    },
    description: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        textAlign: 'center',
        width: 250,
    },
    footer: {
        paddingVertical: 20,
    },
    button: {
        borderRadius: 8,
    }
});

export default styles;