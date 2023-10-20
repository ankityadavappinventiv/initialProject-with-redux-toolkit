import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {useAppSelector} from './generalHooks';

export const useColors = () => {
  const colorScheme = useColorScheme();
  const {theme} = useAppSelector(state => state.utilsReducer);

  const lightTheme = {
    PRIMARY: '#1779ba',
    SECONDARY: '#767676',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    SUCCESS: '#3adb76',
    WARNING: '#ffae00',
    ALERT: '#cc4b37',
    GRAY_LIGHT: '#e6e6e6',
    GRAY_MEDIUM: '#cacaca',
    GRAY_DARK: '#8a8a8a',
    STATUS_BAR_COLOR: '#e6e6e6',
  };

  const darkTheme = {
    PRIMARY: '#e88645',
    SECONDARY: '#898989',
    WHITE: '#000000',
    BLACK: '#FFFFFF',
    SUCCESS: '#c52489',
    WARNING: '#005501',
    ALERT: '#33b4c8',
    GRAY_LIGHT: '#191919',
    GRAY_MEDIUM: '#353535',
    GRAY_DARK: '#757575',
    STATUS_BAR_COLOR: '#191919',
  };

  return theme
    ? theme === 'dark'
      ? {...darkTheme}
      : {...lightTheme}
    : colorScheme === 'dark'
    ? {...darkTheme}
    : {...lightTheme};
};
