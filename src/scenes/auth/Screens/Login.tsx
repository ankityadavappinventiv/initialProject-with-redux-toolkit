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
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Header, Screen} from '_components';
import {useAppDispatch, useAppSelector} from '_hooks';
import {COLORS, SPACING, vw} from '_styles';
import {STRINGS, i18n, screenNames} from '_utils';
import {authAction} from '_slices/auth.slice';

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
    Alert.alert(i18n.language);
    // dispatch(authAction.changeLanguage(currentLanguage === 'es' ? 'en' : 'es'));
    props.navigation.navigate(screenNames.RESET_PASSWORD);
    // i18n.changeLanguage(currentLanguage === 'es' ? 'en' : 'es');
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

  const _forgotPasswordFun = () => {
    props.navigation.navigate(screenNames.FORGOT_PASSWORD);
  };

  return (
    <View style={styles.mainComponent}>
      <Header
        title={i18n.t(STRINGS.Login)}
        isRightIcon={false}
        isLeftIcon={Platform.OS === 'android' ? true : false}
        leftIconDisabled={false}
        _onLeftAction={_onLeftAction}
      />
      <Screen
        style={styles.container}
        statusBarColor={COLORS.GRAY_LIGHT}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
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
          style={styles.forgotPasswordView as StyleProp<ViewStyle>}
          onPress={() => _forgotPasswordFun()}>
          <Text style={styles.forgotPasswordTextStyle}>
            {i18n.t(STRINGS.forgotPasswordTitle)}?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button as StyleProp<ViewStyle>}
          onPress={() => _loginFun()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(screenNames.REGISTER_SCREEN)}
          style={styles.dontHaveAccountView as StyleProp<ViewStyle>}>
          <Text>{i18n.t(STRINGS.dontHaveAnAccountSignUpNow)}</Text>
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
  forgotPasswordView: TouchableOpacityProps;
  forgotPasswordTextStyle: TextProps;
  dontHaveAccountView: TouchableOpacityProps;
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
  forgotPasswordTextStyle: {
    color: COLORS.GRAY_DARK,
  },
  forgotPasswordView: {
    alignItems: 'flex-end',
    marginHorizontal: vw(20),
    marginTop: vw(-20),
  },
  dontHaveAccountView: {
    marginHorizontal: vw(20),
  },
});
export default Login;
