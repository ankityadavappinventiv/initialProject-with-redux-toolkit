import {createAsyncThunk} from '@reduxjs/toolkit';
import {actionNames} from '_utils';

export interface UserCredentials {
  email: string;
  password: string;
}

const loginAction = createAsyncThunk<Response, UserCredentials>(
  actionNames.loginAction,
  async (params: UserCredentials, thunkAPI: any) => {
    try {
      let result;
      if (params.email && params.password) {
        result = params;
      } else {
        throw Error('Invalid credentials');
      }
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export default loginAction;
