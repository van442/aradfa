import { BsSliders } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Option_Select_Airbnb from "./Option_Slect_Airbnb";

import { useRef, useState } from "react";

function AddressAirbnb() {
  const [showArrowLeft, SetShowArrowLeft] = useState(true);
  const [showArrowRight, SetShowArrowRight] = useState(false);
  const [UnderLineBtom, SetUnderlinerBtom] = useState(0);
  const Width_AirB_Select = useRef();
  const Arrow_Scroll = (Nub_Change) => {
    let offsetWidth_AirB = Width_AirB_Select.current.offsetWidth;
    let scrollWidth_AirB = Width_AirB_Select.current.scrollWidth;
    let RemainingWidth = scrollWidth_AirB - offsetWidth_AirB;
    // distant scroll Left to Scroll with
    console.log(RemainingWidth,'RemainingWidth')
    console.log(offsetWidth_AirB,'offsetWidth_AirB')
    console.log(scrollWidth_AirB,'scrollWidth_AirB')
    let Arrow_Right_AirB = (Width_AirB_Select.current.scrollLeft +=
      offsetWidth_AirB * Nub_Change);
      console.log(Arrow_Right_AirB,'Arrow_Right_AirB')
      if (Arrow_Right_AirB >= RemainingWidth) {
      console.log(Arrow_Right_AirB,'IFArrow_Right_AirB------dsdaf')
      SetShowArrowLeft(false);
    }
    if(Arrow_Right_AirB<RemainingWidth){
      SetShowArrowLeft(true);

    }
    if(Arrow_Right_AirB<=0){
      SetShowArrowRight(false)
    }
    if(Arrow_Right_AirB>=offsetWidth_AirB){
      SetShowArrowRight(true)

    }
    // } else if (Arrow_Right_AirB <= 0) {
    //   SetShowArrowRight(false);
    // } else {
    //   SetShowArrowRight(true);
    //   SetShowArrowLeft(true);
    // }

  };
  const ChangeUnderline=(Val)=>{
    SetUnderlinerBtom(Val)
  }

  return (
    <>
    <div className=" top-20 bg-white w-full flex items-center pt-4 mt-0 justify-evenly ">
      <div className="
      w-10/12 flex justify-evenly 
      max-md:w-11/12
      max-md:mx-auto
      max-md:sticky
      ">
        <div onClick={() => Arrow_Scroll(-1)} className={`${showArrowRight==false?'hidden':'block'}
        w-[5%] m-auto `}>
          <div className=" ml-2 mr-2 px-1 py-1 rounded-full border w-fit  border-zinc-600">
            <MdKeyboardArrowLeft />
            </div>
          </div>
        <div
         id="scrollbar-widthSelect" 
          ref={Width_AirB_Select} 
          className="w-auto scroll-smooth flex overflow-x-scroll ">
          <Option_Select_Airbnb
           UnderLineBtom={UnderLineBtom}
            ChangeUnderline={ChangeUnderline}/>
          </div>
        <div  
          onClick={() => Arrow_Scroll(1)} 
        className={`w-[5%] m-auto ${showArrowLeft==false ?'hidden':'block'}`}>
          <div className=" ml-2 mr-2 px-1 py-1 rounded-full border w-fit  border-zinc-600">
          <MdKeyboardArrowRight  />
          </div>
          </div>
      </div>
{/* 
{`${showArrowLeft==false?'opacity-0 ':'opacity-100 '}
${showArrowRight==true?'opacity-100 ':'opacity-0 
*/}
      {/* --------------------------------------------- */}
      <div className="max-md:hidden w-auto  flex justify-end mr-4 ">
             <div className="mr-1 flex algin-center rounded-xl  h-max  w-max
                        border-stone-300 border-[1px]  px-4 py-4">
                  <div>
                        <BsSliders />
                  </div>
                  <div className="  select-none cursor-pointer pl-1 text-xs">
                      Bộ lọc
                  </div>
              </div>
       </div>
       {/* --------------------------------------------- */}

    </div>
    </>
  );
}
export default AddressAirbnb;
