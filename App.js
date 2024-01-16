/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// import type {PropsWithChildren} from 'react';
import {
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
import StackNav from './Components/StackNav';
import TabNav from './Components/TabNav';
import Api1 from './Components/Api1';
import ListWithApiCall from './Components/ListWithApiCall';
import FlatListWithApi from './Components/FlatListWithApi';
import PostApi from './Components/Api/PostApi';
import ListWithApi from './Components/Api/ListWithApi';
import SearchWithApi from './Components/Api/SearchWithApi';
import Refss from './Components/refss';
import AsyStrge from './Components/AsyStrge';
import Header from './Components/Header';
import Products from './Components/Products';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductWrapper from './Components/ProductWrapper';
import UserList from './Components/UserList';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductWrapper} />
        <Stack.Screen name="User" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>

    // </View>
  );
};

export default App;
