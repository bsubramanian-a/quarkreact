import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import { companyApi } from './services/company-service';
import { truckApi } from './services/truck-service';
import { setupListeners } from '@reduxjs/toolkit/query';

const reducer = {
  auth: authReducer,
  [companyApi.reducerPath]: companyApi.reducer,
  [truckApi.reducerPath]: truckApi.reducer,
}

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(truckApi.middleware, companyApi.middleware),
});

setupListeners(store.dispatch);