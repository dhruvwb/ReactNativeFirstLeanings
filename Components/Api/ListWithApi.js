import {useEffect, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  Modal,
} from 'react-native';

export default ListWithApi = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);
  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if (result) {
      setData(result);
    }
  };

  const deleteUser = async id => {
    const url = 'http://10.0.2.2:3000/users';
    // console.warn(`${url}/${id}`);

    let result = await fetch(`${url}/${id}`, {
      method: 'Delete',
    });
    result = await result.json();
    if (result) {
      console.warn('User deleted');
      getApiData();
    }
  };

  const updatedUser = data => {
    setShowModal(true);
    setSelectedUser(data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    // <ScrollView>
    <View style={styles.container}>
      <Text>List with Api call</Text>
      <View style={styles.dataWrapper}>
        <View style={{flex: 1}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 1.5}}>
          <Text>Age</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View style={styles.dataWrapper}>
              <View style={{flex: 1, color: 'red'}}>
                <Text style={{color: 'red'}}>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>age:{item.age}</Text>
              </View>
              {/* <View style={{flex: 1, marginRight: 3}}>
                <Text>email:{item.email}</Text>
              </View> */}
              <View style={{flex: 1, marginRight: 2}}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{flex: 1}}>
                <Button title="Update" onPress={() => updatedUser(item)} />
              </View>
            </View>
          ))
        : null}
      <Modal visible={showModal} transparent={true}>
        <UserModal
          setShowModal={setShowModal}
          selectedUser={selectedUser}
          getApiData={getApiData}
        />
      </Modal>
    </View>
    // </ScrollView>
  );
};

const UserModal = props => {
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  //   console.warn(props.selectedUser);
  useEffect(() => {
    setName(props.selectedUser.name);
    setAge(props.selectedUser.age.toString());
    setEmail(props.selectedUser.email);
  }, [props.selectedUser]);

  const updatedUser = async () => {
    console.warn(name, age, email);
    const url = 'http://10.0.2.2:3000/users';
    const id = props.selectedUser.id;

    let result = await fetch(`${url}/${id}`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, age, email}),
    });
    result = await result.json();
    if (result) {
      console.warn(result);
      props.getApiData();
      props.setShowModal(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput
          onChangeText={text => setName(text)}
          placeholder="name"
          style={{fontSize: 30, borderColor: 'Red', borderWidth: 2}}
          value={name}
        />
        <TextInput
          onChangeText={text => setAge(text)}
          placeholder="age"
          style={{fontSize: 30, borderColor: 'Red', borderWidth: 2}}
          value={age}
        />
        <TextInput
          onChangeText={text => setEmail(text)}
          placeholder="email"
          style={{fontSize: 30, borderColor: 'Red', borderWidth: 2}}
          value={email}
        />
        <View style={{marginBottom: 5}}>
          <Button title="Update" onPress={updatedUser} />
        </View>
        <Button title="close" onPress={() => props.setShowModal(false)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    alignItems: 'center',
    margin: 5,
    padding: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 60,
    borderRadius: 10,
    shadowColor: '#0000',
    shadowOpacity: 0.7,
    elevation: 5,
  },
});
