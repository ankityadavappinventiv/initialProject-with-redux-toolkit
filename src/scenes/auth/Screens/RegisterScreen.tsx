import {Header, Screen} from '_components';
import {STRINGS, i18n} from '_utils';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useColors} from '_hooks';
import {vw} from '_styles';

type Props = {
  navigation: any;
};

const RegisterScreen = (props: Props) => {
  const Color = useColors();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const {name, email, password} = state;

  const _onChangeText = (key: string, value: string) => {
    setState(prev => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const _handleRegister = () => {
    Alert.alert('Sign Up');
  };

  return (
    <View style={styles.mainComponent}>
      <Header
        title={i18n.t(STRINGS.signUp)}
        isRightIcon={false}
        leftIconDisabled={false}
        _onLeftAction={() => props.navigation.goBack()}
      />
      <Screen
        style={styles.container}
        statusBarColor={Color.WHITE}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TextInput
          style={[styles.textInput, {borderColor: Color.GRAY_MEDIUM}]}
          placeholder="Name"
          onChangeText={e => _onChangeText('name', e)}
          value={name}
        />
        <TextInput
          style={[styles.textInput, {borderColor: Color.GRAY_MEDIUM}]}
          placeholder="Email"
          onChangeText={e => _onChangeText('email', e)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.textInput, {borderColor: Color.GRAY_MEDIUM}]}
          placeholder="Password"
          onChangeText={e => _onChangeText('password', e)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[
            styles.button,
            {
              borderColor: Color.SECONDARY,
              backgroundColor: Color.SECONDARY,
            },
          ]}
          onPress={_handleRegister}>
          <Text style={[styles.loginText, {color: Color.WHITE}]}>Sign Up</Text>
        </TouchableOpacity>
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: vw(1),
    height: vw(40),
    marginHorizontal: vw(20),
    borderRadius: vw(7),
    marginVertical: vw(20),
  },
  button: {
    borderWidth: vw(1),
    height: vw(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: vw(20),
    borderRadius: vw(8),
    marginTop: vw(25),
  },
  loginText: {
    fontSize: vw(16),
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegisterScreen;
