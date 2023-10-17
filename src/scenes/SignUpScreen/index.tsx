import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PreLoginParamList} from '_navigations/PreLogin';
import styles from './styles';
import {Header, Screen} from '_components';

const SignUpScreen = () => {
  const navigation = useNavigation<PreLoginParamList>();
  const _onLeftAction = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      <Header
        title="Sign UP"
        isRightIcon={false}
        leftIconDisabled={false}
        _onLeftAction={_onLeftAction}
      />
      <Screen style={styles.container}>
        <Text>Container</Text>
      </Screen>
    </View>
  );
};

export default SignUpScreen;
