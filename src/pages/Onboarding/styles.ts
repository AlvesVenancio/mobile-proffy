import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    headerImg: {
        height: 300,
    },
    body: {        
        height: 250,
        paddingTop: 20,
        justifyContent: 'space-evenly',
        paddingHorizontal: 40,
    },
    title: {
        fontFamily: 'Archivo_500Medium',
        fontSize: 35,
        color: '#6A6180'
    },
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 24,
        color: '#6A6180',
    },
    nextButton: {
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25,
    },
});

export default styles;