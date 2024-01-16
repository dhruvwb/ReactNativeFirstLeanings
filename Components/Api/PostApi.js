import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export default PostApi = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const savedApiData = async () => {
    {
      !name ? setNameError(true) : setNameError(false);
    }

    {
      !age ? setAgeError(true) : setAgeError(false);
    }

    {
      !email ? setEmailError(true) : setEmailError(false);
    }
    if (!email || !age || !name) {
      return false;
    }
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, age}),
    });
    result = await result.json();
    if (result) {
      console.warn('Data added');
    }
  };

  return (
    <View>
      <Text>Simple Post Api</Text>
      <TextInput
        placeholder="Enter name"
        style={{
          margin: 10,
          padding: 4,
          fontSize: 30,
          borderColor: 'blue',
          borderWidth: 2,
        }}
        onChangeText={text => setName(text)}
      />
      {nameError ? (
        <Text style={{marginLeft: 14, color: 'red'}}>
          Please Enter valid Name
        </Text>
      ) : null}

      <TextInput
        placeholder="Enter Age"
        style={{
          margin: 10,
          padding: 4,
          fontSize: 30,
          borderColor: 'blue',
          borderWidth: 2,
        }}
        onChangeText={text => setAge(text)}
      />
      {ageError ? (
        <Text style={{marginLeft: 14, color: 'red'}}>
          Please Enter valid age
        </Text>
      ) : null}

      <TextInput
        placeholder="Enter Email"
        style={{
          margin: 10,
          padding: 4,
          fontSize: 30,
          borderColor: 'blue',
          borderWidth: 2,
        }}
        onChangeText={text => setEmail(text)}
      />
      {emailError ? (
        <Text style={{marginLeft: 14, color: 'red'}}>
          Please Enter valid Email
        </Text>
      ) : null}
      <Button title="saved data" onPress={savedApiData} />
    </View>
  );
};
