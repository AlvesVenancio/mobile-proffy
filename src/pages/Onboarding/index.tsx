import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

import book from '../../assets/images/book.png';
import classes from '../../assets/images/classes.png';
import nextButton from '../../assets/images/next.png';

import OnboardingScreen from '../../components/OnboardingScreen';

import styles from './styles';

const Onboarding = () => {

    const [slide, setSlide] = useState(1);

    const navigation = useNavigation();

    const handleNavigateToLanding = () => {        
        slide > 1
        ? navigation.navigate("Landing")
        : setSlide(2) ;
    }

    return (
        <View style={styles.container}>
            <Swiper
                paginationStyle={styles.paginationStyle}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}
                buttonWrapperStyle={styles.buttonWrapperStyle}
                scrollEnabled={false}
                showsButtons={true}
                prevButton={(<></>)}
                nextButton={(
                    <BorderlessButton
                        style={{opacity: 1}}
                        onPress={() => {
                            handleNavigateToLanding();
                        }}
                    >
                        <Image source={nextButton} resizeMode="contain" />
                    </BorderlessButton>
                )}
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

                </OnboardingScreen>

            </Swiper>
        </View>
    );
}

export default Onboarding;
