import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface FocusButtonProps{
    text: string;
    bgColor: string;
    textColor: string;
    onPress: (pointerInside: boolean) => void;
};

const FocusButton: React.FC<FocusButtonProps> = ({ text, bgColor, textColor, onPress }) => {
    return (
        <RectButton style={[styles.loginButton, { backgroundColor: bgColor}]} onPress={onPress}>
            <Text style={[styles.loginButtonText, { color: textColor }]}>{ text }</Text>
        </RectButton>
    );
}

export default FocusButton;