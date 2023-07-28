import { useEffect, useRef, useState,useLayoutEffect } from 'react';
import { useAsyncError } from 'react-router';
import {MdOutlineKeyboardArrowRight,MdOutlineKeyboardArrowLeft} from 'react-icons/md';
import {AiFillStar,AiOutlineHeart} from 'react-icons/ai';
import {heart} from '../svg/index'
function Item_Main({
    TaxPrice,
    Address,
    Scene,
    Time,
    Price,
    Images
}){
    const HoverOpacityArrowRightAndLeft=useRef();
    const MainListImage=useRef()
    // const [Images,setImageLink]=useState([
    //         // "064e61b5-a12a-4554-8981-eaf6fbb76feb.jpeg",
    //         // "211417b1-9182-410f-858f-8d694cf4244b.jpeg",
    //         // "2db54bbd-53e5-4878-bb91-c0c225292afb.jpeg",
    //         // "6a4b41db-b0a3-4c73-85c8-f4660586f01c.jpg",
    //         // "8155b71b-8500-4dfe-a495-36208abe950e.jpeg",
    //         // "ce2fa9f0-49c9-4ff0-a543-057929a8078e.jpg",
    //         // "da4cc810-2a89-4b9c-88e7-207b073e2b89.jpeg"
    // ] )
    // useEffect(()=>{
    //     setImageLink(Images)
    // },[])
  useLayoutEffect(()=>{
    MainListImage.current.addEventListener('mouseover',()=>{
        HoverOpacityArrowRightAndLeft.current.style.display='block'
    })
    MainListImage.current.addEventListener('mouseout',()=>{
        HoverOpacityArrowRightAndLeft.current.style.display='none'
    })
  },[])
    const Main_Item=useRef()
    const ItemImage=useRef();
    const PushShow=useRef();
    const SlideDot=useRef();
    const containDot=useRef()
//  const [ScrollItem,setScrollItem]=useState(0)
 const [Count_ScrollWidth_Item,setCount_ScrollWidth_Item]=useState(0)

 const [ScrollWidth_ItemClientWidth,setScrollWidth_ItemClientWidth]=useState(0)

 const [TransformSlateX,setTransformSlateX]=useState(0)
 const [StyleSlateX,setStyleSlateX]=useState({transform:'translateX(0%)'})
 const [OpacityLeft,SetOpacityLeft]=useState({opacity:'0'})
 const [OpacityRight,SetOpacityRight]=useState({opacity:'1' }) 
 const [NumberStraslate,SetNumberStraslate]=useState() 
 const [ShowButton,setShowButton]=useState(true)
 //Dot Image
 const [DotImage,SetDotImage]=useState([])
//   {
    // Slide Image HoverOpacity_ArrowRight_AndLeft
const buttonRight=useRef();
const buttonLeft=useRef();
    const [curr,setCurr]=useState(0)
    const prev=()=>{
        setCurr((curr)=>(curr==0?Images.length-1:curr-1))
    }
    const next=()=>{
        setCurr((curr)=>(curr==Images.length-1 ?0: curr+1))
    }
    



return (
<>
<div  className='grid-cols-1 grid-rows-1  '>
    <div 
    ref={MainListImage}
    className='rounded-t-lg relative flex  w-full overflow-hidden'>
        <div
         className='flex transition-transform ease-out duration-500 '
         style={{transform:`translateX(-${curr*100}%)`}}
        >
     {Images.map((eleImage)=>(
        <img 
             alt='image'
             key={eleImage}
             className='rounded-b-lg '
             src={require(`../Image/${eleImage}`)}
             style={{ 
                'height':15+'rem',
             'width':29+'rem' 
            }}
             />
     ))}    
    </div>
    <div className={`absolute text-white flex justify-end
     w-full z-[3] text-xl mt-2 pr-3
      after:bg-black after:absolute
      after:content-[link]
      after:text-xl
      after:w-4
      after:h-4
      after:opacity-20

     `}><AiOutlineHeart/>
     </div>

    <div 
    ref={HoverOpacityArrowRightAndLeft}
    className='hidden absolute w-full h-full '>
     <div
         className='flex justify-between h-full items-center mx-3'>

    <button className='bg-white rounded-2xl'
                onClick={prev}
                ref={buttonRight}
               >
                   <MdOutlineKeyboardArrowLeft/>
               </button>
               <button
                className='bg-white rounded-2xl' 
                onClick={next}
                >
                   <MdOutlineKeyboardArrowRight/>
         </button>
    </div>
    </div>
    

    </div>
{/* information */}
<div className="space-y-1.1 text-sm h-auto leading-loose mt-3">
                            <div className=" text-black  flex items-center justify-between ">
                                <div className='font-[550]'>{Address}</div>
                                <div className="flex items-center"><div><AiFillStar/> </div><div className="text-sm ml-1 mr-1">4,87</div></div>
                            </div>
                            <div className=" text-[#222222] ">{Scene}</div>
                            <div className="text-[#222222] ">{Time}</div>
                            <div className={`flex  text-black ${TaxPrice==0?'':' underline'}`}>
                                <div className={`font-semibold ${TaxPrice==0?'':'underline'} `}>
                                        ${TaxPrice==0? Price:Price*TaxPrice}</div>
                    <div> {TaxPrice==0?" /Đêm ":" Tổng trước thuế "}</div>
                 </div >
            </div>
    </div>
</>
)


}
export default  Item_Main;