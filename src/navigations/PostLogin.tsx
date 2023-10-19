import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '_utils';
import {Home} from '_scenes/home';

const Stack = createNativeStackNavigator();

const PostLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
};

export default PostLogin;
