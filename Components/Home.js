import {View, Text, Button, TextInput} from 'react-native';

export const Home = props => {
  const {name, age} = props.route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
};
