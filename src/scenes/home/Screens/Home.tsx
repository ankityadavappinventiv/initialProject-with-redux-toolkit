import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React, {useEffect} from 'react';
import {Header, Screen} from '_components';
import {useAppDispatch, useAppSelector, useColors} from '_hooks';
import {authAction, demoAction} from '_slices/auth.slice';

const Home = () => {
  const Color = useColors();
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
        backgroundColor={Color.WHITE}
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

export default Home;

interface StylesProps {
  mainComponent: ViewStyle;
  container: ViewStyle;
}

const styles = StyleSheet.create<StylesProps>({
  mainComponent: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
