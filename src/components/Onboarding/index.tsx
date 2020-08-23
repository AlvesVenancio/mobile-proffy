import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import SwiperProperties from 'react-native-swiper';

import book from '../../assets/images/book.png';
import classes from '../../assets/images/classes.png';
import nextButton from '../../assets/images/next.png';

import styles from './styles';

const Onboarding = () => {

    const [lastSlide, setLastSlide] = useState(1);
    const swip = useRef() as React.MutableRefObject<SwiperProperties>;

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Swiper
                ref={swip}
                paginationStyle={styles.paginationStyle}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                loop={false}
                scrollEnabled={false}
            >
                <>
                    <View style={[styles.header, { backgroundColor: '#8257E5' }]}>
                        <Image source={book} style={styles.headerImg} resizeMode="contain" />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.title}>01.</Text>
                        <Text style={styles.text}>Encontre vários professores para ensinar você</Text>
                    </View>
                </>

                <>
                    <View style={[styles.header, { backgroundColor: '#04D361' }]}>
                        <Image source={classes} style={styles.headerImg} resizeMode="contain" />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.title}>02.</Text>
                        <Text style={styles.text}>Ou dê aulas sobre o que você mais conhece</Text>
                    </View>
                </>

            </Swiper>
            <BorderlessButton
                style={styles.buttonNext}
                onPress={() => {
                    if (lastSlide == 1){                        
                        swip.current.scrollBy(1);
                        setLastSlide(2);
                    } else {                        
                        navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
                    }
                }}
            >
                <Image source={nextButton} resizeMode="contain" />
            </BorderlessButton>
        </View>
    );
}

export default Onboarding;
