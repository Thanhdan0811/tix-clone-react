import React from "react";
import "./index.scss";
import banner1 from "../../assests/images/banner-1.jpg";
import banner2 from "../../assests/images/banner-2.jpg";
import banner3 from "../../assests/images/banner-3.png";
import banner4 from "../../assests/images/banner-4.jpg";
import banner5 from "../../assests/images/banner-5.png";
import banner6 from "../../assests/images/banner-6.png";
import playTrailer from "../../assests/images/play-video.png";
function Banner() {
  return (
    <>
      <section className="tix-banner">
        {/* Banner img */}
        <div id="tixCarouselIndicators" className="carousel slide" data-ride="false" >
            {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#tixCarouselIndicators" data-slide-to={0} className="active" />
            <li data-target="#tixCarouselIndicators" data-slide-to={1} />
            <li data-target="#tixCarouselIndicators" data-slide-to={2} />
            <li data-target="#tixCarouselIndicators" data-slide-to={3} />
          </ol>
          {/* Contents */}
          <div className="carousel-inner">
            <div className="carousel-item active" style={{backgroundImage: "url(" + banner1 +")"}}>
                <a className="play-trailer">
                    <img src={playTrailer} alt="play btn"/>
                </a>
            </div>
            <div className="carousel-item" style={{backgroundImage: "url(" + banner2 +")"}}>
                <a className="play-trailer">
                    <img src={playTrailer} alt="play btn"/>
                </a>
            </div>
            <div className="carousel-item"  style={{backgroundImage: "url(" + banner3 +")"}}>
                <a className="play-trailer">
                    <img src={playTrailer} alt="play btn"/>
                </a>
            </div>
            <div className="carousel-item"   style={{backgroundImage: "url(" + banner4 +")"}}>
                <a className="play-trailer">
                    <img src={playTrailer} alt="play btn"/>
                </a>
            </div>
          </div>
          {/* Arrows */}
          <a className="carousel-control-prev" href="#tixCarouselIndicators" role="button" data-slide="prev" >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#tixCarouselIndicators" role="button" data-slide="next" >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* banner book */}
        <div className="banner-book tix-container d-none d-lg-flex">
            {/* films dropdown */}
            <div className="dropdown divide-line banner-book-item banner-film-dropdown">
                <button className="btn dropdown-toggle" type="button" id="banner-book-film" data-toggle="dropdown" data-display="static">
                    Phim
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            {/* cinemas dropdown */}
            <div className="dropdown divide-line banner-book-item banner-cinema-dropdown">
                <button className="btn dropdown-toggle" type="button" id="banner-book-cinema" data-toggle="dropdown" data-display="static">
                    Rạp
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            {/* date show dropdown */}
            <div className="dropdown divide-line banner-book-item banner-date-dropdown">
                <button className="btn dropdown-toggle" type="button" id="banner-book-date" data-toggle="dropdown" data-display="static">
                    Ngày Xem
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            {/* time show dropdown */}
            <div className="dropdown divide-line banner-book-item banner-time-dropdown">
                <button className="btn dropdown-toggle" type="button" id="banner-book-time" data-toggle="dropdown" data-display="static">
                    Xuất Chiếu
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            {/* buy ticket dropdown */}
            <div className="banner-book-item banner-btn-book">
                <button className="btn btn-primary" type="button">
                    MUA VÉ NGAY
                </button>
            </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
