import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    header: {
        height: 280,
        alignItems: 'center',
        justifyContent: 'flex-end',
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
    paginationStyle: {
        justifyContent: 'flex-start',
        paddingHorizontal: 40,
    },
    dotStyle: {
        backgroundColor: '#c1bccc',
        borderRadius: 1,
        height: 4,
        width: 4,
    },
    activeDotStyle: {
        backgroundColor: '#8257E5',
        borderRadius: 1,
        height: 4,
        width: 4,
    },
    buttonNext: {
        bottom: 10,
        right: 40,
        position: 'absolute',
    },
});

export default styles;