import { 
  useSelector,
  useDispatch 
} from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {BsCheck} from 'react-icons/bs'
import './style.css'
import {
  ADD_Tax_Price
} from '../Store_Fn/TotalPriceStore'
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  function Price_VAT(){
    const dispatch=useDispatch();
    const [Price,SetPriceVAT]=useState()
    const [isOn, setIsOn] = useState(false);
 useEffect(()=>{
  if(isOn==true){
    dispatch(ADD_Tax_Price(6))
  }
  else {
    dispatch(ADD_Tax_Price(0))
  }
 },[isOn])
   const toggleSwitch=()=>{
    setIsOn(!isOn)

   }
    return(
    <>
    <div className="  w-full  my-4
       z-4 relative  justify-center ">
        <div className="
        min-[100px]:py-3
        sm:w-11/12 sm:mx-auto sm:py-4
        min-[1128px]:w-2/4
        min-[1312px]:w-2/4  min-[1312px]:py-4 
        max-md:w-10/12
        max-md:mx-auto
        flex justify-between border 
        border-[#DDDD] rounded-xl">
          {/* --------------------------- */}
          <div className="flex max-md:block  items-center  ">
            <div className="max-xl:col-span-1 ml-4 mr-4 pr-4 border-r border-[#DDDD] text-sm leading-1 font-semibold ">Hiện thị tổng giá</div>
            <div className=" max-xl:col-span-3 max-md:ml-3 text-[#717171] text-sm">Bao gồm mọi khoản phí, trước thế</div>
          </div>
          {/* ----------------- */}
            <div  className= {`  flex min-[1312px]:mr-2 `}> 
              <div 
              className={`${isOn==true?'justify-end bg-black ':'justify-start bg-[#717171]  hover:bg-[#717171]'} mr-3  relative select-none  w-12 h-8   flex rounded-2xl cursor-pointer items-center`} 
               onClick={toggleSwitch} >
                <motion.div
                 className="w-7 h-7 bg-white rounded-2xl ml-[2px] mr-[2px]  flex items-center justify-center text-xl"
                 layout 
                 transition={spring}
                 >
                 {isOn && <BsCheck/>}
                 </motion.div>
              </div>
            </div>
        {/* --------------------------- */}
        </div>
    </div>
    </>
    )
    
}
export default Price_VAT;

