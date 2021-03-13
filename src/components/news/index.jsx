import React from "react";
import "./index.css";
import news1 from "../../assests/images/news-1.png";
import news2 from "../../assests/images/news-2.jpg";
import news3 from "../../assests/images/news-3.png";
import likeImg from "../../assests/images/like.png";
import newsSmall1 from "../../assests/images/news-small-1.png"
import newsSmall2 from "../../assests/images/news-small-2.png"
import newsSmall3 from "../../assests/images/news-small-3.png"
import commentImg from "../../assests/images/comment.png";
function News() {
  return (
    <>
      <section className="tixNews">
        <div className="news-wrap tix-container">
          <div className="linear-divide"></div>
          <ul className="nav nav-tabs newsTab" id="newsTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link commn-title active"
                id="home-tab"
                data-toggle="tab"
                href="#news24h"
                role="tab"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link commn-title"
                id="profile-tab"
                data-toggle="tab"
                href="#newsReview"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link commn-title"
                id="contact-tab"
                data-toggle="tab"
                href="#newsPromo"
                role="tab"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
          <div className="tab-content newsTabContent" id="newsTabContent">
            <div
              className="tab-pane fade show active"
              id="news24h"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="news-top">
                <div className="news-item top-left">
                  <img src={news1} alt="news" />
                  <div className="news-info">
                    <h2 className="title">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </h2>
                    <p className="intro">
                      Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống
                      ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai
                      trương tại 360 Giải Phóng!
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src={likeImg} alt="like" />
                        <span>0</span>
                      </p>
                      <p className="comment">
                        <img src={commentImg} alt="comment" />
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="news-item top-right">
                  <img src={news1} alt="news" />
                  <div className="news-info">
                    <h2 className="title">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công chiếu{" "}
                    </h2>
                    <p className="intro">
                      Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                      lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé.
                      Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ
                      đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng
                      của tác phẩm.{" "}
                    </p>
                    <div className="social">
                      <p className="like">
                        <img src={likeImg} alt="like" />
                        <span>1</span>
                      </p>
                      <p className="comment">
                        <span>
                          <img src={commentImg} alt="comment" />
                        </span>
                        <span>0</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news-bot">
                <div className="bot-item bot-left">
                  <div className="news-item top-left">
                    <img src={news1} alt="news" />
                    <div className="news-info">
                      <h2 className="title">
                        “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                      </h2>
                      <p className="intro">
                        Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống
                        ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai
                        trương tại 360 Giải Phóng!
                      </p>
                      <div className="social">
                        <p className="like">
                          <img src={likeImg} alt="like" />
                          <span>0</span>
                        </p>
                        <p className="comment">
                          <img src={commentImg} alt="comment" />
                          <span>0</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="news-item top-right">
                    <img src={news2} alt="news" />
                    <div className="news-info">
                      <h2 className="title">
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công chiếu{" "}
                      </h2>
                      <p className="intro">
                        Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập
                        câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng
                        vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội
                        tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn
                        tượng của tác phẩm.{" "}
                      </p>
                      <div className="social">
                        <p className="like">
                          <img src={likeImg} alt="like" />
                          <span>1</span>
                        </p>
                        <p className="comment">
                          <span>
                            <img src={commentImg} />
                          </span>
                          <span>0</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bot-item bot-right">
                  {/* Small Items */}
                  <div className="news-small-item">
                    <img src={newsSmall1} alt="news" />
                    <p>
                      {" "}
                      Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng
                      đầu doanh thu tại Hàn Quốc mùa dịch
                    </p>
                  </div>
                  {/* Small Items */}
                  <div className="news-small-item">
                    <img src={newsSmall2} alt="news" />
                    <p>
                      {" "}
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </p>
                  </div>
                  {/* Small Items */}
                  <div className="news-small-item">
                    <img src={newsSmall3} alt="news" />
                    <p>
                      {" "}
                      Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng
                      vé' xứ Hàn
                    </p>
                  </div>
                  {/* Small Items */}
                  <div className="news-small-item">
                    <img src={newsSmall2} alt="news" />
                    <p>
                      6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình
                      đám nhất Hollywood
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="newsReview"
              role="tabpanel"
              aria-labelledby="profile-tab"
            ></div>
            <div
              className="tab-pane fade"
              id="newsPromo"
              role="tabpanel"
              aria-labelledby="contact-tab"
            ></div>
          </div>
          <div className="showMore">
            <button type="button">XEM THÊM</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
