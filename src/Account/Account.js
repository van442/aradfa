import { useCallback, useEffect, useRef } from "react"

function Account (){
const ClassAccount=useRef()
function ClassAccountComplier(){

    for(let i=0;i<ClassAccount.current.children.length;i++){
        let ItemAccountClass= ClassAccount.current.children[i];
        if(i==2){
            continue;
        }
        else if(i==0){
            ItemAccountClass.className ="py-3 mt-1 ml-2 text-sm hover:rounded-t-lg hover:bg-gray-200";
        }
  
        else {
            ItemAccountClass.className =" py-3 mt-1 ml-2 text-slate-600   hover:bg-gray-200";
            if(i==ClassAccount.current.children.length-1 ){
                if(ClassAccount.current.children[i].className.match('hover:rounded-b-lg')){
                    continue
                }
                else {

                    ItemAccountClass.className +=' hover:rounded-b-lg';
                }

            }
        }
    }
    
}
useEffect(()=>{

    ClassAccountComplier()
})
    return (
    <>
    <div ref={ClassAccount} className=" 
    text-sm  rounded-2xl font-italic w-60 h-52  
    shadow-2xl bg-slate-50  flex flex-col">
        <div>Đăng kí </div>
        <div className="">Đăng Nhập  </div>
        <hr></hr>
        <div>Cho thuê chổ ở qua Airbnb  </div>
        <div>Trợ giúp</div>
    </div>
    </>
    )
}
export default Account