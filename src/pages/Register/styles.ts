import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',        
        paddingHorizontal: 30,
        paddingVertical: 10,
        paddingTop: 20,
    },
    swiperContainer: {
        flex: 1,
        position: 'relative',
    },
    paginationStyle: {
        position: 'absolute',
        top: 0,
        height: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    dotStyle: {
        backgroundColor: '#c1bccc',
        borderRadius: 100,
        height: 4, 
        width: 4,
    },
    activeDotStyle: {
        backgroundColor: '#8257E5',
        borderRadius: 100,
        height: 4,
        width: 4,
    },
    buttonNext: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    Item: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    headerItem: {
        marginBottom: 40,
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        color: '#32264D',
    },
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#6A6180',
    },
    formTitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#32264D',
        marginBottom: 20,
    },
    inputBRadiusTop: {
        borderBottomWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inputBRadiusBottom: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    focusButton: {
        marginTop: 20,
    },
});

export default styles;