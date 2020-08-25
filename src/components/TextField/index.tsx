import React from 'react';

import { View, Text, TextInput, Image, StyleProp, TextStyle, TouchableWithoutFeedback } from 'react-native';

import seePassword from '../../assets/images/icons/see-password.png';
import hidePassword from '../../assets/images/icons/hide-password.png';

import styles from './styles';

interface TextFieldProps {
    style?: StyleProp<TextStyle>;
    label?: String;
    focus: Boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined;
    value: string | undefined;
    onChangeText?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    secureTextEntry?: boolean;
    seeHidePass?: () => void;
}

const TextField: React.FC<TextFieldProps> = ({ style, label, focus, value, onChangeText, onFocus, onBlur, keyboardType, secureTextEntry, seeHidePass }) => {
    
    return (
        <View style={[styles.container, style]}>
            <Text
                style={[
                    styles.placeHolder,
                    focus || value ? styles.placeHolderFocus : {}
                ]}
            >
                {label}
            </Text>
            {focus && <View style={styles.dash} />}
            <TextInput
                style={[styles.input, focus || value ? styles.inputFocus : {}]}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                onFocus={onFocus}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
            />
            {secureTextEntry != undefined &&
                <TouchableWithoutFeedback
                    onPress={seeHidePass}
                >
                    <Image
                        style={styles.seeHidePass}
                        source={
                            secureTextEntry == true
                                ? seePassword
                                : hidePassword
                        }
                        resizeMode="center"
                    />
                </TouchableWithoutFeedback>
            }
        </View>
    );
}

export default TextField;