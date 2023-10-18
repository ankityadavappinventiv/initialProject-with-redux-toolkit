// Library imports
import React from 'react';
import {
  NavigationAction,
  NavigationContainerRef,
  NavigationState,
} from '@react-navigation/native';

type ParamList = {};
export const navigationRef =
  React.createRef<NavigationContainerRef<ParamList>>();

export function navigate(
  routeName: string,
  params: {[key: string]: string | object | undefined} = {},
): void {
  navigationRef.current?.navigate(routeName, params);
}

export const reset = (state: string | {name: string}[]) => {
  navigationRef.current?.reset({
    index: 0,
    routes: typeof state === 'string' ? [{name: state}] : state,
  });
};

export function currentRoute() {
  return navigationRef?.current?.getCurrentRoute();
}

export function dispatch(
  action: NavigationAction | ((state: NavigationState) => NavigationAction),
): void {
  navigationRef.current?.dispatch(action);
}

export function goBack() {
  return navigationRef?.current?.goBack();
}
