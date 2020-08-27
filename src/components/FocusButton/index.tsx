import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import styles from './styles';

interface FocusButtonProps extends RectButtonProperties {
    text: string;
    bgColor: string;
    textColor: string;
};

const FocusButton: React.FC<FocusButtonProps> = (props) => {
    return (
        <RectButton
            style={[
                styles.loginButton,
                props.style,
                { backgroundColor: props.bgColor }
            ]}
            onPress={props.onPress}
        >
            <Text style={[styles.loginButtonText, { color: props.textColor }]}>{props.text}</Text>
        </RectButton>
    );
}

export default FocusButton;