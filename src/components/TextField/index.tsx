import React from 'react';

import { View, Text, TextInput, Image, NativeSyntheticEvent, TextInputFocusEventData, StyleProp, TextStyle, TouchableWithoutFeedback, GestureResponderEvent } from 'react-native';

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
    onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    secureTextEntry?: boolean;
    seeHidePass?: (event: GestureResponderEvent) => void;
}

const TextField: React.FC<TextFieldProps> = ({ style, label, focus, value, onChangeText, onFocus, onBlur, keyboardType, secureTextEntry, seeHidePass }) => {
    return (
        <View style={[styles.container, style,]}>
            <Text
                style={[
                    styles.placeHolder,
                    focus && styles.placeHolderFocus
                ]}
            >
                {label}
            </Text>
            {focus && <View style={styles.dash} />}
            <TextInput
                style={[styles.input, focus && styles.inputFocus]}
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