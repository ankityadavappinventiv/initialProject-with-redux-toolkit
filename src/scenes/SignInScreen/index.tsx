import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  BackHandler,
  Platform,
  StyleProp,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {PreLoginParamList} from '_navigations/PreLogin';
import {loginAction} from '_action';
import {Header, Screen} from '_components';
import {useAppDispatch} from '_hooks';

const SignInScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<PreLoginParamList>();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const {email, password} = state;
  const _loginFun = () => {
    let params: any = {
      email: email,
      password: password,
    };
    dispatch(loginAction(params));
    navigation.navigate('SignUpScreen');
  };

  const _onChangeText = (key: string, value: string) => {
    setState(prev => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const _onLeftAction = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.mainComponent}>
      <Header
        title="Sign In"
        isRightIcon={false}
        isLeftIcon={Platform.OS === 'android' ? true : false}
        leftIconDisabled={false}
        _onLeftAction={_onLeftAction}
      />
      <Screen
        style={styles.container}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <TextInput
          style={styles.textInput}
          placeholder={'Please enter email'}
          value={email}
          onChangeText={e => _onChangeText('email', e)}
        />
        <TextInput
          value={password}
          style={styles.textInput}
          placeholder={'Please enter password'}
          onChangeText={e => _onChangeText('password', e)}
        />
        <TouchableOpacity
          style={styles.button as StyleProp<ViewStyle>}
          onPress={() => _loginFun()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </Screen>
    </View>
  );
};

export default SignInScreen;
