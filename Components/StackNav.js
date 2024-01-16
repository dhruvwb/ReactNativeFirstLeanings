import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './Home';
import {Login} from './Login';

const Header = () => {
  return (
    <Button title="Right" />
    // <TextInput placeholder="Name" />
  );
};

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 35,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => (
              <Button
                title="left"
                onPress={() => console.warn('Left Btn is pressed')}
              />
            ),
            headerRight: () => <Header />,
            title: 'UserLogin',
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontSize: 35,
            },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
