import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item_Main from "./Item_Main";
function Main (){
    const Items=useSelector((state)=>state.StorageData.value)
    const TaxPrice=useSelector((state)=>state.TaxPrice.value);

    
    return <>
   <div className="w-full z-4  ">
        <div className="
      grid mx-auto
      min-[100px]:grid-cols-1
      min-[100px]:w-[26rem] 
      min-[100px]:mx-auto
      min-[549px]:grid-cols-2

      min-[549px]:w-11/12
      min-[950px]:grid-cols-3
      min-[1128px]:grid-cols-4
      min-[1164px]:grid-cols-5
      min-[1184px]:grid-cols-5
      gap-3 row-auto
 
        ">
            {Items.map((element,key)=>{
                return (
                    <Item_Main key={element+key}
                    TaxPrice={TaxPrice}
                     Address={element.Address}
                     Scene={element.Scene}
                     Time={element.Time}
                     Price={element.Price}
                     Images={element.Image}
                     ></Item_Main>  
                )
            })}
         </div>
    </div> 
    </>
}
export default Main;