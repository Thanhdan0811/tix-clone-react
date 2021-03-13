import React from "react";
import "./index.css";
import logoCinema1 from "../../assests/images/bhd-star-cinema-logo.png"
import logoCinema2 from "../../assests/images/dcine-cinema-logo.png";
import cinema1 from "../../assests/images/bhd-star-cinema-1.jpg";

function Cinemas() {
  return (
    <>
      <section className="cinemas tix-container">
        {/* divide linear */}
        <div className="linear-divide"></div>
        <div className="cinemas-wrap">
          {/* Tabs logo */}
          <ul className="nav nav-tabs cinemas-tabs cinemas-tabs-logo" id="cinemas-tabs-logo">
            {/* Logo item */}
            <li className="nav-item">
              <a className="nav-link hover--opacity border--bottom active" data-toggle="tab" href="#name1-cinema" >
                <img src={logoCinema1} className="img img--cinema" alt=""/>
              </a>
            </li>
            {/* End Logo item */}
            {/* Logo item */}
            <li className="nav-item">
              <a className="nav-link hover--opacity border--bottom" data-toggle="tab" href="#name2-cinema" >
              <img src={logoCinema2} className="img img--cinema" alt=""/>
              </a>
            </li>
            {/* end logo item */}
          </ul>
          {/* Tabs logo content */}
          <div className="tab-content cinemas-tabs-logo-content" id="cinemas-logo-tabs-content">
            <div className="tab-pane fade show active" id="name1-cinema" >
                  {/* Tabs cinemas */}
                <ul className="nav nav-tabs cinemas-tabs cinemas-tabs-cinema" id="cinemas-tabs-cinema">
                  {/* Cinema link item */}
                  <li className="nav-item">
                    <a className="nav-link hover--opacity border--bottom active" data-toggle="tab" href="#name1-cinema1" >
                      {/* cinema item */}
                      <div className="cinema-item">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="cinema-info">
                          <p className="cinema-name"><span className="bhd">BHD Star</span> - Discovery</p>
                          <span className="cinema-address">T8, TTTM Discovery Complex 302 Cầu Giấy, Dịch Vọng, Cầu Giấy, Hà Nội</span>
                          <a className="cinema-detail">[chi tiết]</a>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* Cinema link item */}
                  <li className="nav-item">
                    <a className="nav-link hover--opacity border--bottom" data-toggle="tab" href="#name2-cinema2" >
                      <div className="cinema-item">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="cinema-info">
                          <p className="cinema-name"><span className="bhd">BHD Star</span> - Discovery</p>
                          <span className="cinema-address">T8, TTTM Discovery Complex 302 Cầu Giấy, Dịch Vọng, Cầu Giấy, Hà Nội</span>
                          <a className="cinema-detail">[chi tiết]</a>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* End cinema link item */}
                  {/* Cinema link item */}
                  <li className="nav-item">
                    <a className="nav-link hover--opacity border--bottom" data-toggle="tab" href="#name2-cinema2" >
                      <div className="cinema-item">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="cinema-info">
                          <p className="cinema-name"><span className="bhd">BHD Star</span> - Discovery</p>
                          <span className="cinema-address">T8, TTTM Discovery Complex 302 Cầu Giấy, Dịch Vọng, Cầu Giấy, Hà Nội</span>
                          <a className="cinema-detail">[chi tiết]</a>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* End cinema link item */}
                  {/* Cinema link item */}
                  <li className="nav-item">
                    <a className="nav-link hover--opacity border--bottom" data-toggle="tab" href="#name2-cinema2" >
                      <div className="cinema-item">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="cinema-info">
                          <p className="cinema-name"><span className="bhd">BHD Star</span> - Discovery</p>
                          <span className="cinema-address">T8, TTTM Discovery Complex 302 Cầu Giấy, Dịch Vọng, Cầu Giấy, Hà Nội</span>
                          <a className="cinema-detail">[chi tiết]</a>
                        </div>
                      </div>
                    </a>
                  </li>
                  {/* End cinema link item */}
                </ul>
                {/* Tabs cinemas content*/}
                <div className="tab-content cinemas-tabs-cinema-content" id="cinemas-logo-tabs-content">
                  <div className="tab-pane fade show active" id="name1-cinema1" >
                    {/* film item  */}
                    <div className="cinema-film-item border--bottom">
                      <div className="film-collapse"  data-toggle="collapse" data-target="#id-1">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="film-collapse-info">
                          <p class="film-name"> <span class="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                          <p className="film-time">
                            117 phút - TIX 9 - IMDb 0
                          </p>
                        </div>
                      </div>
                      <div className="collapse show film-schedules" id="id-1">
                        <div className="schedules-wrap">
                          <h3>2D Digital</h3>
                          <div className="schedules row">
                              <div className="no--padding  col-6  col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End film item */}
                    {/* film item  */}
                    <div className="cinema-film-item border--bottom">
                      <div className="film-collapse"  data-toggle="collapse" data-target="#id-1">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="film-collapse-info">
                          <p class="film-name"> <span class="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                          <p className="film-time">
                            117 phút - TIX 9 - IMDb 0
                          </p>
                        </div>
                      </div>
                      <div className="collapse show film-schedules" id="id-1">
                        <div className="schedules-wrap">
                          <h3>2D Digital</h3>
                          <div className="schedules row">
                              <div className="no--padding  col-6  col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End film item */}
                    {/* film item  */}
                    <div className="cinema-film-item border--bottom">
                      <div className="film-collapse"  data-toggle="collapse" data-target="#id-1">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="film-collapse-info">
                          <p class="film-name"> <span class="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                          <p className="film-time">
                            117 phút - TIX 9 - IMDb 0
                          </p>
                        </div>
                      </div>
                      <div className="collapse show film-schedules" id="id-1">
                        <div className="schedules-wrap">
                          <h3>2D Digital</h3>
                          <div className="schedules row">
                              <div className="no--padding  col-6  col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End film item */}
                    {/* film item  */}
                    <div className="cinema-film-item border--bottom">
                      <div className="film-collapse"  data-toggle="collapse" data-target="#id-1">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="film-collapse-info">
                          <p class="film-name"> <span class="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                          <p className="film-time">
                            117 phút - TIX 9 - IMDb 0
                          </p>
                        </div>
                      </div>
                      <div className="collapse show film-schedules" id="id-1">
                        <div className="schedules-wrap">
                          <h3>2D Digital</h3>
                          <div className="schedules row">
                              <div className="no--padding  col-6  col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End film item */}
                    {/* film item  */}
                    <div className="cinema-film-item border--bottom">
                      <div className="film-collapse"  data-toggle="collapse" data-target="#id-1">
                        <img src={cinema1} className="img img--cinema" alt=""/>
                        <div className="film-collapse-info">
                          <p class="film-name"> <span class="common-age-type">C16</span> Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                          <p className="film-time">
                            117 phút - TIX 9 - IMDb 0
                          </p>
                        </div>
                      </div>
                      <div className="collapse show film-schedules" id="id-1">
                        <div className="schedules-wrap">
                          <h3>2D Digital</h3>
                          <div className="schedules row">
                              <div className="no--padding  col-6  col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                              <div className="no--padding  col-6 col-sm-3">
                                <a className="schedule-item">
                                      <span className="start">12:30</span>
                                      <span className="end"> ~ 14:27</span>
                                </a>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End film item */}
                  </div>
                  <div className="tab-pane fade" id="name2-cinema2" >
                    ádsadasd
                  </div>
                </div>
            </div>
            <div className="tab-pane fade" id="name2-cinema" >
              2
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cinemas;
