import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  BackHandler,
  Platform,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
} from 'react-native';
import React, {useState} from 'react';
import {Header, Screen} from '_components';
import {useAppDispatch, useAppSelector} from '_hooks';
import {COLORS, SPACING} from '_styles';
import {STRINGS, i18n, screenNames} from '_utils';
import {authAction} from '_slices/auth.slice';
import {useFocusEffect} from '@react-navigation/native';
import {navigate} from '../../../navigations/navigationServices';

type Props = {
  navigation: any;
};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const {email, password} = state;
  const currentLanguage = useAppSelector(
    state => state.authReducer.languageCode,
  );
  const _loginFun = () => {
    let params: any = {
      email: email,
      password: password,
    };
    // dispatch(loginAction(params));
    dispatch(authAction.changeLanguage(currentLanguage === 'es' ? 'en' : 'es'));
    props.navigation.navigate(screenNames.RESET_PASSWORD);
    i18n
      .changeLanguage(currentLanguage === 'es' ? 'en' : 'es')
      .then(() => i18n.reloadResources(currentLanguage === 'es' ? 'en' : 'es'));
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
        title={i18n.t('login')}
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

interface StylesProp {
  mainComponent: ViewStyle;
  container: ViewStyle;
  textInput: TextInputProps;
  button: TouchableOpacityProps;
  loginText: TextProps;
}

const styles = StyleSheet.create<StylesProp>({
  mainComponent: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: SPACING.SCALE_1,
    borderColor: COLORS.GRAY_MEDIUM,
    height: SPACING.SCALE_40,
    marginHorizontal: SPACING.SCALE_20,
    borderRadius: SPACING.SCALE_7,
    marginVertical: SPACING.SCALE_20,
  },
  button: {
    borderWidth: SPACING.SCALE_1,
    borderColor: COLORS.SECONDARY,
    backgroundColor: COLORS.SECONDARY,
    height: SPACING.SCALE_50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SPACING.SCALE_20,
    borderRadius: SPACING.SCALE_8,
    marginTop: SPACING.SCALE_25,
  },
  loginText: {
    color: COLORS.WHITE,
    fontSize: SPACING.SCALE_16,
    textAlign: 'center',
  },
});
export default Login;
