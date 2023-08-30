import React, { useState } from "react";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../api/AdminAuth";

const Login = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;

    if (!usernameRegex.test(formData.username)) {
      toast.error("Please enter a valid username");
    } else {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordRegex.test(formData.password)) {
        toast.error("Please enter a valid password.");
      } else {
        await adminLogin(formData).then((res) => {
          if (res?.status === 200) {
            toast.success("Login Success");
            const token = res?.data?.access_token;
            localStorage.setItem('token', token);
            navigate('/admin');
          } else if (res?.status === 401) {
            toast.error("Username or password is incorrect!");
          } else {
            toast.error("Something went wrong.");
          }
        });
      }
    }

    
  };

  return (
    <>
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
      <main className="LoginMain">
        <div className="container">
          <section className="wrapper">
            <div className="heading">
              <h1 className="text text-large">Sign In</h1>
            </div>
            {/* <p className="text text-normal">
              {error}
            </p> */}
            <form onSubmit={handleSubmit} className="form">
              <div className="input-control">
                <label htmlFor="username" className="input-label" hidden={true}>
                  Username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  className="input-field"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-control">
                <label htmlFor="password" className="input-label" hidden={true}>
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-field form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-control">
                <button
                  type="submit"
                  className="input-submit cursor-pointer"
                  defaultValue="Sign In"
                  disabled={false}
                >
                  Sign In
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
