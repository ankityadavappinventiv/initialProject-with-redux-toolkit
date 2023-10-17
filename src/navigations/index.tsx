import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import PostLogin, {PostLoginParamList} from './PostLogin';
import PreLogin, {PreLoginParamList} from './PreLogin';
import {getLoginValue} from '_slices/auth.slice';
import {useAppSelector} from '_hooks';

export type RootStackParamList = {
  PostLogin: PostLoginParamList;
  PreLogin: PreLoginParamList;
};

const MainNavigation = () => {
  const isLoginCheck = useAppSelector(state => state.authReducer.isLogin);
  return (
    <NavigationContainer>
      {isLoginCheck ? <PostLogin /> : <PreLogin />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  loginValue: getLoginValue(state),
});

export default connect(mapStateToProps)(MainNavigation);
