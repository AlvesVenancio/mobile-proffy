import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import api from '../../services/api';

import LandingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import logout from '../../assets/images/icons/logout.png';

import styles from './styles';

const Landing = () => {

    const navigation = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data;
            setTotalConnections(total);
        });
    }, []);

    const handleNavigateToGiveClassesPage = () => {
        navigation.navigate("GiveClasses");
    }

    const handleNavigateToStudyPages = () => {
        navigation.navigate("Study");
    }

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <View style={styles.userLogoutContainer}>
                    <View style={styles.userContainer}>
                        <Image style={styles.userPhoto} source={{ uri: "https://avatars3.githubusercontent.com/u/49986077?s=460&u=6e3dcd293025aae55ee0c0fc830155e8dc9a7144&v=4" }} resizeMode="cover" />
                        <Text style={styles.userName}>Felipe Venancio</Text>
                    </View>
                    <RectButton
                        style={styles.logoutButton}
                        onPress={() => { }}
                    >
                        <Image source={logout} />
                    </RectButton>
                </View>
                <Image source={LandingImage} style={styles.banner} />
            </View>

            <View style={styles.body}>
                <Text style={styles.title}>
                    Seja bem-vindo, {'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer?</Text>
                </Text>

                <View style={styles.buttonsContainer}>

                    <RectButton
                        style={[styles.button, styles.buttonPrimary]}
                        onPress={handleNavigateToStudyPages}
                    >
                        <Image style={styles.buttonImg} source={studyIcon} />
                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>

                    <RectButton
                        onPress={handleNavigateToGiveClassesPage}
                        style={[styles.button, styles.buttonSecondary]}
                    >
                        <Image style={styles.buttonImg} source={giveClassesIcon} />
                        <Text style={styles.buttonText}>Dar aulas</Text>
                    </RectButton>

                </View>

                <Text style={styles.totalConnection}>
                    Total de {totalConnections} conexões já realizadas {' '}
                    <Image source={heartIcon} />
                </Text>
            </View>
        </ScrollView>
    );
}


export default Landing;