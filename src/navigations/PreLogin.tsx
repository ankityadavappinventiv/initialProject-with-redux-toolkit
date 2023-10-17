import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen, SignUpScreen} from '_scenes';

export type PreLoginParamList = {
  navigate(arg0: string): unknown;
  goBack(): unknown;
  SignUpScreen: undefined;
  SignInScreen: undefined;
};

const Stack = createNativeStackNavigator<PreLoginParamList>();
const PreLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default PreLogin;
