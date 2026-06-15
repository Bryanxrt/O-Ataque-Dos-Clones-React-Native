import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import styles from '../../styles/styles';

export const Header = () => {
  return (
     
      <View style={styles.cabecalho}>
        <Text style={styles.menu}>☰</Text>

        <TextInput style={styles.nome}>IGOR</TextInput>

         <Image source={require('../../../assets/sino.png')} style={styles.sino}/>

         <Image source={require('../../../assets/gatao.png')} style={styles.foto}/>
      </View>
  );
};

export default Header;