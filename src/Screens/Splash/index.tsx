import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      moveToHome();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  async function moveToHome() {
    let token = await AsyncStorage.getItem('TOKEN');
    console.log('TOKEN::', token);
    if (token) {
      navigation.navigate('Home');
    } else {
      navigation.push('Login');
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.icons} source={require('../../Assets/s1.png')} />
      <Text style={styles.textTop}>SpringCT</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  textTop: {
    fontSize: 35,
    fontWeight: '900',
    textAlign: 'center',
    height: 50,
    color: 'white',
  },
  icons: {
    height: 100,
    width: 100,
  },
});

export default Splash;
