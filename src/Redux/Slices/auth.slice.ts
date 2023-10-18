import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import {loginAction} from '_action';
import {ApiRequest} from '_services';

export const authAdapter = createEntityAdapter();
export const AUTH_SLICE = 'authSlice';

interface employeeData {
  name: string;
  salary: string;
  age: string;
}

export const demoAction = createAsyncThunk<Response, employeeData>(
  'authSlice/demoAction',
  async (params: employeeData, thunkAPI: any) => {
    try {
      const response = await ApiRequest({
        url: 'https://dummy.restapiexample.com/api/v1/create',
        method: 'POST',
        params: params,
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const initialState = authAdapter.getInitialState({
  loginValue: {},
  loginLoading: '',
  isLogin: false,
  demoLoading: 'not loaded',
  languageCode: 'en',
});

export const authSlice = createSlice({
  name: AUTH_SLICE,
  initialState: initialState,
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
    changeLanguage: (state, action) => {
      return {
        ...state,
        languageCode: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, state => {
        state.loginLoading = 'loading';
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loginLoading = 'loaded';
        state.isLogin = true;
        state.loginValue = action.payload;
      })
      .addCase(loginAction.rejected, state => {
        state.loginLoading = 'error';
      })
      .addCase(demoAction.pending, (state, action) => {
        state.demoLoading = 'loading';
      })
      .addCase(demoAction.fulfilled, (state, action) => {
        state.demoLoading = 'loaded';
      })
      .addCase(demoAction.rejected, (state, action) => {
        state.demoLoading = 'error';
      });
  },
});

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;

export const getLoginValue = (state: any) => {
  return state.authReducer.loginValue;
};

export const getDemoLoginLoading = (state: any) => {
  return state.authReducer.demoLoading === 'loading';
};
