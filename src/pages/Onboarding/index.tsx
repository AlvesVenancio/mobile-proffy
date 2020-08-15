import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import SwiperProperties from 'react-native-swiper';

import book from '../../assets/images/book.png';
import classes from '../../assets/images/classes.png';
import nextButton from '../../assets/images/next.png';

import OnboardingScreen from '../../components/OnboardingScreen';

import styles from './styles';

const Onboarding = () => {

    const swip = useRef() as React.MutableRefObject<SwiperProperties>;

    const navigation = useNavigation();

    const handleNavigateToLanding = () => {
        navigation.navigate("Landing");
    }

    return (
        <View style={styles.container}>
            <Swiper
                ref={swip}
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
                        <Image source={book} style={styles.headerImg} resizeMode="contain" />
                    )}
                >

                    <View style={styles.body}>
                        <Text style={styles.title}>01.</Text>
                        <Text style={styles.text}>Encontre vários professores para ensinar você</Text>
                    </View>
                    <BorderlessButton
                        onPress={() => {
                            swip.current.scrollBy(1)
                        }}
                        style={styles.nextButton}
                    >
                        <Image source={nextButton} resizeMode="contain" />
                    </BorderlessButton>

                </OnboardingScreen>
                <OnboardingScreen
                    bgColor="#04D361"
                    img={(
                        <Image source={classes} style={styles.headerImg} resizeMode="contain" />
                    )}
                >

                    <View style={styles.body}>
                        <Text style={styles.title}>02.</Text>
                        <Text style={styles.text}>Ou dê aulas sobre o que você mais conhece</Text>
                    </View>

                    <BorderlessButton
                        onPress={() => {
                            handleNavigateToLanding();
                        }}
                        style={styles.nextButton}
                    >
                        <Image source={nextButton} resizeMode="contain" />
                    </BorderlessButton>

                </OnboardingScreen>

            </Swiper>
        </View>
    );
}

export default Onboarding;
