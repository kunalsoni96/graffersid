import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator()

const App = () => {
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown:false}} name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App