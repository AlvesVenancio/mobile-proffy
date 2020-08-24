import React from 'react';

import { View, Text, TextInput, NativeSyntheticEvent, TextInputFocusEventData, StyleProp, TextStyle } from 'react-native';

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
}

const TextField: React.FC<TextFieldProps> = ({ style, label, focus, value, onChangeText, onFocus, onBlur, keyboardType, secureTextEntry }) => {
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
        </View>
    );
}

export default TextField;