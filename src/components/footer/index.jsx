import React from 'react';
import "./index.scss";
import zionLogo from "../../assests/images/footer-zion-logo.jpg";
import thongbaoImg  from "../../assests/images/footer-thongbao-img.png";
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-wrap tix-container">
                        <div className="footer-item footer-zion"><img src={zionLogo} alt="zion" /></div>
                        <div className="footer-item footer-about">
                            <h4>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h4>
                            <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020  do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                            <p>Số Điện Thoại (Hotline): 1900 545 436 <br /> Email:  <a href="#email">support@tix.vn</a></p>
                        </div>
                        <div className="footer-item footer-baohanh"><a href="#baohanh"><img src={thongbaoImg} alt /></a></div>
                </div>
            </footer>
        </>
    )
}

export default Footer
