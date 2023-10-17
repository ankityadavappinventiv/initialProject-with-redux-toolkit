import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../Redux/Slices';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import {authAction} from '_slices/auth.slice';
import {ApiRequest} from '_services';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const authInterceptor =
  (dispatch: any) =>
  (next: (action: any) => void) =>
  (action: {payload: any}) => {
    if (
      action?.payload !== undefined &&
      action.payload !== null &&
      action.payload?.response?.status === 401
    ) {
      dispatch(authAction.logout({}));
      ApiRequest.defaults.headers.common.Authorization = '';
    } else {
      next(action);
    }
  };

export const store: any = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, authInterceptor],
  devTools: __DEV__,
  preloadedState: {},
});
export const persistor: RootState = persistStore(store);
