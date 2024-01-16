import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

export default Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
          height: 50,
        }}>
        <View
          style={{
            backgroundColor: 'yellow',
            borderRadius: 20,
            height: 40,
            width: 40,
          }}>
          <Text
            style={{
              fontSize: 25,
              alignItems: 'center',
              textAlign: 'center',
            }}>
            {' '}
            {cartItems}
          </Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    height: 40,
  },
});
