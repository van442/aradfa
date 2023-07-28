import SupportFooter from "./SupportFooter";

import {
     useEffect, 
     useRef,
     useState
} from "react"
import { 
    Link,
} from "react-router-dom";
import Footer_Child from "./Footer__Child";

export default function Footer ({SignX}) {
    const IdSeeMore=useRef()
    const [Show,setShow]=useState(false);
    const [SupportFooters,SetSupportFooter]=useState(null)
    const HandleHideRS=()=>{
        setShow(!Show)
    }
    useEffect(()=>{
        SetSupportFooter(IdSeeMore.current);
    },[Show])
 
        useEffect(()=>{
            window.onclick=function(event){
            if(SupportFooters&&SupportFooters===event.target){
                HandleHideRS();
            }
        }
        window.addEventListener("keyup",function(event){
            if(event.keyCode===27){
                HandleHideRS();
            }
          
        })
        })
        
    return (
        <>
        <Footer_Child HandleHideRS={HandleHideRS} ></Footer_Child>
        { Show&& 
            <div ref={IdSeeMore} className=" transition ease-in-out  flex items-end  animate-OpacityBackgroundBlack
            bg-opacity-50 bg-black h-full w-full top-0 z-40 fixed  ">
                <SupportFooter SignX={SignX} HandleHideRS={HandleHideRS} />
            </div>
            }
        </>
    )
}