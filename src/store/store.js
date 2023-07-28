import { configureStore } from "@reduxjs/toolkit";
import OptionSlice from '../Store_Fn/Store_Handle_Redux/optionSelect'
import TaxPrice from "../Store_Fn/TotalPriceStore";
import WidthResponsive from '../Store_Fn/WidthResponsive';
import StorageData from "../Store_Fn/StorageData";
export default configureStore({
    reducer:{
        SelectData:OptionSlice,
        TaxPrice:TaxPrice,
         WidthResponsiveInnerHeight:WidthResponsive,
         StorageData:StorageData
    }
})