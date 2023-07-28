import { createSlice } from "@reduxjs/toolkit"
export const Price_VAT=createSlice({
    name:'TaxPrice',
    initialState:{
        value:0
    },
    reducers: {
        ADD_Tax_Price:(state,action)=>{
                state.value=action.payload
        },
    },
})
export const {ADD_Tax_Price}= Price_VAT.actions

export default Price_VAT.reducer;



