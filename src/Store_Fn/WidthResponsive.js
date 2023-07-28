import { createSlice } from "@reduxjs/toolkit"
export const WidthResponsive=createSlice({
    name:'WidthResponsive',
    initialState:{
        value:[]
    },
    reducers: {
        WidthResponsiveInner:(state,action)=>{
            state.value.splice(0,state.value.length);
            state.value=[...action.payload];
        }
    }
})
export const {WidthResponsiveInner}=WidthResponsive.actions;
export default WidthResponsive.reducer

 
