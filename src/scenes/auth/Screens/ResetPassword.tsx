import {View, Text} from 'react-native';
import React from 'react';
import {Header, Screen} from '_components';
import {STRINGS, i18n} from '_utils';

type Props = {
  navigation: any;
};

const ResetPassword = (props: Props) => {
  return (
    <View>
      <Header
        _onLeftAction={() => props.navigation.goBack()}
        title={i18n.t(STRINGS.resetPassword)}
      />
      <Screen>
        <Text>ResetPassword</Text>
      </Screen>
    </View>
  );
};

export default ResetPassword;
