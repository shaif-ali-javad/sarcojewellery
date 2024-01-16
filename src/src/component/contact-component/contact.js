import React, { Component } from "react";
import "./contact.css";

export class Contact extends Component {
  render() {
    return (
      <>
        {" "}
        <div className="top0"></div>
        <div id="body">
          <div className="container">
            <div id="content" className="full">
              <div className="entry">
                <div className="box-0">
                  <div className="text-box0">
                    <h1>contact</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- / content --> */}
          </div>
          {/* <!-- / container --> */}
        </div>
        {/* <!-- / body --> */}
        {/* <!-- -------------------------------------------------------------------------------- --> */}
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5"></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-12">
                <div className="wrapper">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 mb-5">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                              <span className="fa fa-map-marker"></span>
                            </div>
                            <div className="text">
                              <p>
                                <span>
                                  Address:
                                  <br />
                                </span>
                                <a href="">
                                  .....................................
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 phone">
                          <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                              <span className="fa fa-phone"></span>
                            </div>
                            <div className="text">
                              <p>
                                <span>
                                  Phone:
                                  <br />
                                </span>
                                <a href="tel://1234567920">
                                  .....................................
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="dbox w-100 text-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                              <span className="fa fa-paper-plane"></span>
                            </div>
                            <div className="text">
                              <p>
                                <span>
                                  Email:
                                  <br />
                                </span>
                                <a href="/cdn-cgi/l/email-protection#573e393138172e382225243e23327934383a">
                                  <span
                                    className="__cf_email__"
                                    data-cfemail="127b7c747d526b7d6760617b66773c717d7f"
                                  >
                                    info@sarcojewellery.com
                                  </span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="contact-wrap">
                        <h3 className="mb-4 text-center">
                          Get in touch with us
                        </h3>
                        <div
                          id="form-message-warning"
                          className="mb-4 w-100 text-center"
                        ></div>
                        <div
                          id="form-message-success"
                          className="mb-4 w-100 text-center"
                        ></div>
                        <form
                          action="https://formsubmit.co/d00c55b4992d54184e0fefc3abe61941"
                          method="POST"
                          className="contactForm"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols="30"
                                  rows="8"
                                  placeholder="Message"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  value="Send Message"
                                  className="btn submit-button"
                                />
                                <div className="submitting"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <iframe
          className="iframe-0"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3607.9389731153037!2d55.29654307538427!3d25.272638277662463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE2JzIxLjUiTiA1NcKwMTcnNTYuOCJF!5e0!3m2!1sen!2sin!4v1704888806261!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </>
    );
  }
}

export default Contact;
