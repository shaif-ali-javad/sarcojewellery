// import React, { Component } from "react";
// import "./home.css";
// import Slider from "./slider/slider.js";

// export class home extends Component {
import React, { useState } from "react";

import "./home.css";

import Slider from "./slider/slider.js";

import ScrollTrigger from "react-scroll-trigger";
import Countup from "react-countup";

import Call from "../for-all-component/social-icon/call.js";

// import animation0 from "../lottie-animation/0ierMTuVYO.json";
// import Lottie from "lottie-react";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="home-contain">
      <Slider />
      <div className="container-fluid intro" id="about">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 m-auto">
            <h1 className="chain">
              {/* <img
                data-aos="fade-down"
                className="img0"
                src={require("../lottie-animation/Animation0.gif")}
                alt=""
              /> */}
              <iframe
                className="img0"
                src="https://lottie.host/embed/26491586-42f1-4b77-84b5-8ece21a2b9be/dYnp6lGYnQ.json"
              ></iframe>
              <p data-aos="fade-right" className="f">
                A Trusted Gold
              </p>
            </h1>
            <p data-aos="fade-up" className="text-intro">
              We believe delivery on time and transparent trade policies made
              possible to achieve the important place in the business within the
              short span of time. In the competitive arena Sarco Jewellery
              obliged to satisfy its customer and suppliers.
              <br />
              <br />
              Our young, dynamic and qualified operation team to deliver
              impeccable service to the clients. This is what drives our
              organization to succeed and has drawn hundreds of prestigious
              customers to put immense trust and faith in our business.
            </p>
          </div>
        </div>
      </div>
      <section className="flex-container contain-f">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contain-cont">
                <ul className="slides">
                  <div className="box box0">
                    <i
                      data-aos="fade-down"
                      id="icon"
                      className="fa-solid fa-hand-holding-dollar"
                    ></i>
                    <h2 data-aos="fade-right" className="twitter-post-username">
                      <p className="p">Price Assurance</p>
                    </h2>
                    <p data-aos="fade-up" className="twitter-post ppp pppp">
                      We’ll match any competitors offer — our prices can’t be
                      beaten.
                    </p>
                  </div>
                  <div className="box box1">
                    <i
                      data-aos="fade-down"
                      id="icon"
                      className="fa-solid fa-square-check"
                    ></i>
                    <h2 className="twitter-post-username">
                      <p data-aos="fade-right" className="p">
                        Risk Free
                      </p>
                    </h2>
                    <p data-aos="fade-up" className="twitter-post ppp">
                      For any reason, if you’re unhappy with our payment, we’ll
                      return your jewellery at no extra cost.
                    </p>
                  </div>
                  <div className="box box2">
                    <i
                      data-aos="fade-down"
                      id="icon"
                      className="fa-solid fa-handshake"
                    ></i>
                    <h2 data-aos="fade-right" className="twitter-post-username">
                      <p className="p0">
                        <ScrollTrigger
                          onEnter={() => setCounterOn(true)}
                          onExit={() => setCounterOn(false)}
                        >
                          <div className="count0-contain">
                            {/* <p id="counter" className="count0">
                            20000
                          </p>
                          <p className="count0">+ Customers</p> */}
                            {counterOn && (
                              <Countup
                                start={969}
                                end={20000}
                                duration={2}
                                delay={0}
                                id="counter"
                                className="count0"
                              >
                                20000
                              </Countup>
                            )}
                            <p className="count0">+ Customers</p>
                          </div>
                        </ScrollTrigger>
                      </p>
                    </h2>
                    <p data-aos="fade-up" className="twitter-post ppp">
                      There’s a reason so many customers trust us, keep coming
                      back and refer their contacts.
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sign_up">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 sign-up">
              <h2 data-aos="zoom-out-right" className="mail-heading">
                mail us
              </h2>
              <form
                action="https://formsubmit.co/d00c55b4992d54184e0fefc3abe61941"
                method="POST"
                className="form0"
              >
                <input
                  className="signup-input"
                  type="message"
                  name="message"
                  value=""
                  placeholder="type your message.."
                  title="Please enter a valid email address."
                  required
                />
                <button type="submit" className="submit btn">
                  GO
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.9389731153037!2d55.29654307538427!3d25.272638277662463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzIxLjUiTiA1NcKwMTcnNTYuOCJF!5e0!3m2!1sen!2sin!4v1704888806261!5m2!1sen!2sin"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* <Lottie animationData={animation0} className="img-main-1" /> */}
      <div className="slideshow-container">
        <div className="slide-wrapper">
          <div className="slide">
            <div className="tex">
              <div className="line0">--</div> WE BUY & SELL - Gold coins, TT
              bars, Kilo bars & Scrap gold
            </div>
          </div>
          <div className="slide">
            <div className="tex">
              <div className="line0">--</div> WE BUY & SELL - Gold coins, TT
              bars, Kilo bars & Scrap gold
            </div>
          </div>
          <div className="slide">
            <div className="tex">
              <div className="line0">--</div> WE BUY & SELL - Gold coins, TT
              bars, Kilo bars & Scrap gold
            </div>
          </div>
          {/* <!-- Clone the first slide to make it infinite --> */}
          <div className="slide">
            <div className="tex">
              <div className="line0">--</div> WE BUY & SELL - Gold coins, TT
              bars, Kilo bars & Scrap gold
            </div>
          </div>
        </div>
      </div>
      <Call className="call-image" />
    </div>
  );
};

export default Home;
