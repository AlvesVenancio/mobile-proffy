import React from 'react';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Image, View, Text, GestureResponderEvent } from 'react-native';

import checked from '../../assets/images/icons/checked.png';

import styles from './styles';

interface CheckBoxStyledProps {
    check: boolean;
    text?: string;
    onPress?: (event: GestureResponderEvent) => void;
};

const CheckBoxStyled: React.FC<CheckBoxStyledProps> = ({ check, text, onPress }) => {
    return (
        <TouchableWithoutFeedback
            style={styles.checkboxBlock}
            onPress={onPress}
        >
                <View style={[styles.checkBox, check && { backgroundColor: '#04D361' }]}>
                    {check && <Image source={checked} style={{width: 7}} resizeMode="contain" />}
                </View>
                {text && <Text style={styles.checkboxText}>{text}</Text>}
        </TouchableWithoutFeedback>
    );
}

export default CheckBoxStyled;