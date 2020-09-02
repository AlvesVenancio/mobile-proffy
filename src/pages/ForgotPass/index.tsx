import React, { useState } from 'react';
import { Image, View, Text, KeyboardAvoidingView } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import TextField from '../../components/TextField';
import FocusButton from '../../components/FocusButton';

import login from '../../assets/images/login.png';
import goBackArrow from '../../assets/images/icons/goBackArrow.png';

import styles from './styles';
import ConfirmScreen from '../../components/ConfirmScreen';

const ForgotPass = () => {

    const navigation = useNavigation();

    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const [email, setEmail] = useState<string>();
    const [resetSent, setResetSent] = useState<boolean>(false);

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    }

    if (resetSent) return (
        <ConfirmScreen
            title="Redefinição enviada!"
            description="Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos."
            btnTitle="Voltar ao login"
             navigate={handleNavigateToLogin}
        />
    );
    
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            scrollEnabled={false}
        >
            <KeyboardAvoidingView
                behavior="padding"
            >
                <View style={styles.header}>
                    <Image style={styles.headerImg} source={login} resizeMode="contain" />
                </View>
                <View style={styles.body}>
                    <RectButton
                        onPress={handleNavigateToLogin}
                    >
                        <Image source={goBackArrow} resizeMode="contain" />
                    </RectButton>
                    <Text style={styles.title}>Esqueceu sua senha?</Text>
                    <Text style={styles.description}>Não esquenta, {'\n'}vamos dar um jeito nisso.</Text>

                    <TextField
                        style={styles.input}
                        label="E-mail"
                        focus={inputFocus}
                        value={email}
                        onChangeText={text => setEmail(text)}
                        keyboardType="email-address"
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                    />

                    <FocusButton
                        text="Entrar"
                        bgColor={email ? '#04D361' : '#DCDCE5'}
                        textColor={email ? '#FFF' : '#9C98A6'}
                        onPress={() => {}}
                    />
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default ForgotPass;