import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Chat from 'sign_client/screens/Chat';
import Login from 'sign_client/screens/Login';

const Stack = createStackNavigator();

function ChatStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
      {/* <stack.Screen name="Login" component={Login} /> */}
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




