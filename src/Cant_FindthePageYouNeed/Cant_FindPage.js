import LogoHeaderAirbnb from "../AirBnbHeader/LogoHeaderAirbnb"
import UserHeaderAirBnb from "../AirBnbHeader/UserHeaderAirBnb"
import Footer_Child from "../Footer/Footer__Child.js";
import SupportFooter from "../Footer/SupportFooter"
import {image404} from '../Image/404.png'
import {useState} from 'react'
import { Link } from "react-router-dom";

function Cant_FindPage(){
// Sign X 
const [SignX,SetSignX]=useState(false);

    return (
    <>
    {/* Header  of   'Not find Page' */}
        <div className=" w-10/12 mx-auto sticky -top-1 bg-white grid grid-cols-2 py-6 pr-8 ">
        <LogoHeaderAirbnb/>
        <UserHeaderAirBnb/>
        </div>
        <hr></hr>
        <div className="grid grid-cols-2 w-10/12 mx-auto mt-10 pb-6">
            <div className=" ">
                <div className="text-2xl font-medium"><h3>Có vẻ như chúng tôi không tìm được trang bạn cần</h3></div>
                <div className=" text-[#222222] text-base font-light">Dưới đây là một số liên kết hữu ích để thay thế</div>
              <Link to='/' >  <div className="text-base underline font-medium leading-8">Nhà</div></Link>
                <div className="text-base underline font-medium leading-8">Đi lại cùng Airbnb</div>
                <div className="text-base underline font-medium leading-8">Đón tiếp khách trên Airbnb</div>
                <div className="text-base underline font-medium leading-8">Tin cậy và an toàn</div>
                <div className="text-base underline font-medium leading-8">Sơ đồi trang web</div>

            </div>
            <div className="border border-amber-400 mx-auto my-auto">
         {/* src={require(`../Image/${eleImage}`)} */}
                <div><img src={require(`../Image/404.png`)}/></div>
            </div>
        </div>
        <hr></hr>
        <div>
            <SupportFooter SignX={SignX}/>
        </div>
        <hr className="w-8/12 mx-auto  "/>
        <div className="  w-11/12 mx-auto">
            <Footer_Child SignX={SignX}/>
        </div>
    </>
    )
}
export default Cant_FindPage