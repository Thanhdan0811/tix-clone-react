import React from 'react'
import "./index.css";
function Profile() {
    return (
        <>
            <section className="profile tix-container">
                <div className="profile-wrap">
                    {/* Profile info */}
                    <div className="row">
                        <div className="profile-img col-sm-3">
                            <img src="https://picsum.photos/400/600" className="img img-profile" alt="user"/>
                        </div>
                        <div className="profile-info col-sm-9">
                            <form>
                                {/* Họ tên */}
                                <div className="form-group">
                                    <label htmlFor="">Họ tên : </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                {/* end */}
                                {/* Tên tài khoản */}
                                <div className="form-group">
                                    <label htmlFor="">Tên tài khoản : </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                {/* end */}
                                {/* Tên tài khoản */}
                                <div className="form-group">
                                    <label htmlFor="">Email : </label>
                                    <input type="email" className="form-control"/>
                                </div>
                                {/* end */}
                                {/* Tên tài khoản */}
                                <div className="form-group">
                                    <label htmlFor="">Số điện thoại : </label>
                                    <input type="tel" className="form-control"/>
                                </div>
                                {/* end */}
                            </form>
                        </div>
                    </div>
                    {/* End profile info */}
                    {/* profile history */}
                    <div className="profile-history">
                        <h2>LỊCH SỬ ĐẶT VÉ</h2>
                        <table className="history-books">
                            <thead>
                                <tr>
                                    <th>Mã VÉ</th>
                                    <th>TÊN PHIM</th>
                                    <th>NGÀY ĐẶT</th>
                                    <th>GIÁ VÉ</th>
                                    <th>TÊN RẠP</th>
                                    <th>PHÒNG</th>
                                    <th>GHẾ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* end profile history */}
                </div>
            </section> 
        </>
    )
}

export default Profile
