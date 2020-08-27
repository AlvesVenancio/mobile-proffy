import React, { useState } from 'react';

import { View, Text, TextInput, Image, TouchableWithoutFeedback, TextInputProps } from 'react-native';

import seePassword from '../../assets/images/icons/see-password.png';
import hidePassword from '../../assets/images/icons/hide-password.png';

import styles from './styles';

interface TextFieldProps extends TextInputProps {
    label?: String;
    focus: Boolean;    
}

const TextField: React.FC<TextFieldProps> = (props) => {

    const [hidePass, setHidePass] = useState<boolean>(true);

    return (
        <View style={[styles.container, props.style]}>
            <Text
                style={[
                    styles.placeHolder,
                    props.focus || props.value ? styles.placeHolderFocus : {}
                ]}
            >
                {props.label}
            </Text>
            {props.focus && <View style={styles.dash} />}
            <TextInput
                style={[styles.input, props.focus || props.value ? styles.inputFocus : {}]}
                value={props.value}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                secureTextEntry={props.secureTextEntry && hidePass}
                autoCorrect={false}
            />
            {props.secureTextEntry &&
                <TouchableWithoutFeedback
                    onPress={() => hidePass ? setHidePass(false) : setHidePass(true)}
                >
                    <Image
                        style={styles.seeHidePass}
                        source={
                            hidePass == true
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