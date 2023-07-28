export default function SupportFooter({HandleHideRS,SignX}){

    return (
        <>
        <div className={`animate-SupportSource   ${SignX==false?'bg-[#f7f7f7] pt-4 pb-5':'bg-white'} h-2/4 rounded-t-2xl  w-full`}>
           {SignX==false ? '':<div onClick={HandleHideRS} className="select-none cursor-auto absolute z-10  mt-4 ml-6 ">X</div>}
            <div className="grid  mx-28 mt-8 h-2/4 w-4/5  grid-cols-4 gap-2">
                <div name='Support  '>
                    <h3 className="FontStyleSupport_h3">Hỗ Trợ</h3>
                    <p className="  FontStyleSupport_P">Trung tâm hỗ trợ giúp</p>
                    <p className="  FontStyleSupport_P">AirCover</p>
                    <p className="  FontStyleSupport_P">hỗ trợ khuyết tật</p>
                    <p className=" FontStyleSupport_P">Các tùy chọn hủy</p>
                    <p className=" FontStyleSupport_P">Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</p>
                    <p className="  FontStyleSupport_P">Báo cáo lo ngại của hàng xóm</p>
                </div>
                <div name='Public'>
                <h3 className=" FontStyleSupport_h3">Cộng đồng</h3>
                    <p className=" FontStyleSupport_P" >Airbnb.org nhà ở cứu trợ</p>
                    <p className="  FontStyleSupport_P" >Chống phân biệt đối xử</p>
                </div>
                <div name='WelcomeClient'>
                <h3 className="FontStyleSupport_h3">Đón tiếp khách</h3>
                    <p className=" FontStyleSupport_P">Cho thuê nhà trên Airbn</p>
                    <p className="  FontStyleSupport_P">Airbn cho chủ nhà</p>
                    <p className="  FontStyleSupport_P">Xem tài nguyên đón tiếp khách</p>
                    <p className="  FontStyleSupport_P">Đón tiếp khác có trách nhiệm</p>
                </div>
                <div name='Airbnb'>
                <h3 className="FontStyleSupport_h3">Airbnb</h3>
                    <p className="  FontStyleSupport_P">Trang tin tức</p>
                    <p className="  FontStyleSupport_P">Tìm hiểu các tính năng mới</p>
                    <p className="  FontStyleSupport_P">Thư ngỏ từ các nhà sáng lập</p>
                    <p className="  FontStyleSupport_P">Cơ hội nghề nghiệp</p>
                    <p className="  FontStyleSupport_P">Nhà đầu tư</p>
                </div>
            </div>
        </div>

        </>
    )


}