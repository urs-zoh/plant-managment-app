import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./plantSlice";

const store = configureStore({
    reducer: {
        plants: plantReducer,
    },
});

export default store;