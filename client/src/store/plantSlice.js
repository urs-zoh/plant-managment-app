import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5012/plants";

export const fetchPlants = createAsyncThunk("plants/fetchPlants", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

const plantSlice = createSlice({
    name: "plants",
    initialState: {
        plants: [],
        status: "idle",
    },
    reducers: {
        addPlant: (state, action) => {
            state.plants.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlants.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPlants.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.plants = action.payload;
            });
    },
});

export const { addPlant } = plantSlice.actions;

export default plantSlice.reducer;