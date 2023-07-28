import { useState, useRef, useEffect } from "react";
import SeeMore from "./SeeMore";
import LoginLoup from "../LoginLogUp/LoginLogup";

export default function FindOutMore() {
  const IdSeeMore = useRef(null);
  const [contain, setContant] = useState(false);
  const [LoginLogUp, SetLoginLogUp] = useState(false);
  const [CurrentSeeMore, SetCurrentSeeMore] = useState(null);

  const RefReport=useRef();

  const HandleSetUpChang = () => {
    //setContant(!contain);
    if(contain==true){
     IdSeeMore.current.className='animate-bgHiddenEnd z-20  w-screen h-screen top-0  fixed bg-opacity-50 bg-black';
     RefReport.current.className='animate-Hwiggle  mx-auto  mt-[54px] bg-white rounded-xl w-[914px] grid grid-cols-2 grid-rows-1 gap-2'
      setTimeout(()=>{
        // IdSeeMore.current.className='animate-bgHidden_Start z-20  w-screen h-screen top-0 fixed bg-opacity-50 bg-black';
        setContant(false);
      },810);
    }
    // false 
    else {
        setContant(true);
    }
  };
  const GetTryAgain = () => {
    HandleSetUpChang();
    SetLoginLogUp(!LoginLogUp);
  };

  const setDisShow = () => {
    SetLoginLogUp(false);
  };
  useEffect(() => {
    SetCurrentSeeMore(IdSeeMore.current);
  }, [contain]);

  useEffect(() => {
    window.onclick = function (event) {
      if (CurrentSeeMore && CurrentSeeMore === event.target) {
        HandleSetUpChang();
      }
    };
  });

  return (
    <>
      <div
        className=" max-xl:hidden relative bg-[#F7F7F7] text-[#222222] 
            font-[650] gap-2 flex font-sans justify-center h-14 text-[15px] 
            leading-5 items-center "
      >
        <div className="text-[15px] w-2/4  text-end">Xem trước tổng giá </div>
        <div
          onClick={HandleSetUpChang}
          className=" underline-offset-2 underline
                 cursor-pointer w-2/4   active:text-sm"
        >
          Tìm hiểu thêm{" "}
        </div>
      </div>
      {contain && (
        <div
          id="SeeMore"
          ref={IdSeeMore}
          className={`animate-bgHidden_Start z-30  w-screen h-screen top-0 
            fixed bg-opacity-50 bg-black`}
        >
          <SeeMore
            contain={contain}
            RefReport={RefReport}
            HandleSetUpChang={HandleSetUpChang}
            GetTryAgain={GetTryAgain}
          >
          </SeeMore>
        </div>
      )}
      {LoginLogUp && <LoginLoup setDisShow={setDisShow} />}
    </>
  );
}
