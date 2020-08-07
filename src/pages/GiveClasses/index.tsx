import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import giveClassesBgImg from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {
    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={giveClassesBgImg} style={styles.content}>


                <View>
                    <Text style={styles.title}>
                        Quer ser {'\n'}
                    um Proffy?
                </Text>

                    <Text style={styles.description}>
                        Para começar, você precisa {'\n'}
                    se cadastrar como professor {'\n'}
                    na nossa plataforma web.
                </Text>
                </View>

                <View style={styles.containerButton}>
                    <RectButton onPress={handleNavigateBack} style={styles.button}>
                        <Text style={styles.buttonText}>Tudo bem</Text>
                    </RectButton>
                </View>
            </ImageBackground>

        </View>
    );
}

export default GiveClasses;