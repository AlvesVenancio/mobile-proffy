import React from 'react';
import { Image, View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusButton from '../FocusButton';

import confirmBackgroundBg from '../../assets/images/confirm-screen-background.png';
import done from '../../assets/images/icons/done.png';

import styles from './styles';

interface ConfirmScreenProps {
    title: string;
    description: string;
    btnTitle: string;
    navigate: () => void;
}

const ConfirmScreen: React.FC<ConfirmScreenProps> = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <ImageBackground style={styles.confirmImg} source={confirmBackgroundBg} resizeMode="contain">
                    <Image source={done} />
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </ImageBackground>
            </View>
            <View style={styles.footer}>
                <FocusButton
                    text={props.btnTitle}
                    bgColor="#04D361"
                    textColor="#FFF"
                    style={styles.button}
                    onPress={props.navigate}
                />
            </View>
        </SafeAreaView>
    );
}

export default ConfirmScreen;

