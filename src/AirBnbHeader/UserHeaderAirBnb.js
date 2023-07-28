import UserHeader from "./UserHeader.js";
import Account from "../Account/Account.js";

// -----------------------------------------------------
import { useEffect, useState } from "react";

function UserHeaderAirBnb() {
    const [DisplayLogUpIn,setDisplayLogUpIn]=useState(false);
    function ShowLoginLogUp (vale){
            setDisplayLogUpIn(!DisplayLogUpIn)
      
    }

    return (
    <>

     <div className=" justify-end  flex items-center self-center text-sm ">
            <div  className="hover:bg-neutral-100 mr-0 px-2 py-2 rounded-2xl  ">Cho thuê chổ ở qua Airbnb</div>
            <div className=" hover:bg-neutral-100 mr-4 py-2 rounded-2xl  text-base px-2 ">🌐</div>
            <div onClick={()=>ShowLoginLogUp(true)} className="User_Log  bg-gradient-to-r   hover:shadow-lg hover:shadow-black-500/50
             rounded-3xl items-center  w-[77px] h-[42px] flex border-solid text-xl  border-gray-200  border-[1px]">
               <UserHeader/>
            </div>
    </div>
    {DisplayLogUpIn && <div className="  absolute right-10 top-16 "><Account/></div>}
    

         {/*  */}
           {/* <div className=" right-10 top-20 absolute"><Account/></div> */}
    {/* } */}

    </>
    )
}
export default UserHeaderAirBnb