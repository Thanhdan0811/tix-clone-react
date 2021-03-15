import React from 'react'
// import "./index.css";
import logoForm from "../../assests/images/logo-form.png";
function SignUp() {
    return (
        <>
            <section className="form-sign-in-up">
                <div className="form-sign-in">
                    <div className="logo-form">
                        <img src={logoForm} className="img"alt=""/>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="sign-up-name">Họ tên</label>
                            <input type="text" className="form-control" id="sign-up-name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sign-up-username">Tên Đăng Nhập</label>
                            <input type="text" className="form-control" id="sign-up-username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sign-up-email">E-mail</label>
                            <input type="email" className="form-control" id="sign-up-email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sign-up-phone">Số điện thoại</label>
                            <input type="tel" className="form-control" id="sign-up-phone"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sign-up-pass">Mật Khẩu</label>
                            <input type="password" className="form-control" id="sign-up-pass"/>
                        </div>
                        <button className="btn">Đăng Ký</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignUp