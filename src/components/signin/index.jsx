import React from 'react'
import "./index.css";
import logoForm from "../../assests/images/logo-form.png";
function SignIn() {
    return (
        <>
            <section className="form-sign-in-up">
                <div className="form-sign-in">
                    <div className="logo-form">
                        <img src={logoForm} className="img"alt=""/>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="sign-in-username">Tên Đăng Nhập</label>
                            <input type="text" className="form-control" id="sign-in-username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sign-in-pass">Mật Khẩu</label>
                            <input type="text" className="form-control" id="sign-in-pass"/>
                        </div>
                        <button className="btn">Đăng nhập</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default SignIn
