import {View, Text, Button, TextInput} from 'react-native';
import {getUserList} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

export default UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(state => state.reducer);
  useEffect(() => {
    dispatch(getUserList());
    // console.warn(userList.users.firstName);
  }, []);
  return (
    <View style={{fontSize: 20}}>
      {userList.length
        ? userList.map(items => (
            <View>
              <Text style={{fontSize: 30}}>{items.firstName}</Text>
            </View>
          ))
        : null}
    </View>
  );
};
