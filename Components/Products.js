import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaFrameContext} from 'react-native-safe-area-context';
import {addToCart, removeFromCart} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

export default Products = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.id === item.id;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

  return (
    <View style={styles.Prodcontainer}>
      <Text style={{fontSize: 25}}>{item.title}</Text>
      <Text style={{fontSize: 25}}>{item.desc}</Text>
      <Text style={{fontSize: 25}}>{item.bg}</Text>
      <Image
        style={{width: 100, height: 100, marginLeft: 40}}
        source={{uri: item.img}}
      />
      {isAdded ? (
        <Button
          title="Remove to Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Prodcontainer: {
    flex: 1,
    alignItems: 'center',
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    padding: 10,
    justifyContent: 'center',
    // marginBottom: 20,
  },
});
