import { createSlice } from "@reduxjs/toolkit";
import repository from './repository.json'

export const StorageData=createSlice({
    name:'StorageData',
    initialState:{
        value:repository
    },
    reducers:{}
})
export default StorageData.reducer
// import { createSlice } from "@reduxjs/toolkit"
// export const Price_VAT=createSlice({
//     name:'TaxPrice',
//     initialState:{
//         value:189.17
//     },
//     reducers: {}
// })
// export default Price_VAT.reducer;


