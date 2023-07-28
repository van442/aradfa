import FindOutMore from "./Header/FindOutMore";
import Footer from "./Footer/Footer";
import HeaderAirBnb from "./AirBnbHeader/HeaderAirBnb";
import DisplayMap from "./DisplayMap/DisplayMap";
import Price_VAT from "./Price_VAT/Price_Tax";
import Main from "./MainPost/Main";
import Filter  from "./Filter/Filter";
import GoogleMap  from './GoogleMap/GoogleMap'

//-----------------------------useReactjs
import { 
  useEffect,
   useRef, 
   useState 
  } from "react";
import {
   useDispatch
 } from "react-redux";
import {
  WidthResponsiveInner
} from "./Store_Fn/WidthResponsive";

function IndexAirbnb() {
  // get Val Responsive
  const [ValInner, SetValInner] = useState([{'InnerWidth':window.innerWidth},{'InnerHeight':window.innerHeight}]);
  useEffect(() => {
    window.addEventListener("resize", updateWindowInner);
  });
  const dispatch=useDispatch();

  useEffect(() => {
     dispatch(WidthResponsiveInner(ValInner))
    // console.log(ValInner)
  },[ValInner]);

  function updateWindowInner() { 

    SetValInner([{'InnerWidth':window.innerWidth},{'InnerHeight':window.innerHeight}]);
  }

  useEffect(() => {
    document.title = "Nhà nghỉ dưỡng & Căn hộ cao cấp";
  }, []);

  // thực hiện true hoặc false để đóng  thể
  const [show, setShow] = useState(false);
  // đây là giá trị animaiton thự hiện mỗi lần đóng thẻ
  //const [animate1,setAnimate1]=useState('wiggle');
  // đây là function mỗi lần thực hiện
  const RefDiv = useRef(null);
  const setUpAnimation = () => {
    if (show === true) {
      console.log(RefDiv.current);
      console.log(RefDiv.current.className);
      RefDiv.current.className = "animate-Hwiggle";
      console.log(RefDiv.current);
    }
  };
  const handleShowl = () => {
    //set thuc hien animation thay đôi aniation là Hwiggle (nghĩa là  scalse (1-0))

    //đợi khoản 3 giây thực hiện animaiton rồi setShow dang false
    if (show == true) {
      setUpAnimation();
      const promise1 = new Promise(() => {
        setTimeout(() => {
          setShow(false);
        }, 895);
      });
    } else {
      setUpAnimation();
      setShow(true);
    }
  };
  const [showMap,SetShowMap]=useState(false);
  const DisplayMapP=()=>{
    SetShowMap(!showMap)
    console.log('map')
  }

  return (
    <div>

      <FindOutMore />
      <HeaderAirBnb />
       <Price_VAT />
      {showMap==false ?<Main />:<GoogleMap/>}

       <DisplayMap DisplayMapP={DisplayMapP}  />  
  
      {/* <Filter/> */}
      <Footer/>
    </div>
  );
}

export default IndexAirbnb;
