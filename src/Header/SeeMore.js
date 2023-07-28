import src from '../Image/2410a5f6-1ba6-456f-a895-029b0c8b0f65.jpg'
import { useRef } from 'react';
export default function SeeMore({contain,RefReport,HandleSetUpChang,GetTryAgain}){
   // const SeeMoreId=useRef(null);
    return (
        <>
        <div  
         id='SeeMoreId' 
         ref={RefReport}
        className={`animate-wiggle
         mx-auto  mt-[54px] bg-white rounded-xl w-[914px] grid grid-cols-2 grid-rows-1 gap-2`}>
            <div className="row-span-1">
                <div onClick={()=>HandleSetUpChang()} className='cursor-pointer z-10 absolute mt-6 ml-6'>&#10006;</div>
                <div  className='mx-auto w-fit text-center leading-5 py-[0.1px] rounded 
                px-[6px] tracking-wider font-semibold text-[10px] border-2 text-[#7F7F7F] 
                 border-[#7F7F7F] mt-[66px]'
                    >
                        THỬ NGHIỆM TRƯỚC</div>
                <div className='mt-[30px] mx-auto tracking-tight  text-[#222222] text-center
                 leading-[50px] text-[50px] font-[650]'
                    >
                    Một tổng giá duy nhất được hiển thị trước</div>
                <div className=' mx-auto pt-4 pb-4 text-center text-[#222222] 
                w-10/12
                '>
                    Giờ đây, bạn có xem trước tổng giá,bao gồm tất cả các khoản phí, trước thuế</div>

                <div onClick={()=>GetTryAgain()} className='mt-[16px] mx-auto leading-6 text-[#f7f7f7] font-semibold text-center w-fit
                bg-[#222222] rounded-lg px-[20px] py-[14px]
                ] cursor-pointer 
                 '
                >
                    Hãy thử ngay</div>
                <div  onClick={()=>HandleSetUpChang()} className=' cursor-pointer mt-[12px] text-center  underline-offset-2  underline'>Có lẽ để sau</div>
            </div>
            <div className='row-span-2 overflow-hidden  rounded-xl  '>
                <img className='mt-24 ml-4 ' src={src} alt='desktop'/>
            </div>
        </div>
        </>
    )
}