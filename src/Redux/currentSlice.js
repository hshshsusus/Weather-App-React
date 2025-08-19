import { createSlice } from "@reduxjs/toolkit";

const currentSlice = createSlice({
    name:"current",
    initialState:{
        currentData:null,
        AQIData:null,
        comingDaysData:null,
    },
    reducers:{
        addCurrentData:(state,action) =>{
            state.currentData = action.payload;
        },
        addAQIData:(state,action) =>{
            state.AQIData = action.payload;
        },
        addComingDaysData:(state, action) =>{
            state.comingDaysData = action.payload;
        }
    }
})

export const {addCurrentData, addAQIData, addComingDaysData} = currentSlice.actions;

export default currentSlice.reducer;