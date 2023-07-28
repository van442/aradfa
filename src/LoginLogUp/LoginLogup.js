import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
function LoginLoup({setDisShow}) {
  return (
    <>
      <div className="  z-20 fixed top-0 bg-black bg-opacity-50 w-screen h-screen">
        <div
          className="animate-scrollLoginLogUp w-[42%] bg-white h-[90%] fixed rounded-lg 
      border-[1px]  left-2/4 translate-x-[-50%] translate-y-[-50%]
      top-2/4 "
        >
          <div className="flex h-16 items-center  ">
            <div onClick={()=>setDisShow()} className="ml-6">&#10006;</div>
            <div className="text-center font-semibold m-auto">
              Đăng nhập hoặc đăng kí
            </div>
          </div>
          <hr></hr>
          <div className=" overflow-y-scroll h-5/6">
            <div className=" w-11/12   m-auto">
              <h2 className="mt-8  text-xl font-medium leading-5">
                Chào mừng bạn dến với Airbnb
              </h2>
              <form className="mt-8  ">
                <select
                  className="h-14 border-[1px] border-gay-700 
             w-full rounded-t-lg "
                >
                  <option value="Việt Nam (+84)">Việt Nam (+84)</option>
                  <option value="1">Audi</option>
                  <option value="2">BMW</option>
                  <option value="3">Citroen</option>
                  <option value="4">Ford</option>
                  <option value="5">Honda</option>
                  <option value="6">Jaguar</option>
                  <option value="7">Land Rover</option>
                  <option value="8">Mercedes</option>
                  <option value="9">Mini</option>
                  <option value="10">Nissan</option>
                  <option value="11">Toyota</option>
                  <option value="12">Volvo</option>
                </select>
                <br></br>
                <input
                  className=" placeholder:text-[#717171]
            h-14 border-[1px] border-gay-400 mb-2 w-full rounded-b-lg 
            "
                  placeholder="Số điện thoại "
                ></input>
                <p className="text-xs text-[#222222]/[.75]">
                  Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số
                  điện thoại.Có áp dụng phí dữ liệu và phí nhắn tin Tiểu chuẩn.
                  <span className="underline font-bold text-[#222222]">
                    {" "}
                    Chính sách về quên riêng tư
                  </span>
                </p>
                <input
                  className=" mb-5 mt-2 w-full font-semibold rounded-lg py-3 text-white bg-[#cb085e] text-center"
                  type="submit"
                  value="Tiếp tục"
                ></input>
              </form>
              <div className="w-full mb-5 flex items-center ">
                <hr className="w-5/12"></hr>
                <div className=" text-xs px-6">hoặc</div>{" "}
                <hr className="w-5/12"></hr>
              </div>

              <div className=" flex mb-3 border-[1px] rounded-md border-black py-3 items-center">
                <div className="text-2xl ml-5 text-[#1877f2]">
                  <AiFillFacebook />
                </div>
                <div className=" text-sm w-full ml-[-20px] text-center">
                  Tiếp tục với Facebook
                </div>
              </div>
              <div className=" flex mb-3 border-[1px] rounded-md border-black py-3 items-center">
                <div className="text-2xl ml-5 text-[#1877f2]">
                  <FcGoogle />
                </div>
                <div className=" text-sm w-full ml-[-20px] text-center">
                  Tiếp tục với Google
                </div>
              </div>
              <div className=" flex mb-3 border-[1px] rounded-md border-black py-3 items-center">
                <div className="text-2xl ml-5 text-[#222222]">
                  <AiFillApple />
                </div>
                <div className=" text-sm w-full ml-[-20px] text-center">
                  Tiếp tục với Apple
                </div>
              </div>
              <div className=" flex mb-3 border-[1px] rounded-md border-black py-3 items-center">
                <div className="text-2xl ml-5 text-[#222222]">
                  <CiMail />
                </div>
                <div className=" text-sm w-full ml-[-20px] text-center">
                  Tiếp tục với email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginLoup;
