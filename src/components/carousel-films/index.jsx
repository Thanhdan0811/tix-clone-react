import React from "react";
import "./index.css";
import film1 from "../../assests/images/film-1.png";
import film2 from "../../assests/images/film-2.png";
import playTrailer from "../../assests/images/play-video.png";
import arrowLeft from "../../assests/images/arrow-left.png";
function SliderFilms() {
  return (
    <>
      <section className="slide-films tix-container">
          <ul className="nav nav-tabs slide-films-tab" id="slide-films-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link common-title active"
                id="home-tab"
                data-toggle="tab"
                href="#filmsOnShow"
              >
                Đang Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link common-title"
                id="profile-tab"
                data-toggle="tab"
                href="#filmsSoonShow"
              >
                Sắp Chiếu
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="filmsOnShow" >
                <div className="owl-carousel owl-theme films-on-show-carousel">
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="filmsSoonShow" >
                <div className="owl-carousel owl-theme films-soon-show-carousel">
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="item">
                        <div className="film-item">
                            <div className="film-img">
                                <img src={film2} className="img " alt=""/>
                                <a className="play-trailer">
                                    <img src={playTrailer} alt="play btn"/>
                                </a>
                            </div>
                            <div className="film-title">
                                <p className="film-name"> <span className="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                                <span className="film-time">115 phút</span>
                                <p className="film-book">
                                    <button className="btn book-btn">
                                        MUA VÉ
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default SliderFilms;
