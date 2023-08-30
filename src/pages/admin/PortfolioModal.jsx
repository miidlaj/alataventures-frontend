import React, { useState } from "react";
import "./PortfolioModal.css";

const PortfolioModal = ({ openModal, toggleModal }) => {
  const modalHandler = (val) => {
    toggleModal(val);
  };

  return (
    <div>
      <div
        className={`${
          openModal
            ? "opacity-100 translate-y-0 flex"
            : "opacity-0 translate-y-4 hidden "
        } transform transition-opacity duration-300 ease-in-out translate-y-4 py-12 z-50 absolute top-0 right-0 bottom-0 left-0 `}
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
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
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Enter Portfolio Details
            </h1>
            <label
              htmlFor="title"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Title
            </label>
            <input
              id="title"
              className="mb-2 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="title..."
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
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center text-sm border-gray-300 rounded border"
                placeholder="company..."
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
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Kerala"
              />
            </div>
            <label
              htmlFor="status"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Status
            </label>

            <div className="container mx-auto flex justify-center mt-32">
              <div className="radio-group inline-flex flex-1 flex-row flex-initial justify-center rounded-lg shadow-md">
                <div className="radio">
                  <input
                    type="radio"
                    id="huey"
                    name="drone"
                    defaultValue="huey"
                    defaultChecked=""
                  />
                  <label
                    htmlFor="huey"
                    className="block text-center px-4 py-3 bg-white border border-grey border-solid border-2 w-32 h-32"
                  >
                    <div className="text-3xl mb-2">⏱</div>
                    <div className="font-semibold uppercase tracking-wide">
                      <strong>EXECUTED</strong>
                    </div>
                  </label>
                </div>
                <div className="radio bg-white border border-grey border-l-0">
                  <input
                    type="radio"
                    id="dewey"
                    name="drone"
                    defaultValue="dewey"
                  />
                  <label
                    htmlFor="dewey"
                    className="block text-center px-4 py-3 bg-white border border-grey border-solid border-2 w-32 h-32"
                  >
                    <div className="text-3xl mb-2">🚘</div>
                    <div className="font-semibold uppercase tracking-wide">
                      <strong>YET TO COMMENCE</strong>
                    </div>
                  </label>
                </div>
                <div className="radio bg-white border border-grey border-l-0">
                  <input
                    type="radio"
                    id="louie"
                    name="drone"
                    defaultValue="louie"
                  />
                  <label
                    htmlFor="louie"
                    className="block text-center px-4 py-3 bg-white "
                  >
                    <div className="text-3xl mb-2">🤷‍♂️</div>
                    <div className="uppercase tracking-wide">
                      <strong>ONGOING</strong>
                    </div>
                  </label>
                </div>
                <div className="radio bg-white border border-grey border-l-0">
                  <input
                    type="radio"
                    id="louie"
                    name="drone"
                    defaultValue="louie"
                  />
                  <label
                    htmlFor="louie"
                    className="block text-center px-4 py-3 bg-white "
                  >
                    <div className="text-3xl mb-2">🤷‍♂️</div>
                    <div className="uppercase tracking-wide">
                      <strong>ONGOING</strong>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start w-full">
              <button className="cursor-pointer transition duration-150 ease-in-out hover:bg-gray-100 bg-gray-900 rounded text-white px-8 py-2 text-sm">
                Save
              </button>
              <button
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
  );
};

export default PortfolioModal;
