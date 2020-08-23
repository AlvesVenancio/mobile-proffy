import React from 'react';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Image, View, Text } from 'react-native';

import checked from '../../assets/images/icons/checked.png';

import styles from './styles';

interface CheckBoxStyledProps {
    check: boolean;
    text?: string;
};

const CheckBoxStyled: React.FC<CheckBoxStyledProps> = ({ check, text }) => {
    return (
        <>
            <View style={[styles.checkBox, check && { backgroundColor: '#04D361' }]}>
                {check && <Image source={checked} />}
            </View>
            {text && <Text style={styles.checkboxText}>{text}</Text>}
        </>
    );
}

export default CheckBoxStyled;