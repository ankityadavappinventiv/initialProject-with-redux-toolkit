import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '_scenes/home/Screens/Home';
import {screenNames} from '_utils';

const Stack = createNativeStackNavigator();

const PostLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
};

export default PostLogin;
