import React, { useRef, useState, useEffect } from 'react';
import { Image, Text, View, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import goBackArrow from '../../assets/images/icons/goBackArrow.png';

import styles from './styles';
import TextField from '../../components/TextField';
import FocusButton from '../../components/FocusButton';
import ConfirmScreen from '../../components/ConfirmScreen';

const Register = () => {

    const navigation = useNavigation();

    const swipRef = useRef() as React.MutableRefObject<Swiper>;

    const [name, setName] = useState<string>();
    const [nameFocus, setNameFocus] = useState<boolean>(false);
    const [lastName, setLastName] = useState<string>();
    const [lastNameFocus, setLastNameFocus] = useState<boolean>(false);
    const [email, setEmail] = useState<string>();
    const [emailFocus, setEmailFocus] = useState<boolean>(false);
    const [pass, setPass] = useState<string>();
    const [passFocus, setPassFocus] = useState<boolean>(false);
    const [headerVisible, setHeaderVisible] = useState<boolean>(true);
    const [register, setRegister] = useState<boolean>(false);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow",
            () => { setHeaderVisible(false) }
        );

        Keyboard.addListener("keyboardDidHide",
            () => { setHeaderVisible(true) }
        );
    }, []);

    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    }

    if (register) return (
        <ConfirmScreen
            title="Cadastro concluído!"
            description="Agora você faz parte da plataforma da Proffy"
            btnTitle="Fazer login"
            navigate={handleNavigateToLogin}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.swiperContainer}>
                <Swiper
                    keyboardShouldPersistTaps="always"
                    ref={swipRef}
                    loop={false}
                    scrollEnabled={false}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    <View style={styles.Item}>
                        <KeyboardAvoidingView
                            behavior="padding"
                        >
                            <View style={[styles.headerItem, !headerVisible && { opacity: 0 }]}>
                                <Text style={styles.title}>
                                    Crie sua {'\n'}conta gratuíta
                                </Text>
                                <Text style={styles.description}>
                                    Basta preencher esses dados {'\n'}e você estará conosco.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.formTitle}>
                                    01. Quem é você?
                                </Text>
                                <TextField
                                    style={styles.inputBRadiusTop}
                                    label="Nome"
                                    focus={nameFocus}
                                    value={name}
                                    onChangeText={text => setName(text)}
                                    onFocus={() => setNameFocus(true)}
                                    onBlur={() => setNameFocus(false)}
                                />
                                <TextField
                                    style={styles.inputBRadiusBottom}
                                    label="Sobrenome"
                                    focus={lastNameFocus}
                                    value={lastName}
                                    onChangeText={text => setLastName(text)}
                                    onFocus={() => setLastNameFocus(true)}
                                    onBlur={() => setLastNameFocus(false)}
                                />
                                <FocusButton
                                    style={styles.focusButton}
                                    text="Próximo"
                                    bgColor={name && lastName ? '#8257E5' : '#DCDCE5'}
                                    textColor={name && lastName ? '#FFF' : '#9C98A6'}
                                    enabled={name && lastName ? true : false}
                                    onPress={() => {
                                        swipRef.current.scrollBy(1);
                                    }}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </View>

                    <View style={styles.Item}>
                        <KeyboardAvoidingView
                            behavior="padding"
                        >
                            <View style={[styles.headerItem, !headerVisible && { opacity: 0 }]}>
                                <Text style={styles.title}>
                                    Crie sua {'\n'}conta gratuíta
                                </Text>
                                <Text style={styles.description}>
                                    Basta preencher esses dados {'\n'}e você estará conosco.
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.formTitle}>
                                    02. Email e Senha
                                </Text>
                                <TextField
                                    style={styles.inputBRadiusTop}
                                    label="E-mail"
                                    focus={emailFocus}
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                />
                                <TextField
                                    style={styles.inputBRadiusBottom}
                                    label="Senha"
                                    secureTextEntry={true}
                                    focus={passFocus}
                                    value={pass}
                                    onChangeText={text => setPass(text)}
                                    onFocus={() => setPassFocus(true)}
                                    onBlur={() => setPassFocus(false)}
                                />
                                <FocusButton
                                    style={styles.focusButton}
                                    text="Concluir cadastro"
                                    bgColor={email && pass ? '#04D361' : '#DCDCE5'}
                                    textColor={email && pass ? '#FFF' : '#9C98A6'}
                                    enabled={email && pass ? true : false}
                                    onPress={() => { }}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </Swiper>
                <BorderlessButton
                    style={styles.buttonNext}
                    onPress={handleNavigateToLogin}
                >
                    <Image source={goBackArrow} resizeMode="contain" />
                </BorderlessButton>
            </View>
        </SafeAreaView>
    );
}

export default Register;