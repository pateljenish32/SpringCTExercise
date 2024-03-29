import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../Components/Button';
import {useIsFocused} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const Home = ({navigation}: any) => {
  const isFocused = useIsFocused();
  const [employeeList, setEmployeeList] = useState<any>([]);

  useEffect(() => {
    if (isFocused) {
      getEmployees();
    }
  }, [isFocused]);

  const getEmployees = async () => {
    try {
      const list: any = await AsyncStorage.getItem('EMPLOYEES');
      if (list !== null) {
        setEmployeeList(JSON.parse(list));
        console.log(employeeList);
      }
    } catch (error) {
      console.log('error fetching pld employees');
    }
  };

  const renderItem = ({item, index}: any) => {
    return (
      <View style={styles.cell}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.secondView}>
          <Text>{'Age: ' + item.age}</Text>
          <Text>{item.address + ', ' + item.city}</Text>
        </View>
      </View>
    );
  };
  const addNewEmployee = () => {
    navigation.navigate('AddEmployee');
  };
  return (
    <View style={styles.container}>
      <Button
        title="Add Employee"
        containerStyle={{marginTop: 0}}
        onPress={() => addNewEmployee()}
      />
      <FlatList
        keyExtractor={({index}) => index}
        data={employeeList}
        renderItem={({item, index}) => renderItem({item, index})}
        removeClippedSubviews={true}
      />
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
  cell: {
    width: width - 30,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    marginTop: 15,
    padding: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  secondView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
});

export default Home;
