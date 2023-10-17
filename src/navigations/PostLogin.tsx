import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '_scenes';

export type PostLoginParamList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<PostLoginParamList>();

const PostLogin = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default PostLogin;
