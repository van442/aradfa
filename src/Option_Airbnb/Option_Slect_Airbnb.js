import { useRef } from "react";
import { useSelector } from "react-redux";

function Option_Slect_Airbnb({ChangeUnderline,UnderLineBtom}){
    const ParentSelect=useRef()
    const Data_Store =useSelector((state) => state.SelectData.value);
  
return (
    <>
    {
        Data_Store.map((val,i)=>{
            return (
                <div 
                className={`${i==UnderLineBtom ? "border-b-[0.2rem] hover:border-b-[0.2rem] border-black ": " "} hover:border-b-2 h-16 min-w-max text-xs leading-3            
                mr-4 pb-2 text-[#717171] 
                hover:text-[#222222]`}
                onClick={()=>ChangeUnderline(i)}
                key={i}
                >
                        <div className=" flex justify-center mb-2"> 
                         <i className={` ${val.icon}   text-base `}></i>
                        </div> 
                        <div className="">{val.name} </div>       
                 </div>
        )
    })
}
    </>
)
}
export default Option_Slect_Airbnb;