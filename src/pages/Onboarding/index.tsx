import React from 'react';
import { View, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';

import book from '../../assets/images/book.png';
import classes from '../../assets/images/classes.png';

import OnboardingScreen from '../../components/OnboardingScreen';

import styles from './styles';

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <Swiper
                loop={false}
                paginationStyle={{
                    justifyContent: 'flex-start',
                    paddingHorizontal: 40,
                }}
                dotStyle={{
                    backgroundColor: '#c1bccc',
                    borderRadius: 1,
                    height: 4,
                    width: 4,
                }}
                activeDotStyle={{
                    backgroundColor: '#8257E5',
                    borderRadius: 1,
                    height: 4,
                    width: 4,
                }}
            >
                <OnboardingScreen
                    bgColor="#8257E5"
                    img={(
                        <Image source={book} style={[styles.headerImg, {marginTop: -30}]} resizeMode="contain" />
                    )}
                >
                    <Text>01.</Text>
                    <Text>Encontre vários professores para ensinar você</Text>
                </OnboardingScreen>
                <OnboardingScreen
                    bgColor="#04D361"
                    img={(
                        <Image source={classes} style={styles.headerImg} resizeMode="contain" />
                    )}
                >
                    <Text>01.</Text>
                    <Text>Ou dê aulas sobre o que você mais conhece</Text>
                </OnboardingScreen>

            </Swiper>
        </View>
    );
}

export default Onboarding;
