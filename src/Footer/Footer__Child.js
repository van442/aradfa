import { SiBitcoinsv } from "react-icons/si";
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterSquare,AiOutlineHeart} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import {HiOutlineUserCircle} from 'react-icons/hi'
import { Link } from "react-router-dom"
function Footer_Child({SignX,HandleHideRS})
{
    return(
    <>
     <footer className={`${SignX==false?'relative w-full': ' '}  py-1  bg-white  border-t-[1px] border-[#DDDD] fixed animate-none bottom-0 w-full`}>
    <div className={`${SignX==false?'h-16 px-0':''} max-md:hidden px-10 text-sm flex justify-between h-10  items-center`}>
    <div>&#xa9; 
     <span className="hover:underline">Airbnb,Inc.</span> &#xb7;
        <span className="hover:underline">Quyền riêng tư</span>  &#xb7;
         <span className="hover:underline"> Điều khoản</span> &#xb7;
         <Link to='/sitemaps/v2/' > <span className="hover:underline"> Sơ đồ trang  web</span></Link>
    </div>
    <div className={`flex  `}> 
        <span>🌐</span> 
        <span className="hover:underline">Tiếng Việt(VN) </span>
         {SignX==false ?
                    <div className=" flex items-center">
                    <span className="ml-4 mr-4 text-xl"><SiBitcoinsv/></span>
                    <span className="mr-4  hover:underline">THB</span>
                    <span className="mr-3 text-2xl"><AiFillFacebook/></span>
                    <span className="mr-3 text-2xl"><AiFillTwitterSquare/></span>
                    <span className=" text-2xl"><FaInstagramSquare/></span>
                   </div>
        :<span className="pl-4 hover:underline">&#x24; USD  </span>}
       {SignX==false ?'':<span className="pl-4 hover:underline" onClick={HandleHideRS}>hỗ trợ và tài nguyên</span>} 
        {SignX==false ?'':<span className="pl-2"><i onClick={HandleHideRS} className="fa-solid fa-chevron-up"></i></span>}
      </div>
</div>
{/* --------------------------- */}
<div className=" w-screen hidden max-md:block ">
  <div className="flex py-3 justify-center text-slate-400">

  <div className="mr-4 ">
      <div className=" flex justify-center "> <BiSearchAlt2/></div>
      <div> Khám Phá</div>
  </div>
  <div className="mr-4   ">
    <div  className="flex justify-center"><AiOutlineHeart/></div>
    <div>Yêu Thích</div>
  </div>
  <div className="mr-4  ">
    <div className="flex justify-center "><HiOutlineUserCircle/></div>
    <div>Đăng Nhập</div>
  </div>
    </div>
  </div>
</footer>

</>
)}
export  default Footer_Child