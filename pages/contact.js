import React, { useRef, useState } from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import { Location } from "../public/svg/icon";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

export default function Contact() {
  const form = useRef();
  var GoogleCapcha = false;
  //Show Alert of successfull/ or failed
  const AlertSuccess = () => {
    Swal.fire({
      title: "<h3 style='color:#0e0e0e'>" + "Sweet!" + "</h3>",
      icon: "success",
      text: "Thank you for reaching out to us! Our Cleanova Property Services team will be in touch with you shortly.",
      imageUrl: "/img/about/SupportSuccessAlert.png",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      timer: 10000,
      iconposition: "buttom",
    });
  };

  const AlertFail = () => {
    Swal.fire({
      icon: "error",
      title: "<h3 style='color:#0e0e0e'>" + "Oops..." + "</h3>",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };
  const AlertGooglerecapcha = () => {
    Swal.fire({
      title:
        "<h3 style='color:#0e0e0e'>" +
        "Please click the " +
        " <span style='color:#ef4444'><br/>  I'm not a robot checkbox" +
        "</span> <br/> " +
        "to submit the form." +
        "</h3>",
      icon: "warning",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  const [check, setCheck] = useState([false, false]);

  //Google Recapcha
  const onChange = () => {
    GoogleCapcha = true;
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (GoogleCapcha) {
      emailjs
        .sendForm(
          "service_vunh9gg",
          "template_5xug8jx",
          form.current,
          "MY2YBVfnXvBRVei6P"
        )
        .then(
          (result) => {
            AlertSuccess();
            console.log(result.text);
            // reset the form after submit
            form.current.reset();
            setCheck([false, false]);
          },
          (error) => {
            AlertFail();
            console.log(error.text);
          }
        );
    } else {
      AlertGooglerecapcha();
      e.preventDefault();
    }
    // }
  };
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title="Contact" />
        <div className="industify_fn_pagetitle">
          <div className="container">
            <div className="title_holder">
              <h3>Get in Touch</h3>
              <div className="industify_fn_breadcrumbs">
                <ul>
                  <li>
                    <Link href="/">
                      <a title="Home">Home</a>
                    </Link>
                  </li>
                  <li className="separator">
                    <span></span>
                  </li>
                  <li>
                    <span className="bread-current">Book a Service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title */}

        {/* Contact */}
        <div className="industify_fn_contact">
          <div className="container">
            <div className="contact_in">
              <div className="map_holder">
                {/*<iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>*/}
                <div className="iframeContainer">
                  <iframe
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://www.google.com/maps/d/u/1/embed?mid=1fOi1ligisi8LXZJ7yxqt75hGnT9Ei_8&ehbc=2E312F"
                  ></iframe>
                </div>
              </div>

              <div className="contact_holder">
                <div className="contact_left">
                  <h3>Get Your Quote, No Cost!</h3>
                  <form
                    className="contact_form"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    {/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}
                    {/*  */}
                    <div className="items">
                      <input
                        type="hidden"
                        name="from_emailorpone"
                        value={
                          check[0] && check[1]
                            ? "email or phone"
                            : check[0]
                            ? "email"
                            : check[1]
                            ? "phone"
                            : ""
                        }
                      />
                      <div className="item">
                        <input
                          type="text"
                          placeholder="Name"
                          name="from_name"
                          required
                        />
                      </div>
                      <div className="item">
                        <input
                          type="email"
                          placeholder="Email"
                          name="from_email"
                          required
                        />
                      </div>
                      <div className="item">
                        <input
                          type="number"
                          placeholder="Phone"
                          name="from_phone"
                          required
                        />
                      </div>
                      <div>
                        <span>Preferred way of contact :</span>
                        <div className="checkboxs-group">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id="emailCheck"
                              checked={check[0]}
                              onChange={() => {
                                setCheck([!check[0], check[1]]);
                              }}
                            />{" "}
                            <label htmlFor="emailCheck">Email</label>
                          </div>
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id="phoneCheck"
                              checked={check[1]}
                              onChange={() => {
                                setCheck([check[0], !check[1]]);
                              }}
                            />{" "}
                            <label htmlFor="phoneCheck">Phone</label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <textarea
                          id="message"
                          placeholder="Message"
                          required
                          name="message"
                        ></textarea>
                      </div>
                      <ReCAPTCHA
                        sitekey={"6LcS0Y0nAAAAAGR8KZZRrtrflj8DVT4MRbjDVa3O"}
                        onChange={onChange}
                      />
                      <div className="item">
                        <input
                          className="submit"
                          type="submit"
                          value="Send Your Email ➤"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="contact_right">
                  <div className="fn_cs_location_list">
                    <ul className="list">
                      <li className="location_item">
                        <div className="item">
                          <div className="title_holder">
                            <span className="icon_wrapper">
                              <span className="icon">
                                <Location className="fn__svg" />
                              </span>
                              <span className="shape"></span>
                            </span>
                            <h3>Porirua City</h3>
                          </div>
                          <div className="content_holder">
                            <ul>
                              <li>
                                27 Hukatai Street, Elsdon, Porirua, 5022, NZ
                              </li>
                              <li>Phone: +64 022-0455-048</li>
                              <li>
                                Email:{" "}
                                <Link href="mailto:cleanovapropertyservices@gmail.com">
                                  <a>cleanovapropertyservices@gmail.com</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="location_item">
                        <div className="item">
                          <div className="title_holder">
                            <span className="icon_wrapper">
                              <span className="icon">
                                <Location className="fn__svg" />
                              </span>
                              <span className="shape"></span>
                            </span>
                            <h3>Wellington city</h3>
                          </div>
                          <div className="content_holder">
                            <ul>
                              <li>
                                92 Constable Street, Newtown, Wellington, New
                                Zealand
                              </li>
                              <li>Phone: +64 223-993-001</li>
                              <li>
                                Email:{" "}
                                <Link href="mailto:cleanovapropertyservices@gmail.com">
                                  <a>cleanovapropertyservices@gmail.com</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="location_item">
                        <div className="item">
                          <div className="title_holder">
                            <span className="icon_wrapper">
                              <span className="icon">
                                <Location className="fn__svg" />
                              </span>
                              <span className="shape"></span>
                            </span>
                            <h3>Lower Hutt & Upper Hutt City</h3>
                          </div>
                          <div className="content_holder">
                            <ul>
                              <li>
                                14-12 Tacoma Drive, Tōtara Park, Upper Hutt, New
                                Zealand
                              </li>
                              <li>Phone: +64 220-455-048</li>
                              <li>
                                Email:{" "}
                                <Link href="mailto:cleanovapropertyservices@gmail.com">
                                  <a>cleanovapropertyservices@gmail.com</a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Contact */}
      </Layout>
    </>
  );
}
