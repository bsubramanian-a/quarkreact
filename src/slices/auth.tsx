import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { setMessage } from "./message";

import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user") || "{}");

export const register = createAsyncThunk(
  "auth/register",
  async ({email, password, firstname, lastname}:any, thunkAPI) => {
    console.log("auth register", email, password, firstname, lastname)
    try {
      const response = await AuthService.register(email, password, firstname, lastname);
      return response.data;
    } catch (error:any) {
      return error.response;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }:any, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      return response;
    } catch (error:any) {
      return error.response;      
    }
  }
);

export const otp = createAsyncThunk(
  "auth/otp",
  async ({ email, otp }:any, thunkAPI) => {
    console.log("otp coming in",otp);
    try {
      const response = await AuthService.otp(email, otp);
      return response;
    } catch (error:any) {
      return error.response;      
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
  return true;
});

export const forget = createAsyncThunk(
  "auth/forget",
  async (email:string, thunkAPI) => {
    try {
      const response = await AuthService.forget(email);
      return response.data;
    } catch (error:any) {
      return error.response;
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/forget",
  async (email:string, thunkAPI) => {
    try {
      const response = await AuthService.verifyEmail(email);
      return response.data;
    } catch (error:any) {
      return error.response;
    }
  }
);

export const resetpassword = createAsyncThunk(
  "auth/forgetotp",
  async ({ email, otp, password, confirmPassword }:any, thunkAPI) => {

    try {
      const response = await AuthService.resetpassword(email, otp, password, confirmPassword);
      return response;
    } catch (error:any) {
      return error.response;      
    }
  }
);

export const changepassword = createAsyncThunk(
  "auth/forgetotp",
  async ({ email, currentpassword, newpassword }:any, thunkAPI) => {
    console.log("email",email);
    console.log("currentpassword",currentpassword);
    console.log("newpassword",newpassword);
    try {
      const response = await AuthService.changepassword(email, currentpassword,newpassword);
      return response;
    } catch (error:any) {
      return error.response;      
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = false;
    });

    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
    });

    builder.addCase(otp.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    });

    builder.addCase(otp.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(forget.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(forget.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(resetpassword.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(resetpassword.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  }
});

const { reducer } = authSlice;
export default reducer;