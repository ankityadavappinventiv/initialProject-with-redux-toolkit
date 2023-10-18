import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import PostLogin from './PostLogin';
import PreLogin from './PreLogin';
import {getLoginValue} from '_slices/auth.slice';
import {useAppSelector} from '_hooks';
import {navigationRef} from './navigationServices';
import {i18n} from '_utils';

const MainNavigation = () => {
  const {isLogin, languageCode} = useAppSelector(state => state.authReducer);
  React.useEffect(() => {
    if (languageCode) {
      if (i18n.language === 'en') {
        i18n.changeLanguage('es');
        i18n.reloadResources('es');
      } else {
        i18n.changeLanguage('en');
        i18n.reloadResources('en');
      }
    }
  }, [languageCode]);
  return (
    <NavigationContainer ref={navigationRef}>
      {isLogin ? <PostLogin /> : <PreLogin />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => ({
  loginValue: getLoginValue(state),
});

export default connect(mapStateToProps)(MainNavigation);
