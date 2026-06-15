import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../../styles/styles';

export const Footer = () => {
    return (
        <View style={styles.rodape}>
             <Image source={require('../../../assets/serpro.png')} style={styles.imagemRodape} />
             <Image source={require('../../../assets/cnh.jpg')} style={styles.imagemRodape} />
             <Image source={require('../../../assets/gov.png')} style={styles.imagemRodagov} />
        </View>
    )
};

export default Footer;