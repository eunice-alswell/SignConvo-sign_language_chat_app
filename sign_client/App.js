import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from 'sign_client/screens/Chat';
import Login from 'sign_client/screens/Login';
import Signup from './screens/Signup';


const Stack = createStackNavigator();

function ChatStack() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name='Chat' component={Chat} /> */}
      {/* <Stack.Screen name= 'Login' component={Login} /> */}
      <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
  );
} 

function Navigator() {
  return(
    <NavigationContainer>
      <ChatStack/>
    </NavigationContainer>
  );
}

export default function App() {
  return <Navigator/>
}




