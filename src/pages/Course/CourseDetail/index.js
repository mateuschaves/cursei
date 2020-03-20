import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Dimensions } from 'react-native';

import BannerImage from '~/assets/images/course-banner.png';
import Entypo from 'react-native-vector-icons/Entypo';


const { height } = Dimensions.get('screen');

export default function CourseDetail({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor={'#0052CC'} />
                <View style={styles.banner}>
                    <Text style={styles.title}>Programação de Sites e Aplicativos</Text>
                    <Image
                        source={BannerImage}
                        resizeMode={"stretch"}
                        style={styles.bannerImage}
                    />
                    <View style={styles.classInformation}>
                        <Text style={styles.module}>Modulo 5</Text>
                        <Text style={styles.class}>Aula 1</Text>
                        <Text style={styles.classTitle}>Introdução ao React Native</Text>
                    </View>

                    <TouchableOpacity style={styles.playButton}>
                        <Entypo name={'controller-play'} size={55} color={'white'} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.description}>
                    Ao longo desse módulo, você aprenderá a criar aplicações mobile completas com a biblioteca React Native
                </Text>

                <Text style={styles.testsTitle}>
                    Testes
                </Text>

                <ScrollView
                    horizontal
                >
                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.cardTitle}>Aula 1</Text>
                            <Text style={styles.cardSubtitle}>Estados</Text>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.cardDescription}>Parabéns! Você acertou 9/10 questões</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.cardTitle}>Aula 2</Text>
                            <Text style={styles.cardSubtitle}>Propriedades</Text>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.cardDescription}>Assista à aula 2 para desbloquear o teste</Text>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.cardTitle}>Aula 3</Text>
                            <Text style={styles.cardSubtitle}>Navegação</Text>
                        </View>
                        <View style={styles.body}>
                            <Text style={styles.cardDescription}>Assista à aula 3 para desbloquear o teste</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1EAFA'
    },
    banner: {
        backgroundColor: '#0052CC',
        height: height * 0.72,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    bannerImage: {
        width: '100%',
        maxWidth: 500,
        height: 300
    },
    title: {
        marginLeft: 38,
        marginTop: 38,
        fontSize: 24,
        color: '#FFFFFFFF',
        fontWeight: 'bold'
    },
    classInformation: {
        marginLeft: 38,
        justifyContent: 'space-between'
    },
    module: {
        color: '#FFFFFFFF',
        marginBottom: 15,
        fontSize: 14
    },
    class: {
        color: '#FFFFFFFF',
        fontSize: 16,
        fontWeight: '600'
    },
    classTitle: {
        color: '#FFFFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    playButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 75,
        borderRadius: 25,
        backgroundColor: '#003380',
        alignSelf: 'flex-end',
        marginRight: 40
    },
    description: {
        marginTop: 60,
        marginLeft: 20,
        color: '#3F3F3F',
        fontSize: 16,
        width: 294
    },
    testsTitle: {
        color: '#003380',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 20
    },
    card: {
        margin: 10,
        padding: 20,
        width: 162,
        height: 178,
        backgroundColor: '#FFFFFF',
        elevation: 5,
        borderRadius: 23
    },
    cardTitle: {
        color: '#3F3F3F',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardSubtitle: {
        color: '#3F3F3F',
        fontSize: 14
    },
    cardDescription: {
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
        width: 100
    },
    body: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
