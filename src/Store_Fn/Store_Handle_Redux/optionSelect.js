import { createSlice } from "@reduxjs/toolkit";
import {DataSelect} from './Data';
export const OptionSlice = createSlice({
    name: 'OptionSlice',
    initialState: {
      value:DataSelect
    },

    reducers: {}
})
export default OptionSlice.reducer
