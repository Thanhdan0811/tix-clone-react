import React from 'react'
import "./index.css";
import userImg from "../../assests/images/user-default-avarta.png";
function Checkout() {
    return (
        <>
        <section className="checkout-wrap">
            {/* Step checkout */}
            <div className="step-checkout">
                <div className="left-steps">
                    <p className="step-item">
                        <span className="step-number">01</span>
                        CHỌN GHẾ & THANH TOÁN
                    </p>
                    <p className="step-item">
                        <span className="step-number">02</span>
                        KẾT QUẢ ĐẶT VÉ
                    </p>
                </div>
                <div className="step-user">
                    <img src={userImg} className="img step--img" alt=""/>
                    <span>Dân MAN</span>
                </div>
            </div>
            {/* End step checkout */}
            {/* Checkout Info */}
            <div className="checkout-info-wrap">
                <div className="checkout-info">
                    <h3 className="total-price title">150.000 đ</h3>
                    {/* Checkout film info */}
                    <div className="checkout-film-info">
                        <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                        <p className="checkout-cinema">
                            BHD Star  - Vincom 3/2
                        </p>
                        <p className="checkout-date">
                            Thứ hai 15/03/2021 - 14:10 - RẠP 1
                        </p>
                    </div>
                    {/* End checkout film info */}
                    {/* Checkout chair */}
                    <div className="checkout-chair">
                        <p className="chairs">
                            Ghế 
                            <span className="chair"> I05, I06</span>
                        </p>
                        <p className="total-price">150.000 đ</p>
                    </div>
                    {/* End Checkout chair */}
                    {/* Checkout user info */}
                    <div className="checkout-user">
                        {/* checkout user item */}
                        <div className="checkout-user-item">
                            <label htmlFor="checkout-user-email">E-mail</label>
                            <input type="text" id="checkout-user-email" placeholder="email-user"/>
                        </div>
                        {/* end checkout user item */}
                        {/* checkout user item */}
                        <div className="checkout-user-item">
                            <label htmlFor="checkout-user-phone">Phone</label>
                            <input type="text" id="checkout-user-phone" placeholder="phone-user"/>
                        </div>
                        {/* end checkout user item */}
                        {/* checkout user item */}
                        <div className="checkout-user-item">
                            <label htmlFor="checkout-user-promotion">Mã giảm giá</label>
                            <input type="text" id="checkout-user-promotion" placeholder="Nhập tại đây"/>
                            <button className="btn btn-apply">Áp dụng</button>
                        </div>
                        {/* end checkout user item */}
                    </div>
                    {/* End checkout user info */}
                </div>
            </div>
            {/* End Checkout Info */}
        </section>  
        </>
    )
}

export default Checkout
