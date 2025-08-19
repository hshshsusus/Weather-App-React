import { configureStore } from "@reduxjs/toolkit";
import currentReducer from "./currentSlice";

const appStore = configureStore({
    reducer:{
        current:currentReducer,
    }
})

export default appStore;