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
  Switch,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header, Screen} from '_components';
import {useAppDispatch, useAppSelector, useColors} from '_hooks';
import {SPACING, vw} from '_styles';
import {STRINGS, i18n, screenNames} from '_utils';
import {utilsAction} from '_slices/utils.slice';
import {useFocusEffect} from '@react-navigation/native';

type Props = {
  navigation: any;
};

const Login = (props: Props) => {
  const {theme} = useAppSelector(state => state.utilsReducer);
  const Color = useColors();
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
    themeSwitch: false,
  });

  useFocusEffect(
    React.useCallback(() => {
      if (theme) {
        setState(prev => {
          return {
            ...prev,
            themeSwitch: theme === 'dark' ? true : false,
          };
        });
      }
    }, [theme]),
  );
  const {email, password, themeSwitch} = state;
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

  const _onValueChange = (e: boolean) => {
    setState(prev => {
      return {
        ...prev,
        themeSwitch: e,
      };
    });
    dispatch(utilsAction.changeTheme(e ? 'dark' : 'light'));
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
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <Text style={{color: Color.BLACK}}>Light Theme</Text>
          <Switch
            trackColor={{false: Color.BLACK, true: '#81b0ff'}}
            thumbColor={themeSwitch ? Color.BLACK : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={e => _onValueChange(e)}
            value={themeSwitch}
          />
        </View>
        <TextInput
          style={[styles.textInput, {borderColor: Color.GRAY_MEDIUM}]}
          placeholder={'Please enter email'}
          placeholderTextColor={Color.GRAY_DARK}
          value={email}
          onChangeText={e => _onChangeText('email', e)}
        />
        <TextInput
          value={password}
          style={[styles.textInput, {borderColor: Color.GRAY_MEDIUM}]}
          placeholder={'Please enter password'}
          placeholderTextColor={Color.GRAY_DARK}
          onChangeText={e => _onChangeText('password', e)}
        />
        <TouchableOpacity
          style={styles.forgotPasswordView as StyleProp<ViewStyle>}
          onPress={() => _forgotPasswordFun()}>
          <Text style={{color: Color.GRAY_DARK}}>
            {i18n.t(STRINGS.forgotPasswordTitle)}?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button as StyleProp<ViewStyle>,
            {
              borderColor: Color.SECONDARY,
              backgroundColor: Color.SECONDARY,
            },
          ]}
          onPress={() => _loginFun()}>
          <Text
            style={[
              styles.loginText,
              {
                color: Color.WHITE,
              },
            ]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigation.navigate(screenNames.REGISTER_SCREEN)}
          style={styles.dontHaveAccountView as StyleProp<ViewStyle>}>
          <Text style={{color: Color.BLACK}}>
            {i18n.t(STRINGS.dontHaveAnAccountSignUpNow)}
          </Text>
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
    height: SPACING.SCALE_40,
    marginHorizontal: SPACING.SCALE_20,
    borderRadius: SPACING.SCALE_7,
    marginVertical: SPACING.SCALE_20,
  },
  button: {
    borderWidth: SPACING.SCALE_1,
    height: SPACING.SCALE_50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SPACING.SCALE_20,
    borderRadius: SPACING.SCALE_8,
    marginTop: SPACING.SCALE_25,
  },
  loginText: {
    fontSize: SPACING.SCALE_16,
    textAlign: 'center',
  },
  forgotPasswordTextStyle: {},
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
