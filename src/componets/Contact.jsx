import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { sendMail } from "../api/Contact";

const Contact = () => {
  const [successMessage, setSucessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formKey, setFormKey] = useState(0);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const submitForm = async (data) => {
    await sendMail(data).then((res) => {
      if (res?.status === 200) {
        resetForm();
        setSucessMessage("Form submitted successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage("Cannot submit form at the moment, Please try later");
        setSucessMessage("");
      }
    });
  };

  const resetForm = () => {
    setFormKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <section id="contact" className="contact-form-area mt-5">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="contact-form">
                <div className="title">
                  <h3>Leave Reply</h3>
                </div>
                <div className="inner-box">
                  <form
                    key={formKey}
                    className="default-form2"
                    onSubmit={handleSubmit(submitForm)}
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <p>Name:</p>
                          <Controller
                            name="name"
                            control={control}
                            rules={{ required: true, maxLength: 30 }}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                          {errors.name && (
                            <span className="text-xs text-danger">
                              Name is required (max 30 characters).
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <p>Email Address:</p>
                          <Controller
                            name="emailAddress"
                            control={control}
                            rules={{
                              required: true,
                              maxLength: 30,
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, // Email regex
                                message: "Invalid email address",
                              },
                            }}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                          {errors.emailAddress && (
                            <span className="text-xs text-danger">
                              {errors.emailAddress.message ||
                                "Email Address is required (max 30 characters)."}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <p>Subject:</p>
                          <Controller
                            name="subject"
                            control={control}
                            rules={{ required: true, maxLength: 30 }}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                          {errors.subject && (
                            <span className="text-xs text-danger">
                              Subject is required (max 30 characters).
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <p>Phone:</p>
                          <Controller
                            name="phone"
                            control={control}
                            rules={{
                              required: true,
                              maxLength: 30,
                              pattern: {
                                value: /^[0-9]+$/,
                                message: "Invalid phone number",
                              },
                              validate: (value) => {
                                // Custom validation function to check if the phone number has at least 10 digits
                                if (value.length < 10) {
                                  return "Phone number must have at least 10 digits";
                                }
                                return true;
                              },
                            }}
                            render={({ field }) => (
                              <input {...field} type="text" />
                            )}
                          />
                          {errors.phone && (
                            <span className="text-xs text-danger">
                              {errors.phone.message ||
                                "Phone is required (max 30 characters)."}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="input-box">
                          <p>Message:</p>

                          <Controller
                            name="message"
                            control={control}
                            rules={{ required: true, maxLength: 1024 }}
                            render={({ field }) => (
                              <textarea {...field} rows="4" />
                            )}
                          />
                          {errors.message && (
                            <span className="text-xs text-danger">
                              Message is required (max 1024 characters).
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        {!errorMessage && !successMessage && (
                          <div className="button-box">
                            <button className="btn-one" type="submit">
                              Submit
                            </button>
                          </div>
                        )}

                        {errorMessage && (
                          <span className="text-xs text-danger">
                            {errorMessage}
                          </span>
                        )}
                        {successMessage && (
                          <span className="text-xs text-success">
                            {successMessage}
                          </span>
                        )}
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
