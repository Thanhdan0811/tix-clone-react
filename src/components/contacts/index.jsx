import React from "react";
import "./index.scss"
import contactIcon1 from "../../assests/images/contact-icon-1.png";
import contactIcon2 from "../../assests/images/contact-icon-2.png";
import contactIcon3 from "../../assests/images/contact-icon-3.png";
import contactIcon4 from "../../assests/images/contact-icon-4.png";
import contactIcon5 from "../../assests/images/contact-icon-5.png";
import contactIcon6 from "../../assests/images/contact-icon-6.png";
import contactIcon7 from "../../assests/images/contact-icon-7.jpg";
import contactIcon8 from "../../assests/images/contact-icon-8.png";
import contactIcon9 from "../../assests/images/contact-icon-9.png";
import contactIcon10 from "../../assests/images/contact-icon-10.jpg";
import contactIcon11 from "../../assests/images/contact-icon-11.png";
import contactIcon12 from "../../assests/images/contact-icon-12.png";
import contactIcon13 from "../../assests/images/contact-icon-13.png";
import contactIcon14 from "../../assests/images/contact-icon-14.jpg";
import contactIcon15 from "../../assests/images/contact-icon-15.png";
import contactIcon16 from "../../assests/images/contact-icon-16.png";
import contactIcon17 from "../../assests/images/contact-icon-17.png";
import contactIcon18 from "../../assests/images/contact-icon-18.png";
import contactIcon19 from "../../assests/images/contact-icon-19.png";
import contactIcon20 from "../../assests/images/contact-icon-20.png";
import appleIcon from "../../assests/images/contact-apple-icon.png";
import androidIcon from "../../assests/images/contact-android-icon.png";
import faceIcon from "../../assests/images/contact-facebook-icon.png";
import zaloIcon from "../../assests/images/contact-zalo-icon.png";
function Contacts() {
  return (
    <>
      <section className="tixContact">
        <div className="contact-wrap tix-container">
          <div className="contact-item">
            <h4>TIX</h4>
            <a>FAQ</a>
            <a>Brand Guidelines</a>
          </div>
          <div className="contact-item">
            <h4 className="align">align</h4>
            <a>Thỏa thuận sử dụng</a>
            <a>Chính sách bảo mật</a>
          </div>
          <div className="contact-item contact-partner">
            <h4>ĐỐI TÁC</h4>
            <div className="partner-wrap">
              <div className="partner bg-w">
                <a href="https://www.cgv.vn/" target="_blank">
                  <img src={contactIcon1} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.bhdstar.vn/" target="_blank">
                  <img src={contactIcon2} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.galaxycine.vn/" target="_blank">
                  <img src={contactIcon3} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="http://cinestar.com.vn/" target="_blank">
                  <img src={contactIcon4} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="http://lottecinemavn.com/LCHS/index.aspx" target="_blank">
                  <img src={contactIcon5} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.megagscinemas.vn/" target="_blank">
                  <img src={contactIcon6} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.betacinemas.vn/home.htm" target="_blank">
                  <img src={contactIcon7} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="http://ddcinema.vn/" target="_blank">
                  <img src={contactIcon8} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://touchcinema.com/" target="_blank">
                  <img src={contactIcon9} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://cinemaxvn.com/" target="_blank">
                  <img src={contactIcon10} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://starlight.vn/" target="_blank">
                  <img src={contactIcon11} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.dcine.vn/" target="_blank">
                  <img src={contactIcon12} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://zalopay.vn/" target="_blank">
                  <img src={contactIcon13} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.payoo.vn/" target="_blank">
                  <img src={contactIcon14} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://portal.vietcombank.com.vn/" target="_blank">
                  <img src={contactIcon15} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.agribank.com.vn/" target="_blank">
                  <img src={contactIcon16} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.vietinbank.vn/" target="_blank">
                  <img src={contactIcon17} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://www.indovinabank.com.vn/" target="_blank">
                  <img src={contactIcon18} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://webv3.123go.vn/" target="_blank">
                  <img src={contactIcon19} alt="partner" />
                </a>
              </div>
              <div className="partner">
                <a href="https://laban.vn/" target="_blank">
                  <img src={contactIcon20} alt="partner" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-item mobile-app">
            <h4>MOBILE APP</h4>
            <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" target="_blank">
              <img src={appleIcon} alt="ios" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123" target="_blank">
              <img src={androidIcon} alt="android" />
            </a>
          </div>
          <div className="contact-item contact-social">
            <h4>SOCIAL</h4>
            <a href="https://www.facebook.com/tix.vn/" target="_blank">
              <img src={faceIcon} alt="FB" />
            </a>
            <a href="https://zalo.me/tixdatve" target="_blank">
              <img src={zaloIcon} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
