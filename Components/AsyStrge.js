import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default AsyStrge = () => {
  const [user, setUser] = useState('');
  const setData = async () => {
    await AsyncStorage.setItem('user', 'Anil Pashha');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('user');
    setUser(name);
  };

  const removeData = async () => {
    await AsyncStorage.removeItem('user');
    setUser('');
  };
  return (
    <View>
      <Text>AsyncStorage with React Native |{user}</Text>
      <Button title="Set Data" onPress={setData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
    </View>
  );
};
