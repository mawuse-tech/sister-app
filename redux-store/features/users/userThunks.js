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
            console.log(response.data)
            return response.data

        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Login failed"
            );

        }
    }
)
