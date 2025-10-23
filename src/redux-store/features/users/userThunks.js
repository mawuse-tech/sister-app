import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axios";


export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/register', formData);
      console.log(response)
      return response.data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  }
);

export const loginUser = createAsyncThunk("/auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      console.log('this is logged in user:', response.data)
      return response.data

    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed, please try again"
      );

    }
  }
);

export const logout = createAsyncThunk("/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post('/auth/logout');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Logout failed, please try again");
    }
  }
);

export const isUserLoggedIn = createAsyncThunk("loaduser",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await api.get('/auth/isloggedin');
      return fulfillWithValue(res.data);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to check login");
    }
  }
);

export const volunteer = createAsyncThunk("volunteer",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await api.post('/volunteer', formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// quit volunteering
export const quitVolunteering = createAsyncThunk("/auth/quit",
  async ({ reason }, { rejectWithValue }) => {
    try {
      const res = await api.post('/complaint', { reason });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Quiting failed, please try again");
    }
  }
);

// fetching all volunteers
export const fetchAllVolunteers = createAsyncThunk("/allVolunteers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/allVolunteer');
      // console.log('-------',res.data.volunteers)
      return res.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Something went wrong, please try again later");
    }
  }
);

//pagination: fetching four volunteers per page
export const fourPerPage = createAsyncThunk(
  "fourPerPage",
  async ({ page, search, proffession, available }, thunkAPI) => {
    try {
      const res = await api.get(
        `/fourPerPage?page=${page}&limit=4${search ? `&search=${search}` : ""}${
          proffession ? `&proffession=${proffession}` : ""
        }${available ? `&available=${available}` : ""}`
      );

      // console.log("query data", res.data);
      return res.data;
    } catch (error) {
      console.log(error)
      if (error.response?.data?.message) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

