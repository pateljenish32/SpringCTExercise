import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddEmployee = ({navigation}: any) => {
  const [empDetails, setEmpDetails] = useState({
    name: '',
    age: '',
    address: '',
    city: '',
  });
  const addNewEmployee = async () => {
    if (
      empDetails.name.trim() == '' ||
      empDetails.age.trim() == '' ||
      empDetails.address.trim() == '' ||
      empDetails.city.trim() == ''
    ) {
      Alert.alert('Please fill all the details');
      return;
    }
    let oldList: any = [];
    try {
      const list: any = await AsyncStorage.getItem('EMPLOYEES');
      if (list !== null) {
        oldList = JSON.parse(list);
      }
    } catch (error) {
      console.log('error fetching pld employees');
    }
    oldList.push(empDetails);
    try {
      await AsyncStorage.setItem('EMPLOYEES', JSON.stringify(oldList));
      navigation.pop(1);
    } catch (error) {
      console.log('Error');
    }
  };
  return (
    <View style={styles.container}>
      <TextField
        placeHolder="Name"
        value={empDetails.name}
        onChangeText={(text: string) =>
          setEmpDetails({...empDetails, name: text})
        }
      />
      <TextField
        placeHolder="Age"
        value={empDetails.age}
        onChangeText={(text: string) =>
          setEmpDetails({...empDetails, age: text})
        }
        keyboardType={'numeric'}
      />
      <TextField
        placeHolder="Address"
        value={empDetails.address}
        onChangeText={(text: string) =>
          setEmpDetails({...empDetails, address: text})
        }
      />
      <TextField
        placeHolder="City"
        value={empDetails.city}
        onChangeText={(text: string) =>
          setEmpDetails({...empDetails, city: text})
        }
      />
      <Button title="Add Employee" onPress={() => addNewEmployee()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default AddEmployee;
