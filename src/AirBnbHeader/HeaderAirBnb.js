
import Search_HeaderAbnb from "./Search_HeaderAbnb.js";
import LogoHeaderAirbnb from "./LogoHeaderAirbnb.js";
import UserHeaderAirBnb from "./UserHeaderAirBnb.js";
import Option_Airbnb from '../Option_Airbnb/Option_Airbnb.js'

import { useEffect } from "react";
// -----------------------------------------------------------------------
import {BiSearchAlt2} from 'react-icons/bi'
import {CiSliderHorizontal}from 'react-icons/ci'
export default function HeaderAirBnb(){

    return (
        <>
        <div className=" sticky top-0 z-10 w-11/12 mx-auto bg-white ">
        <div  className="pt-4 flex  max-md:hidden justify-between  bg-white 
         ">
                    <LogoHeaderAirbnb/>
                     <Search_HeaderAbnb/>
                    <UserHeaderAirBnb/>     
        </div>
        <div className=" h-fit  max-md:block md:hidden mb-2 mt-4 w-screen">
        <div className="shadow-md py-[3px] justify-between flex
         items-center mx-auto rounded-full w-10/12
          border-2 border-black/50-600">
            <div className="flex items-center ml-3 ">
                <div className="p-3">
                    <BiSearchAlt2/>
                </div>
                <div>
                    <div className="text-sm">Địa điểm bất kỳ</div>
                    <div className="text-xs text-stone-400">Tuần bất kỳ -thêm khách</div>
                </div>
            </div>
            <div className=" mr-3 py-1 text-xs px-1 shadow-md rounded-3xl border border-black/50">
                <CiSliderHorizontal/>
            </div>
            </div>
        </div>
         <hr className="max-md:hidden" ></hr>
         <div>

            <Option_Airbnb />
         </div>
        </div>
        </>
    )
}
