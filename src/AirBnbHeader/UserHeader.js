import {FaUserCircle} from 'react-icons/fa'
import {BiMenu} from "react-icons/bi"
function UserHeader(){
    return (
    <>
     <div className="pl-2 pr-2  text-[#717171] " ><BiMenu /></div>
                <div className=" before:content-[''] before:absolute before:z-10
                 before:rounded-3xl 
                 before:shadow-[-1px_1px_white] before:right-12 before:top-[78px]
                 before:w-3 before:h-3
                text-3xl text-[#717171]"
                >
                    <FaUserCircle/></div>
    </>)

}
export default UserHeader