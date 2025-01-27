import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface SplashScreenState {
    splashScreen: boolean;
}

const initialState: SplashScreenState = {
    splashScreen: true,
};

export const SplashScreenSlice = createSlice({
    name: 'splashScreen',
    initialState,
    reducers: {
        SET_SPLASH_SCREEN: (state: SplashScreenState, action: PayloadAction<boolean>) => {
            state.splashScreen = action.payload;
        },
    },
});

export const { SET_SPLASH_SCREEN } = SplashScreenSlice.actions;
export const selectSplashScreen = (state: RootState) => state.splashScreen.splashScreen;