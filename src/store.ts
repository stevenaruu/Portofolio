/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { SplashScreenSlice } from './store/splash-screen/SplashScreenSlice';

const rootReducer = combineReducers({
    splashScreen: SplashScreenSlice.reducer
});

// const persistedReducer = persistReducer(
//     {
//         key: 'root',
//         storage
//     },
//     rootReducer,
// );

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;