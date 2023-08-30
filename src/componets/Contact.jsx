import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-form-area">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="contact-form">
                <div className="title">
                  <h3>Leave Reply</h3>
                </div>
                <div className="inner-box">
                  <form
                    id="contact-form"
                    name="contact_form"
                    className="default-form2"
                    action="assets/inc/sendmail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <p>Name:</p>
                          <input
                            type="text"
                            name="form_name"
                            defaultValue=""
                            placeholder=""
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <p>Email Address:</p>
                          <input
                            type="email"
                            name="form_email"
                            defaultValue=""
                            placeholder=""
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <p>Subject:</p>
                          <input
                            type="text"
                            name="form_subject"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <p>Phone:</p>
                          <input
                            type="text"
                            name="form_phone"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-box">
                          <p>Message:</p>
                          <textarea
                            name="form_message"
                            placeholder=""
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="button-box">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                            defaultValue=""
                          />
                          <button
                            className="btn-one"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
              <div className="contact-information-box">
                <div className="title">
                  <h3>Contact Info</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                </div>
                <ul className="contact-us">
                  <li>
                    <div className="icon">
                      <span className="flaticon-real-estate homeicon" />
                    </div>
                    <div className="text">
                      <p>
                        ALATA VENTURE PRIVATE LIMITED
                        <br /> 6/146, Vadakkethil,{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="flaticon-pin-1" />
                    </div>
                    <div className="text">
                      <p>
                        Athipatta,Edayoor ( P O),
                        <br /> Tirur,Malappuram
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="flaticon-open-envelope-with-letter" />
                    </div>
                    <div className="text">
                      <a href="mailto:sales@alataventures.com">
                        sales@alataventures.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="flaticon-smartphone" />
                    </div>
                    <div className="text">
                      <a href="tel:+919946666636">(+91) 9946 66 6636</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
