import React, { Component } from "react";
import "./about.css";

export class About extends Component {
  render() {
    return (
      <>
        <div className="top0"></div>
        <div id="body">
          <div className="container">
            <div id="content" className="full">
              <div className="entry">
                <div className="height"></div>
                <div className="box0"></div>
                <div className="box1">
                  <div className="img-box1">
                    <img
                      src={require("../img/red-frame.jpg")}
                      className="img-0"
                      alt=""
                    />
                  </div>
                  <div className="text-box1 text-box-0">
                    <h2>ABOUT US</h2>
                    <div className="iner-box"></div>
                    <p className="line">
                      Sarco Jewellery is a trusted name in the industry for the
                      past many years and the leading precious metals trading
                      company in Dubai. The team has been diligently trained in
                      the art of identifying, testing and analyzing precious
                      metals. A highly reliable service provider of accurate
                      evaluation and substantial. Sarco also offers quality gold
                      bars, gold coins and Jewellery bars. Meeting the
                      increasing demand of regional and international markets,
                      Sarco supplies the finest precious metals to our clients
                      with very friendly personal assistance. Sarco unveils
                      transparent physical Jewellery trading activity and
                      provides the most rewarding trading opportunities in
                      precious metals in UAE. Easy, trustworthy and hassle free
                      processing steps sets Sarco Jewellery a cut above the
                      rest.
                    </p>
                  </div>
                  <div className="text-box1">
                    <h2>TRADE RESPONSIBILITY</h2>
                    <div className="iner-box"></div>
                    <p>
                      With years of expertise in precious metals trading, Sarco
                      Jewellery guarantees our customers a wide array of
                      products and services.
                    </p>
                  </div>
                  <div className="text-box1">
                    <h2>VISION</h2>
                    <div className="iner-box"></div>
                    <p>
                      Our company is having vision of expanding its presence
                      very soon in the refinery segment with own brand named as
                      Sarco Jewellery. In order to serve you better and reach a
                      wider network, we have focused to launch our outlets all
                      over the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- / content --> */}
          </div>
          {/* <!-- / container --> */}
        </div>
        {/* <!-- / body --> */}
      </>
    );
  }
}

export default About;
