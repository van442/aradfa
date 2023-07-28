import { airbnb } from "../svg/index.js";
function LogoHeaderAirbnb(){
    return (
        <>
        <div className=" flex self-center ">
            <div className="w-10   h-10">
            <img className="w-full h-full" src={airbnb} alt="text"/></div>
            <div className="max-lg:hidden text-[#ff385c] text-xl font-semibold ">
                <strong>airbnb</strong>
            </div>
        </div>
        </>
    )
}
export default LogoHeaderAirbnb