import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../Components/TextField';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../Components/Button';

const Login = ({navigation}: any) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = async () => {
    if (username.trim() == '' || password.trim() == '') {
      Alert.alert('Username/Password should not be empty!');
      return;
    }
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
      let result: any = await response.json();
      if (result?.error) {
        Alert.alert('Error', result?.error);
      } else {
        console.log(result?.token);
        AsyncStorage.setItem('TOKEN', result?.token);
        navigation.navigate('Home');
      }
    } catch (error: any) {
      console.log('Error');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>SpringCT</Text>
      <TextField
        placeHolder="Username"
        value={username}
        onChangeText={(value: any) => setUserName(value)}
      />
      <TextField
        placeHolder="Password"
        value={password}
        onChangeText={(value: any) => setPassword(value)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={() => userLogin()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  textTop: {
    fontSize: 35,
    fontWeight: '900',
    textAlign: 'center',
    height: 50,
  },
});

export default Login;
