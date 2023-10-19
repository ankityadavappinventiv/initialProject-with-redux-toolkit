import {Header, Screen} from '_components';
import {COLORS, vw} from '_styles';
import {STRINGS, i18n} from '_utils';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Alert,
} from 'react-native';

type Props = {
  navigation: any;
};

const ForgotPassword = (props: Props) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log(`Password reset requested for email: ${email}`);
  };

  const _onLeftAction = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.mainComponent}>
      <Header
        title={i18n.t(STRINGS.forgotPasswordTitle)}
        isRightIcon={false}
        _onLeftAction={_onLeftAction}
      />
      <Screen
        style={styles.container}
        statusBarColor={COLORS.GRAY_LIGHT}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          marginHorizontal: vw(20),
        }}>
        <TextInput
          style={styles.textInput}
          placeholder={'Please enter email'}
          value={email}
          onChangeText={e => setEmail(e)}
        />
        <TouchableOpacity
          style={styles.button as StyleProp<ViewStyle>}
          onPress={() =>
            Alert.alert('Alert Title', i18n.language, [
              {
                text: 'OK',
                onPress: () => {
                  console.log('OK Button Pressed');
                },
              },
            ])
          }>
          <Text style={styles.loginText}>
            {i18n.t(STRINGS.forgotPasswordTitle)}
          </Text>
        </TouchableOpacity>
      </Screen>
    </View>
  );
};
const styles = StyleSheet.create({
  mainComponent: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: vw(1),
    borderColor: COLORS.GRAY_MEDIUM,
    height: vw(40),
    marginHorizontal: vw(20),
    borderRadius: vw(7),
    marginVertical: vw(20),
  },
  button: {
    borderWidth: vw(1),
    borderColor: COLORS.SECONDARY,
    backgroundColor: COLORS.SECONDARY,
    height: vw(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: vw(20),
    borderRadius: vw(8),
    marginTop: vw(25),
  },
  loginText: {
    color: COLORS.WHITE,
    fontSize: vw(16),
    textAlign: 'center',
  },
});

export default ForgotPassword;
