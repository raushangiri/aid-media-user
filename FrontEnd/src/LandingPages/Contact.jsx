import React from "react";

import "./CSS/homePage.css";
import { HeaderCard, ContactCards, SlidingBox } from "./Cards";
import Navbar, { MainNavbar } from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <MainNavbar />
      <HeaderCard
        header="Terms and Conditions"
        path="HOME  > TERMS AND CONDITIONS"
      />

      <div className="row ">
        <div className="col-sm-12  ">
          <div className="row contact_main_div ">
            <div className="col-sm-1"></div>
            <div
              className="col-sm-10  py-5 "
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
              }}
            >
              <div className="row">
                <div className="col-sm-12">
                  <h1
                    className=" text-center py-5"
                    style={{
                      fontSize: 35,
                      fontWeight: "bold",
                    }}
                  >
                    We’d Love To Help You
                  </h1>
                  <p className="fs-3 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae dolor perspiciatis at facilis, laudantium autem
                    eos alias vitae laboriosam ipsam!
                  </p>

                  <div className="circles_div r_padding">
                    <div className="circles"></div>
                    <div className="circles"></div>
                    <div className="circles circle_middel"></div>
                    <div className="circles"></div>
                    <div className="circles"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div
                    className=" row pt-5"
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <ContactCards />
                    <ContactCards />
                    <ContactCards />
                  </div>
                </div>
              </div>

              <div className="row py-5">
                <div className="col-sm012">
                  <p className="fs-3 text-center">
                    Chat with a live expert to answer your questions, Live Chat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>

      <div className="contact_from_con mb-5">
        <div className="left_contact">
          <div className="row py-5 ">
            <div className="col-sm-10">
              <h1
                className="fw-bold py-5 "
                style={{
                  fontSize: 35,
                }}
              >
                New Case? <br />
                Send Message Us
              </h1>

              <div className="circles_div wrk_prog_circle">
                <div className="circles"></div>
                <div className="circles"></div>
                <div className="circles circle_middel"></div>
                <div className="circles"></div>
                <div className="circles"></div>
              </div>

              <p className="fs-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
                sit!
              </p>

              <div className="row  py-3">
                <div className="col-sm-2">
                  <img
                    src="./img/author-thumb-12.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                </div>
                <div className="col-sm-10">
                  <h2
                    className="fs-4 fw-bold"
                    style={{
                      color: "#fd4a36",
                    }}
                  >
                    HAVE A QUESTION?
                  </h2>
                  <h2 className="fs-1 fw-bold">+888 445 55 678 & 89</h2>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <p className="fs-3 py-5">
                    Monday - Friday:
                    <br />
                    9.00 - 6.00
                    <br />
                    Sunday & Public Holidays (Closed)
                  </p>

                  <h2 className="fs-3 fw-bold">REQUEST A CALL BACK</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right_contact pt-5">
          <form action="mt-5">
            <div className="row mt-5">
              <div
                className="col-sm-11 px-5 rounded-3 "
                style={{
                  paddingTop: 30,
                  paddingBottom: 30,
                  backgroundColor: "#fff",
                }}
              >
                <div className="row pt-5">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control fs-4 p-3 rounded-3"
                        id="exampleInputEmail1"
                        placeholder="First Name "
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control fs-4 p-3 rounded-3"
                        id="exampleInputEmail1"
                        placeholder="Last Name "
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control fs-4 p-3 rounded-3"
                        id="exampleInputEmail1"
                        placeholder=" Email Address "
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control fs-4 p-3 rounded-3"
                        id="exampleInputEmail1"
                        placeholder="phone "
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <select
                        className="form-select fs-4 p-3 rounded-3"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control fs-4 p-3 rounded-3"
                        placeholder="Message goes here"
                        id="floatingTextarea"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-sm-12 pb-5">
                    <div className="btn_slider contact_btn">
                      <button
                        className="shadow-lg py-4"
                        style={{
                          backgroundColor: "#fd4a36",
                          color: "#fff",
                        }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <h1
            className=" py-5 text-center mt-5"
            style={{
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Find Answers In Our <br />
            List Of Frequently Asked Questions
          </h1>
          <div className="circles_div r_padding pb-5">
            <div className="circles"></div>
            <div className="circles"></div>
            <div className="circles circle_middel"></div>
            <div className="circles"></div>
            <div className="circles"></div>
          </div>

          <SlidingBox />
          <SlidingBox />
          <SlidingBox />
        </div>
      </div>
    </>
  );
};

export default Contact;
