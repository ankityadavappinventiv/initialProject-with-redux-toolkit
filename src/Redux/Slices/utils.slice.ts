import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

export const utilsAdapter = createEntityAdapter();
export const UTILS_SLICE = 'utilsSlice';

export const initialState = utilsAdapter.getInitialState({
  languageCode: 'en',
  theme: '',
});

export const utilSlice = createSlice({
  name: UTILS_SLICE,
  initialState: initialState,
  reducers: {
    changeLanguage: (state, action) => {
      return {
        ...state,
        languageCode: action.payload,
      };
    },
    changeTheme: (state, action) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
  },
  extraReducers: builder => {},
});

export const utilsAction = utilSlice.actions;
export const utilsReducer = utilSlice.reducer;
