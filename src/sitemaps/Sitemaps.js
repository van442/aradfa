import { useEffect, useState } from "react";
// symbols
import {IoIosArrowForward} from 'react-icons/io'
import {ImInstagram} from "react-icons/im";
import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
//-------------------------------------------
import LogoHeaderAirbnb from "../AirBnbHeader/LogoHeaderAirbnb";
import { Link } from "react-router-dom";
function Sitemaps(){
    document.title='Sơ đồ trang web - Airbnb';
    // list Site map 
const [listSiteMap,SetListSiteMap]=useState([
    'Destination',
    'Categories',
    'Stays by Type',
    'Stays by Location & Type',
    'Airbnb Luxe Destinations',
    'Airbnb Luxe',
    'Airbnb Monthly Stay Destinations',
    'Experiences',
    'Experiences by Location &Type',
    'Localized Sites',
    'Custom Landing Pages',
    'Help Center pages',
    'Resource Center pages',
    'Most Common Pages',
    'Thing to do',
])
const [ListDestination,setDestinations]=useState([
    'Vacation rentals & Homes in A Coruña',
    'Vacation rentals & Homes in Aachen',
    'Vacation rentals & Homes in Aarhus',
    'Vacation rentals & Homes in Aberdeen',
    'Vacation rentals & Homes in Abidjan',
    'Vacation rentals & Homes in Abu Dhabi',
    'Vacation rentals & Homes in Acapulco',
    'Vacation rentals & Homes in Acapulco',
    'Vacation rentals & Homes in Addis Ababa',
    'Vacation rentals & Homes in Adelaide',
    'Vacation rentals & Homes in Aegina',
    'Vacation rentals & Homes in Agadir',
    'Vacation rentals & Homes in Alghero',
    'Vacation rentals & Homes in Alicante',
    'Vacation rentals & Homes in Agadir',
    'Vacation rentals & Homes in Arb',
    'Vacation rentals & Homes in Arbin',
    'Vacation rentals & Homes in Argentina',
    'Vacation rentals & Homes in Aspen',
    'Vacation rentals & Homes in Atlanta',
    'Vacation rentals & Homes in Austin',
    'Vacation rentals & Homes in Avignon',
    'Vacation rentals & Homes in Baden-Baden',
    'Vacation rentals & Homes in Bali',
    'Vacation rentals & Homes in Bari',
    'Vacation rentals & Homes in Belgrade',
    'Vacation rentals & Homes in Biarritz',
    'Vacation rentals & Homes in Bremen'
])
const [MoreDestinations,setMoreDestinations_]=useState([
     0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
     21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
     40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,
     60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,
     80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
     101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,
     117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,
     133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150]);
// const [ArrayDestinations,SetArrayDestinations]=useState([])
   


    return (
        <>
        <div className="w-full">
            {/* Header site map */}
            <div className="flex mx-auto justify-center">
            <div className="w-11/12 flex justify-between h-16 items-center bg-white ">
                <a href="/">
                    <LogoHeaderAirbnb/>
                </a>
                <div className="text-sm flex  items-center justify-evenly font-sans">
                    <div className="mr-6">Trở thành Host</div>
                    <div className="mr-6">Đăng ký</div>
                    <div className="mr-2">Đăng nhập</div>
                </div>
             </div>
        </div>
        {/* List site maps */}
        <div className="w-11/12 mx-auto mt-4">
                <div className=" flex flex-wrap text-[#515151] ">
                    {listSiteMap.map((item,key)=>{
                return <div 
                    className={`grow pr-10 font-sans py-4 text-sm font-medium`} key={item}>
                    <a href="/" className={`${key==0?"border-b-2 border-black/70  pb-4":" "}`}
                    >{item}
                    </a>
                </div>
            })}
            </div>
        </div>
        {/*  Top Destinations*/}
       <hr className="w-11/12 mx-auto"></hr>
        <div className="text-2xl font-[540] w-11/12 mx-auto mt-8 mb-6">
            <h3>Top Destinations</h3>
        </div> 
        <div className="w-11/12 mx-auto text-sm">
            <div className="grid grid-cols-4 max-md:grid-cols-1 gap-x-5">
                {ListDestination.map((item)=>{
                    return <div 
                    className="mb-5 underline"
                    key={item}>{item}</div>
                })        
            }
            </div>
        </div>
        {/* More Destinations */}
            <div className="w-11/12 mx-auto text-2xl font-[540] mt-5 mb-6">
                <h3>More Destinations</h3>
            </div>
            <div className="w-11/12 mx-auto text-sm">
                <div className="flex flex-wrap text-[#0c0b0b] ">
                {
                    MoreDestinations.map((item,key)=>{
                        return <div
                        className="underline flex justify-center w-[4.5%]  font-sans py-4 text-center"
                        key={key}
                        >{item}</div>
                    })
                }
                </div>
            </div>


        <div className="w-11/12 mx-auto my-16">
        <div className="flex items-center">
                <div className="mr-3 underline font-semibold text-sm">Site Map</div>
                <div className="text-xs"><IoIosArrowForward/></div>
                <div className="mr-3 ml-2 underline font-semibold text-sm">Destination</div>
                <div className="text-xs"><IoIosArrowForward/></div>
                <div className="mr-3 ml-2 text-sm" >Destination-LO-O</div>
            </div>
         </div>
                <div className="w-11/12 mx-auto bg-white  border-t-[1px]">
    <div className={`px-10 text-sm flex justify-between h-12 pt-5  items-center`}>
    <div>&#xa9; 
        <span className="hover:underline">Airbnb,Inc.All rights reserved </span> &#xb7;
        <span className="hover:underline">Quyền riêng tư</span>  &#xb7;
        <span className="hover:underline"> Điều khoản</span> &#xb7;
        <Link to='/sitemaps/v2/' > <span className="hover:underline"> Bản đồ địa điểm</span></Link>
    </div>
    <div className={`flex  `}> 
                    <div className=" flex items-center">
                    <span className="ml-4 mr-4 text-base"><FaFacebookF/></span>
                    <span className="mr-3 text-base"><BsTwitter/></span>
                    <span className="mr-3  text-base"><ImInstagram/></span>
                   </div>
      </div>
</div>
                </div>
     </div>
        </>
    )
}
export default Sitemaps;