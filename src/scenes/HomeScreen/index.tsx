import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {COLORS} from '_styles';
import {Header, Screen} from '_components';
import {useAppDispatch} from '_hooks';
import {
  demoAction,
  getDemoLoginLoading,
  authReducer,
} from '../../Redux/Slices/auth.slice';
import {useAppSelector} from '../../hooks/generalHooks';
import {authAction} from '../../Redux/Slices/auth.slice';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector(
    state => state.authReducer.demoLoading === 'loading',
  );
  useEffect(() => {
    let params = {name: 'test', salary: '123', age: '23'};
    dispatch(demoAction(params));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header title="Home Screen" isRightIcon={false} isLeftIcon={false} />
      <Screen
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        backgroundColor={COLORS.ALERT}
        loading={loadingState}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        preset="scroll"
        style={{flexGrow: 1}}>
        <View style={styles.mainComponent}>
          <View style={styles.container}>
            <Text onPress={() => dispatch(authAction.logout({}))}>
              Home Screen
            </Text>
          </View>
        </View>
      </Screen>
    </View>
  );
};

export default HomeScreen;
