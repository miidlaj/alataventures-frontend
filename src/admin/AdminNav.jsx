import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminNav = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/admin/login');
  }

  return (
    <>
      <div className="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
        <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
          {/* <a
                className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a> */}
          {/* Active: bg-gray-800 text-white, Not active: text-white/50 */}
          <Link
            className={` ${location.pathname.includes('/admin/portfolio') ? "bg-gray-800 text-white" : "text-white/50"} " p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"`}
            to="/admin/portfolio"
          >
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
          </Link>
          <Link
            className={` ${location.pathname.includes('/admin/gallery') ? "bg-gray-800 text-white" : "text-white/50"} " p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"`}
            to="/admin/gallery"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z"
              />
            </svg>
          </Link>

          <Link
            className={` ${location.pathname.includes('/admin/partners') ? "bg-gray-800 text-white" : "text-white/50"} " p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"`}
            to="/admin/partners"
          >
          
            <svg
             className="h-5 w-5 sm:h-6 sm:w-6"
             viewBox="0 0 20 20"
             fill="currentColor"
             xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0V15H14L20 20V0H0ZM9.5 4C10.3281 4 11 4.67188 11 5.5C11 6.32812 10.3281 7 9.5 7C8.67188 7 8 6.32812 8 5.5C8 4.67188 8.67188 4 9.5 4ZM5 11H3C3 9.89844 3.89844 9 5 9C5.17969 9 5.35156 9.03125 5.51562 9.07422C5.19531 9.64844 5 10.3008 5 11ZM5 8C4.44922 8 4 7.55078 4 7C4 6.44922 4.44922 6 5 6C5.55078 6 6 6.44922 6 7C6 7.55078 5.55078 8 5 8ZM6 11C6 9.35156 7.35156 8 9 8H10C11.6484 8 13 9.35156 13 11H6ZM13 7C13 6.44922 13.4492 6 14 6C14.5508 6 15 6.44922 15 7C15 7.55078 14.5508 8 14 8C13.4492 8 13 7.55078 13 7ZM14 11C14 10.3008 13.8047 9.64844 13.4844 9.07422C13.6484 9.03125 13.8203 9 14 9C15.1016 9 16 9.89844 16 11H14Z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </nav>
        <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
          {/* <a
                className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
              <div
                className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover"
                onClick={() => handleLogout()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
