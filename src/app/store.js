import { configureStore} from '@reduxjs/toolkit';
import userProfileReducer from '../features/userProfile/userProfileSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(apiSlice.middleware)
});
