import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPassword,
  Login,
  RegisterScreen,
  ResetPassword,
} from '_scenes/auth';
import {screenNames} from '_utils';
import {Splash} from '_scenes/onboarding';

const Stack = createNativeStackNavigator();
const PreLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={screenNames.LOGIN_SCREEN} component={Login} />
      <Stack.Screen
        name={screenNames.REGISTER_SCREEN}
        component={RegisterScreen}
      />
      <Stack.Screen
        name={screenNames.RESET_PASSWORD}
        component={ResetPassword}
      />
      <Stack.Screen
        name={screenNames.FORGOT_PASSWORD}
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};

export default PreLogin;
