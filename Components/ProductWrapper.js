/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Header from './Components/Header';
import Products from './Products';
import Header from './Header';

const ProductWrapper = ({navigation}) => {
  const Product = [
    {
      id: 1,
      img: 'https://i.ibb.co/DG69bQ4/2.png',
      title: 'SUMMER SALE',
      desc: "DON'T COMPROMISE ON STYLE!",
      bg: 'f5fafd',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/DG69bQ4/2.png',
      title: 'AUTUMN COLLECTION',
      desc: "DON'T COMPROMISE ON STYLE!",
      bg: 'fcf1ed',
    },
    {
      id: 3,
      img: 'https://i.ibb.co/cXFnLLV/3.png',
      title: 'LOUNGEWEAR LOVE',
      desc: "DON'T COMPROMISE ON STYLE!",
      bg: 'fbf0f4',
    },
  ];
  return (
    <View>
      <Button
        title="GO to User List"
        onPress={() => navigation.navigate('User')}
      />
      <Header />
      <ScrollView style={{marginBottom: 100}}>
        {Product.map(item => (
          <Products item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductWrapper;
