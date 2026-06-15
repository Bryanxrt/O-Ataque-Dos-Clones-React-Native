import React from 'react';
import { View } from 'react-native';
import styles from './src/styles/styles';
import { Header } from './src/components/header/Header';
import Footer from './src/components/footer/Footer';
import Card from './src/components/card/Card';

export default function App(){
  return (
    <View style={styles.pagina}>
    <Header/>
      <Card/>
      <Footer/>
      </View>
  );
}
