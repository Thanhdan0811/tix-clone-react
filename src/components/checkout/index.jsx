import React from 'react'
import "./index.css";
import userImg from "../../assests/images/user-default-avarta.png";
import zaloPay from "../../assests/images/payment-zalo.jpg";
import visaPay from "../../assests/images/payment-visa.png";
import atmPay from "../../assests/images/payment-atm.png";
import tienIchPay from "../../assests/images/payment-payoo.png";
import bhdCinema from "../../assests/images/bhd-star-cinema-logo.png";
import screen from "../../assests/images/screen.png";
import filmbg from "../../assests/images/screen-film-bg.jpg";
// 
import WeekendIcon from '@material-ui/icons/Weekend';

// Seats 
const seatsData = [
	{ 
		rowSeat: "A",
		seats : [
			{
				typeSeat: "normal",
				seatNumber: 1,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 2,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 3,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 4,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 5,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 6,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 7,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 8,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 9,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 10,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 11,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 12,
				status: false,
                price: 85000,
			},
		]
	},
	{
		rowSeat: "B",
        seats : [
			{
				typeSeat: "normal",
				seatNumber: 1,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 2,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 3,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 4,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 5,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 6,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 7,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 8,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 9,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 10,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 11,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 12,
				status: false,
                price: 85000,
			},
		]
	},
	{
		rowSeat: "C",
        seats : [
			{
				typeSeat: "normal",
				seatNumber: 1,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 2,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 3,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 4,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 5,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 6,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 7,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 8,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 9,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 10,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 11,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 12,
				status: false,
                price: 85000,
			},
		]
	},
    {
        rowSeat: "D",
        seats : [
			{
				typeSeat: "normal",
				seatNumber: 1,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "vip",
				seatNumber: 2,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 3,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 4,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 5,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 6,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 7,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 8,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 9,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 10,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 11,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "normal",
				seatNumber: 12,
				status: false,
                price: 85000,
			},
		]
    },
    {
        rowSeat: "E",
        seats : [
			{
				typeSeat: "normal",
				seatNumber: 1,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 2,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "vip",
				seatNumber: 3,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 4,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 5,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 6,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 7,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 8,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 9,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 10,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "normal",
				seatNumber: 11,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 12,
				status: false,
                price: 85000,
			},
		]
    },
    {
        rowSeat: "F",
        seats : [
			{
				typeSeat: "normal",
				seatNumber: 2,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "vip",
				seatNumber: 3,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 4,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 5,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 6,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 7,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 8,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 9,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 10,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "normal",
				seatNumber: 11,
				status: false,
                price: 85000,
			},
		]
    },
    {
        rowSeat: "G",
        seats : [
			{
				typeSeat: "normal",
				seatNumber: 2,
				status: false,
                price: 85000,
			},
			{
				typeSeat: "vip",
				seatNumber: 3,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 4,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 5,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 6,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 7,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 8,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 9,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 10,
				status: false,
                price: 95000,
			},
			{
				typeSeat: "normal",
				seatNumber: 11,
				status: false,
                price: 85000,
			},
		]
    },
    {
        rowSeat: "H",
        seats : [
			{
				typeSeat: "couple",
				seatNumber: 1,
				status: false,
                price: 155000,
			},
			{
				typeSeat: "couple",
				seatNumber: 3,
				status: false,
                price: 155000,
			},
			{
				typeSeat: "couple",
				seatNumber: 5,
				status: false,
                price: 155000,
			},
			{
				typeSeat: "couple",
				seatNumber: 7,
				status: false,
                price: 155000,
			},
			
		]
    },	
]

function Checkout() {
    let renderSeats = function(seatsArr) {
        return seatsArr.map((item,key)=> {
            if (item.typeSeat === "couple") {
                return  <div className="seat-couple">
                            <span className="seat"></span>
                            <span className="seat"></span>
                        </div>
            } else {
                return <span className="seat"></span>
            }  
        })
    }
    let renderAllSeats = function() {
        let seatArr = [];
        seatsData.forEach((item, key) => {
            let rowSeat =   <div className="seats-item">
                                <p className="seats-row">{item.rowSeat}</p>
                                <div className="seats">
                                    {renderSeats(item.seats)}
                                </div>
                            </div>
            seatArr.push(rowSeat);
        })
        return seatArr;
    }
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
            {/* all-chairs */}
            <div className="cinema-chairs">
                {/* <img src={filmbg} className="img--film-bg" alt=""/> */}
                <div className="film-bg"></div>
                <div className="cinema-screen">
                    <div className="cinema-screen-info">
                        <div className="info-left">
                            <img src={bhdCinema} className="img img--screen-cinema" alt=""/>
                            <div className="screen-title">
                                <p className="name"><span className="bhd-color">BHD Star</span> - Bitexco</p>
                                <p className="date">Hôm nay - 23:35 - RẠP 7</p>
                            </div>
                        </div>
                        <div className="info-right">
                            <p>thời gian giữ ghế</p>
                            <p className="time-delay">03:00</p>
                        </div>
                    </div>
                    <img src={screen} className="img img--screen" alt=""/>
                    <div className="seats-wrap">
                        {renderAllSeats()}
                    </div>
                    <div className="explain-seats">
                        {/* explain item */}
                        <div className="explain-item">
                            <span className="seat"></span>
                            <p>Ghế thường</p>
                        </div>
                        {/* end explain item */}
                        {/* explain item */}
                        <div className="explain-item">
                            <span className="seat seat-vip"></span>
                            <p>Ghế vip</p>
                        </div>
                        {/* end explain item */}
                        {/* explain item */}
                        <div className="explain-item">
                            <span className="seat seat-couple"></span>
                            <p>Ghế đôi</p>
                        </div>
                        {/* end explain item */}
                        {/* explain item */}
                        <div className="explain-item">
                            <span className="seat seat-selected"></span>
                            <p>Ghế đã chọn</p>
                        </div>
                        {/* end explain item */}
                        {/* explain item */}
                        <div className="explain-item">
                            <span className="seat seat-on-select"></span>
                            <p>Ghế đang chọn</p>
                        </div>
                        {/* end explain item */}
                    </div>
                </div>
            </div>
            {/* end all chairs */}
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
                    {/* checkout payments */}
                    <div className="checkout-payments">
                        <h3>Hình thức thanh toán</h3>
                        <div className="payment-methods">
                            {/* Method item */}
                            <div className="payment-method-item">
                                <input type="radio" name="method"/>
                                <img src={zaloPay} className="img img--payment" alt=""/>
                                <p className="payment-intro">
                                    Thanh toán qua ZaloPay
                                </p>
                            </div>
                            {/* end Method item */} 
                            {/* Method item */}
                            <div className="payment-method-item">
                                <input type="radio" name="method"/>
                                <img src={visaPay} className="img img--payment" alt=""/>
                                <p className="payment-intro">
                                    Visa, Master, JCB
                                </p>
                            </div>
                            {/* end Method item */} 
                            {/* Method item */}
                            <div className="payment-method-item">
                                <input type="radio" name="method"/>
                                <img src={atmPay} className="img img--payment" alt=""/>
                                <p className="payment-intro">
                                    Thẻ ATM nội địa
                                </p>
                            </div>
                            {/* end Method item */} 
                            {/* Method item */}
                            <div className="payment-method-item">
                                <input type="radio" name="method"/>
                                <img src={tienIchPay} className="img img--payment" alt=""/>
                                <p className="payment-intro">
                                    Thanh toán tại cửa hàng tiện ích
                                </p>
                            </div>
                            {/* end Method item */} 
                        </div>
                    </div>
                    {/* end checkout payments */}
                    {/* book ticket */}
                    <div className="book-ticket">
                        <div className="book-note">
                            <p className="note">
                                Vé đã mua không thể đổi hoặc hoàn tiền 
                                Mã vé sẽ được gửi qua tin nhắn <span>ZMS</span>
                                (tin nhắn Zalo) và <span>Email</span> đã nhập
                            </p>
                        </div>
                        <button className="btn btn-book-ticket">
                            Đặt Vé
                        </button>
                    </div>
                    {/* end book ticket */}
                </div>
            </div>
            {/* End Checkout Info */}
        </section>  
        </>
    )
}

export default Checkout
