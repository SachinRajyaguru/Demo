import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUserStart(state) {
      state.isLoading = true;
    },
    authenticateUserSuccess(state) {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
    },
    authenticateUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    clearAuthenticationState(state) {
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  authenticateUserStart,
  authenticateUserSuccess,
  authenticateUserFailure,
  clearAuthenticationState,
} = authSlice.actions;

export default authSlice.reducer;
