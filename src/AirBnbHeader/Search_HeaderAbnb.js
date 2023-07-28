import {BiSearchAlt2} from 'react-icons/bi'
function Search_HeaderAbnb(){
    return (
        <>
                <div className="lg:w-5/12 xl:w-4/12  md:w-2/4 ml-20  
                mb-2 rounded-3xl shadow-md text-sm  flex
                 h-[45px] items-center  border-solid
                  border-zinc-300  border-[1px] ">
                <div className="w-full pl-6 pr-6  border-gray-300">Địa điểm bất kỳ</div>
                <div className="w-full pl-4 pr-2 border-l border-r border-gray-300" >Tuần bất kỳ</div>
                <div className="flex w-full justify-end mr-2 ">
                    <div className=" my-auto text-[#717171]">Thêm Khách</div>
                    <div className=" flex items-center justify-center ml-1 w-7 h-7 text-lg rounded-3xl  text-white bg-[#ff385c]">
                        <BiSearchAlt2/>
                    </div>
                 </div>           
                </div>
        </>
    )
}
export default Search_HeaderAbnb
