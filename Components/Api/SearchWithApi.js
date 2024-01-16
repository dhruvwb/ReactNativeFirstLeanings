import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default SearchWithApi = () => {
  const [data, setData] = useState([]);
  const seachUser = async text => {
    console.warn(text);
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    console.warn(url);
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if (result) {
      setData(result);
    }
  };
  return (
    <View>
      <TextInput
        style={{fontSize: 30, borderColor: 'Red', borderWidth: 2}}
        placeholder="Search"
        onChangeText={text => seachUser(text)}
      />
      {data.length
        ? data.map(item => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.age}</Text>
              <Text>{item.email}</Text>
            </View>
          ))
        : null}
    </View>
  );
};
