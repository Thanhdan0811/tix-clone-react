import React, { useEffect } from 'react'
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
const seatsData = {
	"A" : [
		{
			typeSeat: "normal",
			seatNumber: 1,
			seatName: "A01",
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
	    ],
	"B" : [
		{
			typeSeat: "normal",
			seatNumber: 1,
			seatName: "B01",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 2,
			seatName: "B02",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 3,
			seatName: "B03",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 4,
			seatName: "B04",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 5,
			seatName: "B05",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 6,
			seatName: "B06",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 7,
			seatName: "B07",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 8,
			seatName: "B08",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 9,
			seatName: "B09",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 10,
			seatName: "B10",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 11,
			seatName: "B11",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 12,
			seatName: "B12",
			status: false,
			price: 85000,
		},
	    ],
	"C" : [
		{
			typeSeat: "normal",
			seatNumber: 1,
			seatName: "C01",
			status: true,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 2,
			seatName: "C02",
			status: true,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 3,
			seatName: "C03",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 4,
			seatName: "C04",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 5,
			seatName: "C05",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 6,
			seatName: "C06",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 7,
			seatName: "C07",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 8,
			seatName: "C08",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 9,
			seatName: "C09",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 10,
			seatName: "C10",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 11,
			seatName: "C11",
			status: false,
			price: 85000,
		},
		{
			typeSeat: "normal",
			seatNumber: 12,
			seatName: "C12",
			status: false,
			price: 85000,
		},
	    ],
	"D" : [
			{
				typeSeat: "normal",
				seatNumber: 1,
                seatName: "D01",
				status: false,
                price: 85000,
			},
			{
				typeSeat: "vip",
				seatNumber: 2,
                seatName: "D02",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 3,
                seatName: "D03",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 4,
                seatName: "D04",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 5,
                seatName: "D05",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 6,
                seatName: "D06",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 7,
                seatName: "D07",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 8,
                seatName: "D08",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 9,
                seatName: "D09",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 10,
                seatName: "D10",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 11,
                seatName: "D11",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "normal",
				seatNumber: 12,
                seatName: "D12",
				status: false,
                price: 85000,
			},
		],
	"E" : [
			{
				typeSeat: "normal",
				seatNumber: 1,
                seatName: "E01",
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 2,
                seatName: "E02",
				status: false,
                price: 85000,
			},
			{
				typeSeat: "vip",
				seatNumber: 3,
                seatName: "E03",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 4,
                seatName: "E04",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 5,
                seatName: "E05",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 6,
                seatName: "E06",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 7,
                seatName: "E07",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 8,
                seatName: "E08",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 9,
                seatName: "E09",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 10,
                seatName: "E10",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "normal",
				seatNumber: 11,
                seatName: "E11",
				status: false,
                price: 85000,
			},
			{
				typeSeat: "normal",
				seatNumber: 12,
                seatName: "E12",
				status: false,
                price: 85000,
			},
		],
	"F" : [
			{
				typeSeat: "normal",
				seatNumber: 1,
                seatName: "F01",
				status: false,
                price: 85000,
			},
			{
				typeSeat: "vip",
				seatNumber: 2,
                seatName: "F02",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 3,
                seatName: "F03",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 4,
                seatName: "F04",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 5,
                seatName: "F05",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 6,
                seatName: "F06",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 7,
                seatName: "F07",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 8,
                seatName: "F08",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 9,
                seatName: "F09",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "normal",
				seatNumber: 10,
                seatName: "F10",
				status: false,
                price: 85000,
			},
		],
	"G" : [
			{
				typeSeat: "normal",
				seatNumber: 1,
                seatName: "G01",
				status: false,
                price: 85000,
			},
			{
				typeSeat: "vip",
				seatNumber: 2,
                seatName: "G02",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 3,
                seatName: "G03",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 4,
                seatName: "G04",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 5,
                seatName: "G05",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 6,
                seatName: "G06",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 7,
                seatName: "G07",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 8,
                seatName: "G08",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "vip",
				seatNumber: 9,
                seatName: "G09",
				status: false,
                price: 95000,
			},
			{
				typeSeat: "normal",
				seatNumber: 10,
                seatName: "G10",
				status: false,
                price: 85000,
			},
		],
	"H" : [
			{
				typeSeat: "couple",
				seatNumber: 1,
                seatName: "H01, H02",
				status: false,
                price: 155000,
			},
			{
				typeSeat: "couple",
				seatNumber: 3,
                seatName: "H03, H04",
				status: false,
                price: 155000,
			},
			{
				typeSeat: "couple",
				seatNumber: 5,
                seatName: "H05, H06",
				status: false,
                price: 155000,
			},
			{
				typeSeat: "couple",
				seatNumber: 7,
                seatName: "H07, H08",
				status: false,
                price: 155000,
			},
			
		],
}

function Checkout() {
    // hooks initial
    useEffect(()=> {
        let seatWrap = document.querySelector(".seats-wrap");
        seatWrap.addEventListener("click", (e) => {
            if(!e.target.classList.contains("seat")) return;
            let seatClicked = e.target.dataset.seat;
            console.log(seatsData[seatClicked.substr(0,1)].filter((item) => item.seatName === seatClicked));

        })
    }, [])
    
    // render seats in a row
    let renderSeats = function(seatsArr) {
        return seatsArr.map((item,index)=> {
            let unselected = item.status ? " seat-selected" : "";
            if (item.typeSeat === "couple") {
                return  <div 
                            className={"seat-couple" + unselected}
                            key={item.seatName}
                        >
                            <span className="seat" data-seat={item.seatName}>{item.seatNumber}</span>
                            <span className="seat" data-seat={item.seatName}>{item.seatNumber + 1}</span>
                        </div>
            }
            return  <span 
                        className={"seat" + (item.typeSeat === "vip" ? " seat-vip" : "") + unselected} 
                        key={item.seatName}
                        data-seat={item.seatName}
                    >
                        {item.seatNumber}
                    </span>  
        })
    }
    // render all seats
    let renderAllSeats = function() {
        let seatArr = [];
        let rowSeat = Object.keys(seatsData)
        rowSeat.forEach((item, key) => {
            let rowSeat =   <div className="seats-item" key={key+item}>
                                <p className="seats-row">{item}</p>
                                <div className="seats">
                                    {renderSeats(seatsData[item])}
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
