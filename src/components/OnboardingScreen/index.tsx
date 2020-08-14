import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface OnboardingProps {
    img: ReactNode;
    bgColor: string;
}

const OnboardingScreen: React.FC<OnboardingProps> = ({ bgColor, img, children }) => {
    return (
        <>
            <View style={[styles.header, { backgroundColor: bgColor }]}>
                {img}
            </View>
            {children}
        </>
    );
}

export default OnboardingScreen;