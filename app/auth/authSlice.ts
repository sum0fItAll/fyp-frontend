import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@supabase/supabase-js';

interface AuthState {
    user: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.status = 'loading';
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.status = 'succeeded';
            state.user = action.payload;
        },
        loginFailed: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        logoutSuccess: (state) => {
            state.user = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailed, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
