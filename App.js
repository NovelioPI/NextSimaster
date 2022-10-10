import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/LoginScreen';
import Home from './src/screens/Home';
import StudyResult from './src/screens/StudyResult';
import Notifications from './src/screens/Notifications';
import NotificationDetails from './src/screens/NotificationDetails';
import Requests from './src/screens/Requests';
import RequestDetails from './src/screens/RequestDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StudyResult"
          component={StudyResult}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationDetails"
          component={NotificationDetails}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="Requests"
          component={Requests}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RequestDetails"
          component={RequestDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
