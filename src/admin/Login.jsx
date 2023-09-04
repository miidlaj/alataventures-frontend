import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../api/AdminAuth";
import ToasterComponent from "../componets/Toaster";
import Loader from "../componets/Loader";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;

    if (!usernameRegex.test(formData.username)) {
      toast.error("Please enter a valid username", { id: 'toast'});
    } else {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordRegex.test(formData.password)) {
        toast.error("Please enter a valid password.", { id: 'toast'});
      } else {
        setLoading(true);
        await adminLogin(formData).then((res) => {
          if (res?.status === 200) {
            console.log(true);
            toast.success("Login Success", { id: 'toast'});
            const token = res?.data?.access_token;
            localStorage.setItem("token", token);
            navigate("/admin/portfolio");
          } else if (res?.status === 401) {
            toast.error("Username or password is incorrect!", { id: 'toast'});
          } else {
            toast.error("Something went wrong.", { id: 'toast'});
          }
        });
        setLoading(false);
      }
    }
  };

  return (
    <>
        <ToasterComponent/>
     {loading && <Loader />}

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5 flex justify-center"><img src="/assets/images/resources/alata-logo.jpg" alt="logo" /></h1>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={formData.username}
                onChange={handleInputChange}
                name="username"
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
              />
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2" >
                  Login
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button
                  onClick={() => window.location.href = "/"}
                  className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="inline-block ml-1">
                    Back to alataventures.com
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Login;
