import {BsFillMapFill} from 'react-icons/bs'
import {MdOutlineFormatListBulleted} from 'react-icons/md'
import { useState } from 'react'
export default function Display_Map({DisplayMapP}){
    const[ShowMap,setMap]=useState(true)
    const handleMap=()=>{
     setMap(!ShowMap)
     DisplayMapP()
    }
    return (
    <>
    <div 
    className='select-none fixed z-10 top-3/4 left-2/4 translate-x-[-50%]
     flex max-w-max rounded-3xl bg-[#222222]
     text-[#ffff] px-4 py-3 font-medium  items-center'
     onClick={handleMap}
        >
        <div>{ShowMap==true?'Hiện bản đồ':'Hiện thị danh sách'}</div>
        <div className='pl-2'>{ShowMap==true? <BsFillMapFill/>:<MdOutlineFormatListBulleted/>}</div>
    </div>
    </>
    )
}
