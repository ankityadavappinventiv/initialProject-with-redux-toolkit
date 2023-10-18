import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, ResetPassword} from '_scenes/auth';
import {screenNames} from '_utils';

const Stack = createNativeStackNavigator();
const PreLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.LOGIN_SCREEN} component={Login} />
      <Stack.Screen
        name={screenNames.RESET_PASSWORD}
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

export default PreLogin;
