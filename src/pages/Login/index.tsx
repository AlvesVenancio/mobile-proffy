import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, TextInput, ScrollView, Keyboard } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import Onboarding from '../../components/Onboarding';
import FocusButton from '../../components/FocusButton';
import CheckBoxStyled from '../../components/CheckBoxStyled';

import login from '../../assets/images/login.png';

import styles from './styles';

const Login = () => {

    const scroll = useRef() as React.RefObject<ScrollView>;
    
    const [firstLaunch, setFirstLaunch] = useState<boolean>();
    const [email, setEmail] = useState<string>();
    const [pass, setPass] = useState<string>();
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    useEffect(() => {
        AsyncStorage.getItem("alreadyLaunched").then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setFirstLaunch(true);
            } else {
                setFirstLaunch(false);
            }
        })
    }, []);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow",
            () => {scroll.current && scroll.current.scrollToEnd()}
        );
    },[])

    const handleCheck = () => {
        rememberMe ? setRememberMe(false) : setRememberMe(true);
    }

    if (firstLaunch === null) {
        return (<Text>Loading...</Text>);
    } else if (firstLaunch) {
        return (<Onboarding />);
    } else {
        return (
            <ScrollView ref={scroll} style={styles.container} >
                <View style={styles.header}>
                    <Image style={styles.headerImg} source={login} resizeMode="contain" />
                </View>
                <ScrollView style={styles.loginForm}>
                    <View style={styles.titleAndCreateBlock}>
                        <Text style={styles.title}>Fazer login</Text>
                        <BorderlessButton>
                            <Text style={styles.createAccountButtonText}>Criar uma conta</Text>
                        </BorderlessButton>
                    </View>
                    <View style={styles.inputsBlock}>
                        <TextInput
                            placeholder="E-mail"
                            style={[styles.input, styles.inputEmail]}
                            textContentType='username'
                            value={email}
                            onChangeText={text => setEmail(text)}
                            keyboardType="email-address"
                        >

                        </TextInput>
                        <TextInput
                            placeholder="Senha"
                            style={[styles.input, styles.inputPass]}
                            textContentType='password'
                            value={pass}
                            onChangeText={text => setPass(text)}
                        />
                    </View>
                    <View style={styles.rememberAndPassBlock}>
                        <BorderlessButton
                            style={styles.checkboxBlock}
                            onPress={handleCheck}
                        >
                            <CheckBoxStyled check={rememberMe} text="Lembrar-me" />
                        </BorderlessButton>
                        <BorderlessButton>
                            <Text style={styles.forgetPassButtonText}>Esqueci minha senha</Text>
                        </BorderlessButton>
                    </View>
                    <FocusButton
                        text="Entrar"
                        bgColor={email && pass ? '#04D361' : '#DCDCE5'}
                        textColor={email && pass ? '#FFF' : '#9C98A6'}
                    />
                </ScrollView>
            </ScrollView>
        )
    }
}

export default Login;