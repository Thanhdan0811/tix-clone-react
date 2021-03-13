import React, { useState } from 'react'
import tix from "../../assests/images/tix-logo.png";
import userAvarta from "../../assests/images/user-default-avarta.png";
import locationIcon from "../../assests/images/location-header.png";
import arrowLeft from "../../assests/images/arrow-left.png";
import menuMobile from "../../assests/images/header-menu-mobile.png";
import "./index.css";
function Header() {

    const [location, setLocation] = useState("");
    const [toggleNav, setToggleNav] = useState("")
    let changeProvince = (e) => {
        if(!e.target.classList.contains("dropdown-item")) return;
        let btnToggle = e.currentTarget.previousElementSibling;
        setLocation(e.target.innerHTML);        
    } 

    let openProvinces = (e) => {
        e.currentTarget.classList.remove("active");
        if(e.target.classList.contains("province-item"))
        setLocation(e.target.innerHTML);
    }

    let toggleNavMobile = (e) => {
        console.log("kjhkjdsa")
        e.stopPropagation();
        if(e.currentTarget.dataset.value === "open") 
            setToggleNav("active");
        if(e.target.classList.contains("header-mobile"))
            setToggleNav("");
        if(e.currentTarget.dataset.value === "close")
            setToggleNav("");
    }

    return (
        <>
            <header className="header">
                <div className="header-wrap d-flex px-3">
                    {/* Logo */}
                    <div className="header-logo">
                       <a className="logo-link">
                        <img src={tix} alt="logo" className="img img--logo"/>
                       </a>
                    </div>
                    {/* Nav */}
                    <nav className="header-nav d-none d-md-block">
                        <a href="films" className="hover--color nav-item">Lịch Chiếu</a>
                        <a href="cinemas" className="hover--color nav-item">Cụm rạp</a>
                        <a href="news" className="hover--color nav-item">Tin tức</a>
                        <a href="app" className="hover--color nav-item">Ứng dụng</a>
                    </nav>
                    {/* Users info */}
                    <div className="header-user d-none d-md-flex">
                        {/* User name */}
                        <a className="user divide-line">
                            <img src={userAvarta} alt="avarta" className="img img--user"/>
                            <span className="user-name">Đăng nhập</span>
                        </a>
                        {/* province */}
                        <div className="dropdown dropdown--header">
                            <img src={locationIcon} className='img img--location' alt="location"/>
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                               { location || "Hồ Chí Minh" }
                            </button>
                            <div className="dropdown-menu" onClick={changeProvince}>
                                <a className="dropdown-item">Hồ Chí Minh</a>
                                <a className="dropdown-item">Hà Nội</a>
                                <a className="dropdown-item">Đà Nẵng</a>
                                <a className="dropdown-item">Hải Phòng</a>
                                <a className="dropdown-item">Biên Hòa</a>
                                <a className="dropdown-item">Nha Trang</a>
                                <a className="dropdown-item">Bình Dương</a>
                                <a className="dropdown-item">Phan Thiết</a>
                                <a className="dropdown-item">Hạ Long</a>
                                <a className="dropdown-item">Cần Thơ</a>
                                <a className="dropdown-item">Vũng Tàu</a>
                                <a class="dropdown-item">Nha Trang</a>
                                <a class="dropdown-item">Quy Nhơn</a>
                                <a class="dropdown-item">Huế</a>
                                <a class="dropdown-item">Long Xuyên</a>
                                <a class="dropdown-item">Thái Nguyên</a>
                                <a class="dropdown-item">Buôn Ma Thuột</a>
                                <a class="dropdown-item">Bắc Giang</a>
                                <a class="dropdown-item">Bến Tre</a>
                                <a class="dropdown-item">Việt Trì</a>
                                <a class="dropdown-item">Ninh Bình</a>
                                <a class="dropdown-item">Thái Bình</a>
                                <a class="dropdown-item">Vinh</a>
                                <a class="dropdown-item">Bảo Lộc</a>
                                <a class="dropdown-item">Đà Lạt</a>
                                <a class="dropdown-item">Trà Vinh</a>
                                <a class="dropdown-item">Yên Bái</a>
                                <a class="dropdown-item">Kiên Giang</a>
                                <a class="dropdown-item">Vĩnh Long</a>
                                <a class="dropdown-item">Cà Mau</a>
                                <a class="dropdown-item">Hậu Giang</a>
                                <a class="dropdown-item">Tây Ninh</a>
                                <a class="dropdown-item">Tuyên Quang</a>
                                <a class="dropdown-item">Thanh Hóa</a>
                                <a class="dropdown-item">Nam Định</a>
                                <a class="dropdown-item">Hải Dương</a>
                                <a class="dropdown-item">Gia Lai</a>
                                <a class="dropdown-item">Hà Tĩnh</a>
                                <a class="dropdown-item">Phú Yên</a>
                                <a class="dropdown-item">Bạc Liêu</a>
                                <a class="dropdown-item">Long An</a>
                                <a class="dropdown-item">Đồng Thới</a>
                                <a class="dropdown-item">Hà Nam</a>
                                <a class="dropdown-item">Bắc Ninh</a>
                                <a class="dropdown-item">Quảng Trị</a>
                                <a class="dropdown-item">Kon Tum</a>
                                <a class="dropdown-item">Sóc Trăng</a>
                                <a class="dropdown-item">Sơn La</a>
                                <a class="dropdown-item">Lạng Sơn</a>
                                <a class="dropdown-item">Quảng Ngãi</a>
                                <a class="dropdown-item">Mỹ Tho</a>
                                <a class="dropdown-item">Đồng Tháp</a>
                                <a class="dropdown-item">Hưng Yên</a>
                            </div>
                        </div>
                    </div>
                    {/* Menu mobile */}
                    <a className="menu-mobile d-md-none" onClick={toggleNavMobile} data-value="open">
                        <img src={menuMobile} alt="menu" className="img img--menuMobile"/>
                    </a>
                    <div className={"header-mobile " + toggleNav} onClick={toggleNavMobile}>
                        <ul className="mobile-nav">
                            <li className="nav-item">
                                <a className="user divide-line">
                                    <img src={userAvarta} alt="avarta" className="img img--user"/>
                                    <span className="user-name">Đăng nhập</span>
                                </a>
                                <img src={arrowLeft} alt="arrow" onClick={toggleNavMobile} className="img img--closeMobile" data-value="close"/>
                            </li>
                            <li className="nav-item">
                                <a >Lịch Chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a >Cụm rạp</a>
                            </li>
                            <li className="nav-item">
                                <a >Tin Tức</a>
                            </li>
                            <li className="nav-item">
                                <a >Ứng Dụng</a>
                            </li>
                            <li className="nav-item" onClick={(e)=>{e.currentTarget.parentElement.nextElementSibling.classList.add("active")}}>
                                <a className="">{location || "Hồ Chí Minh"}</a>
                            </li>
                        </ul>
                        <div className="mobile-provinces" onClick={openProvinces}>
                            <div className="provinces-wrap">
                                <a className="province-item">Hồ Chí Minh</a>
                                <a className="province-item">Hà Nội</a>
                                <a className="province-item">Đà Nẵng</a>
                                <a className="province-item">Hải Phòng</a>
                                <a className="province-item">Biên Hòa</a>
                                <a className="province-item">Nha Trang</a>
                                <a className="province-item">Bình Dương</a>
                                <a className="province-item">Phan Thiết</a>
                                <a className="province-item">Hạ Long</a>
                                <a className="province-item">Cần Thơ</a>
                                <a className="province-item">Vũng Tàu</a>
                                <a class="province-item">Nha Trang</a>
                                <a class="province-item">Quy Nhơn</a>
                                <a class="province-item">Huế</a>
                                <a class="province-item">Long Xuyên</a>
                                <a class="province-item">Thái Nguyên</a>
                                <a class="province-item">Buôn Ma Thuột</a>
                                <a class="province-item">Bắc Giang</a>
                                <a class="province-item">Bến Tre</a>
                                <a class="province-item">Việt Trì</a>
                                <a class="province-item">Ninh Bình</a>
                                <a class="province-item">Thái Bình</a>
                                <a class="province-item">Vinh</a>
                                <a class="province-item">Bảo Lộc</a>
                                <a class="province-item">Đà Lạt</a>
                                <a class="province-item">Trà Vinh</a>
                                <a class="province-item">Yên Bái</a>
                                <a class="province-item">Kiên Giang</a>
                                <a class="province-item">Vĩnh Long</a>
                                <a class="province-item">Cà Mau</a>
                                <a class="province-item">Hậu Giang</a>
                                <a class="province-item">Tây Ninh</a>
                                <a class="province-item">Tuyên Quang</a>
                                <a class="province-item">Thanh Hóa</a>
                                <a class="province-item">Nam Định</a>
                                <a class="province-item">Hải Dương</a>
                                <a class="province-item">Gia Lai</a>
                                <a class="province-item">Hà Tĩnh</a>
                                <a class="province-item">Phú Yên</a>
                                <a class="province-item">Bạc Liêu</a>
                                <a class="province-item">Long An</a>
                                <a class="province-item">Đồng Thới</a>
                                <a class="province-item">Hà Nam</a>
                                <a class="province-item">Bắc Ninh</a>
                                <a class="province-item">Quảng Trị</a>
                                <a class="province-item">Kon Tum</a>
                                <a class="province-item">Sóc Trăng</a>
                                <a class="province-item">Sơn La</a>
                                <a class="province-item">Lạng Sơn</a>
                                <a class="province-item">Quảng Ngãi</a>
                                <a class="province-item">Mỹ Tho</a>
                                <a class="province-item">Đồng Tháp</a>
                                <a class="province-item">Hưng Yên</a>
                            </div>
                        </div>                    
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header
