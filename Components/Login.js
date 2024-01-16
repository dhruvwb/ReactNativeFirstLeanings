import {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
const name = 'a';
const age = 34;
export const Login = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <TextInput
        onChangeText={text => setName(text)}
        style={{fontSize: 30, borderColor: 'blue', borderWidth: 2}}
        placeholder="Enter name"
      />
      <TextInput
        onChangeText={text => setAge(text)}
        style={{fontSize: 30, borderColor: 'red', borderWidth: 2}}
        placeholder="Enter age"
      />
      {/* Clean--cache */}
      <Button
        title="Press me to go Home"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />
    </View>
  );
};
