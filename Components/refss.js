import {useRef} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default refss = () => {
  const input = useRef();
  const updateInput = () => {
    input.current.focus();
    input.current.setNativeProps({
      fontSize: 20,
      color: 'green',
    });
  };
  return (
    <View>
      <TextInput
        placeholder="Enter name"
        ref={input}
        style={{
          margin: 10,
          padding: 4,
          fontSize: 30,
          borderColor: 'blue',
          borderWidth: 2,
        }}
      />
      <TextInput
        placeholder="Enter the Password"
        style={{
          margin: 10,
          padding: 4,
          fontSize: 30,
          borderColor: 'blue',
          borderWidth: 2,
        }}
      />
      <Button
        title="Update Input"
        style={{marginTop: 20}}
        onPress={updateInput}
      />
    </View>
  );
};
