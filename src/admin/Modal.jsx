import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { addPortfolio, updatePortfolio } from "../api/Portfolio";

const Modal = ({
  openModal,
  toggleModal,
  handleNewPortfolio,
  handleUpdatedPortfolio,
  selected,
}) => {
  const modalHandler = (val) => {
    toggleModal(val);
  };

  // Define a state object to store form values
  const [formData, setFormData] = useState(selected);
  const [imagePreview, setImagePreview] = useState(selected.imageUrl);

  useEffect(() => {
    setFormData(selected);
    setImagePreview(selected.imageUrl);
  }, [selected]);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Check if a file was selected
    if (!file) {
      toast.error("Please select a file.");
      return;
    }

    // Check file format (you can add more formats as needed)
    const allowedFormats = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedFormats.includes(file.type)) {
      toast.error(
        "Invalid file format. Please upload a JPEG, PNG, or GIF image."
      );
      return;
    }

    // Check file size (4 MB limit)
    const maxSizeInBytes = 4 * 1024 * 1024; // 4 MB
    if (file.size > maxSizeInBytes) {
      toast.error("File size exceeds the 4 MB limit.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);

    setFormData({ ...formData, image: file });
  };

  const handleRadioChange = (e) => {
    const radioButtonValue = e.target.value;
    setFormData({ ...formData, status: radioButtonValue });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRemoveImg = () => {
    setFormData({ ...formData, image: null });
    setImagePreview("");
  };

  const formSubmitHandler = () => {
    if (formData.title.length === 0 || formData.title.length > 50) {
      toast.error("Please select a valid title!");
      return;
    }

    if (formData.company.length === 0 || formData.company.length > 50) {
      toast.error("Please select a valid company!");
      return;
    }

    if (formData.location.length === 0 || formData.location.length > 50) {
      toast.error("Please select a valid location!");
      return;
    }

    if (
      !["ONGOING", "YET_TO_COMMENCE", "EXECUTED", "UPCOMING"].includes(
        formData.status
      )
    ) {
      toast.error("Please select a valid status!");
      return;
    }

    if (formData._id === null) {
      newPortfolioHandler();
    } else {
      updatingPortfolioHandler();
    }
  };

  const updatingPortfolioHandler = async () => {
    const formDataToSend = new FormData();

    formDataToSend.append("title", formData.title);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("imageUrl", formData.imageUrl);

    console.log(formData.imageUrl);

    if (formData.image !== null) {
      formDataToSend.append("image", formData.image);
    }

    await updatePortfolio(formData._id, formDataToSend).then((res) => {
      if (res?.status === 200) {
        console.log(res);
        toast.success("Portfolio updated successfully!");
        handleUpdatedPortfolio(res?.data?.existingPortfolio);
        toggleModal(false);
      } else {
        toast.error(res?.data?.message);
      }
    });
  };
  const newPortfolioHandler = () => {
    if (formData.image === null) {
      toast.error("Please select a image!");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("imageUrl", "");
    addPortfolio(formDataToSend).then((res) => {
      console.log(res);
      if (res?.status === 201) {
        toast.success("Portfolio added successfully!");
        handleNewPortfolio(res?.data?.newPortfolio);
        toggleModal(false);
      } else {
        toast.error(res?.data?.message);
      }
    });
  };

  return (
    <>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <div
          className={`${
            openModal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "
          } transform transition-opacity duration-300 ease-in-out translate-y-4 py-12 z-50 absolute top-0 right-0 bottom-0 left-0`}
          id="modal"
        >
          <div role="alert" className="container mx-auto w-11/12 max-w-lg">
            <div className="relative py-8 px-5 bg-white shadow-md rounded border border-gray-400 h-full scroll-modal">
              <div className="w-full flex justify-start text-gray-600 mb-3">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 0V1H2C0.895 1 0 1.895 0 3V5H20V3C20 1.895 19.105 1 18 1H13V0H7ZM0 7V15C0 16.103 0.897 17 2 17H18C19.103 17 20 16.103 20 15V7H17V8H13V7H7V8H3V7H0Z"
                  />
                </svg>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                  Enter Portfolio Details
                </h1>
              </div>

              <label
                htmlFor="title"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="title..."
                onChange={handleInputChange}
                value={formData.title}
              />
              <label
                htmlFor="company"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Company
              </label>
              <div className="relative mb-2 mt-2">
                <input
                  id="company"
                  name="company"
                  className="pl-3 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center text-sm border-gray-300 rounded border"
                  placeholder="company..."
                  onChange={handleInputChange}
                  value={formData.company}
                />
              </div>
              <label
                htmlFor="location"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Location
              </label>
              <div className="relative mb-2 mt-2">
                <input
                  id="location"
                  name="location"
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="location..."
                  onChange={handleInputChange}
                  value={formData.location}
                />
              </div>

              <label
                htmlFor="status"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Status
              </label>
              <div className="radio-tile-group">
                <div className="input-container">
                  <input
                    id="EXECUTED"
                    checked={formData.status === "EXECUTED"}
                    value={"EXECUTED"}
                    onChange={handleRadioChange}
                    className="radio-button"
                    type="radio"
                    name="status"
                  />
                  <div className="radio-tile">
                    <div className="icon walk-icon">
                      <i class="flaticon-menu text-yellow-600"></i>
                    </div>
                    <label htmlFor="EXECUTED" className="radio-tile-label">
                      EXECUTED
                    </label>
                  </div>
                </div>
                <div className="input-container">
                  <input
                    id="ONGOING"
                    className="radio-button"
                    type="radio"
                    checked={formData.status === "ONGOING"}
                    value={"ONGOING"}
                    onChange={handleRadioChange}
                    name="status"
                  />
                  <div className="radio-tile">
                    <div className="icon bike-icon">
                      <i class="flaticon-building"></i>
                    </div>
                    <label htmlFor="ONGOING" className="radio-tile-label">
                      ONGOING
                    </label>
                  </div>
                </div>
                <div className="input-container">
                  <input
                    id="YET_TO_COMMENCE"
                    checked={formData.status === "YET_TO_COMMENCE"}
                    value={"YET_TO_COMMENCE"}
                    onChange={handleRadioChange}
                    className="radio-button"
                    type="radio"
                    name="status"
                  />
                  <div className="radio-tile">
                    <div className="icon car-icon">
                      <i class="flaticon-modern-bridge-road-symbol"></i>
                    </div>
                    <label
                      htmlFor="YET_TO_COMMENCE"
                      className="radio-tile-label"
                    >
                      COMMENCE
                    </label>
                  </div>
                </div>
                <div className="input-container">
                  <input
                    id="UPCOMING"
                    checked={formData.status === "UPCOMING"}
                    value={"UPCOMING"}
                    onChange={handleRadioChange}
                    className="radio-button"
                    type="radio"
                    name="status"
                  />
                  <div className="radio-tile">
                    <div className="icon car-icon">
                      <i class="flaticon-modern-bridge-road-symbol"></i>
                    </div>
                    <label htmlFor="UPCOMING" className="radio-tile-label">
                      UPCOMING
                    </label>
                  </div>
                </div>
              </div>

              <label
                htmlFor="image"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal pt-3"
              >
                Image
              </label>

              <div className="flex justify-center items-center bg-white pb-3">
                <div className="w-full relative grid grid-cols-1 bg-gray-100 rounded-lg">
                  <div className="relative order-first h-28 flex justify-between items-center col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                    <div className="rounded-l-lg p-4 flex flex-col justify-center items-center ">
                      <label
                        className="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
  rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
 focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                        htmlFor="image"
                      >
                        Select image
                        <input
                          className="text-sm cursor-pointer w-36 hidden sr-only"
                          type="file"
                          name="image"
                          id="image"
                          onChange={(e) => handleFileChange(e)}
                        />
                      </label>
                      <button
                        className="inline-flex items-center shadow-md my-2 px-2 py-2 bg-gray-900 text-gray-50 border border-transparent
  rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
 focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                        onClick={handleRemoveImg}
                      >
                        remove image
                      </button>
                    </div>
                    <span className="text-gray-400 opacity-75">
                      {imagePreview.length !== 0 && (
                        <img
                          src={imagePreview}
                          alt="not loaded"
                          className="aspect-ratio-square h-8"
                        />
                      )}
                      {imagePreview.length === 0 && (
                        <img
                          src={
                            "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
                          }
                          className="aspect-ratio-square h-8"
                          alt="Select"
                        />
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="flex items-center w-full"
                style={{ justifyContent: "end" }}
              >
                <button
                  type="submit"
                  onClick={() => formSubmitHandler()}
                  className="mr-1 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100 bg-gray-900 rounded text-white px-8 py-2 text-sm"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="cursor-pointer bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:bg-gray-900 border rounded px-8 py-2 text-sm"
                  onClick={() => modalHandler(false)}
                >
                  Cancel
                </button>
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                onClick={() => modalHandler(false)}
                aria-label="close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
