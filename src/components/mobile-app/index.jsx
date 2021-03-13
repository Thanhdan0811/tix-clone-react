import React from 'react'
import "./index.css";
import appMobile from "../../assests/images/app-mobile-img.png"
import appSlide1 from "../../assests/images/app-slide-1.jpg";
import appSlide2 from "../../assests/images/app-slide-2.jpg";
import appSlide3 from "../../assests/images/app-slide-3.jpg";
import appSlide4 from "../../assests/images/app-slide-4.jpg";
import appSlide5 from "../../assests/images/app-slide-5.jpg";
import appSlide6 from "../../assests/images/app-slide-6.jpg";
import appSlide7 from "../../assests/images/app-slide-7.jpg";
import appSlide8 from "../../assests/images/app-slide-8.jpg";
import appSlide9 from "../../assests/images/app-slide-9.jpg";
function MobileApp() {
    return (
        <>
            <section className="tixApp">
                <div className="tixApp-wrap tix-container">
                    <div className="app-item app-left">
                    <h1>Ứng dụng tiện lợi dành cho <br />người yêu điện ảnh</h1>
                    <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <button type="button">App miễn phí - Tải về ngay!</button>
                    <p className="down">
                        TIX có hai phiên bản
                        <a href="#radom">iOS</a> &amp;&nbsp;
                        <a href="#random">Android</a>
                    </p>
                    </div>
                    <div className="app-item app-right">
                        <div className="phone-img">
                            <img src={appMobile} alt="mobile img" />
                            <div className="slide-img">
                                <div className="tixAppCarousel owl-carousel owl-theme">
                                    <div className="item"><img src={appSlide1} alt="img" /></div>
                                    <div className="item"><img src={appSlide2} alt="img" /></div>
                                    <div className="item"><img src={appSlide3} alt="img" /></div>
                                    <div className="item"><img src={appSlide4} alt="img" /></div>
                                    <div className="item"><img src={appSlide5} alt="img" /></div>
                                    <div className="item"><img src={appSlide6} alt="img" /></div>
                                    <div className="item"><img src={appSlide7} alt="img" /></div>
                                    <div className="item"><img src={appSlide8} alt="img" /></div>
                                    <div className="item"><img src={appSlide9} alt="img" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MobileApp
