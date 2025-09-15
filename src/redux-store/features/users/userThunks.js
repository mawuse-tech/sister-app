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
            console.log('this is logged in user:',response.data)
            return response.data

        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Login failed, please try again"
            );

        }
    }
);

export const logout = createAsyncThunk("/auth/logout", 
    async(_, thunkApi) => {
       try {
         const res = await api.post('/auth/logout');
        return res.data
       } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Logout failed, please try again")
       }
    }
);

export const isUserLoggedIn = createAsyncThunk('loaduser', async (_, thunkAPI) => {
    try {
        const res = await api.get('/auth/isloggedin');
        // console.log('userdata',res.data)
        return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
        if (error.response && error.response.data.message) {
            return thunkAPI.rejectWithValue(error.response?.data?.message)
        }

        return thunkAPI.rejectWithValue(error.response?.data?.message)
    }
});

export const volunteer = createAsyncThunk('volunteer', async(formData, {rejectWithValue}) =>{
    try {
        const response = await api.post('/auth/volunteer', formData, {
            headers:  { "Content-Type": "multipart/form-data" }
        })
        console.log(response.data)
        return response.data

    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
})
