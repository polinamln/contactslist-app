import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("users/signup", userInfo);
      console.log(response);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userInfo);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
