import React, { useState } from "react";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faFax,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-[#A7C7F0] min-h-screen">
      <header className="flex justify-center items-center py-4 border-b border-gray-300 w-full max-w-md mx-auto">
        <img
          src="/logo-preview.png"
          alt="Lung Health Care Logo"
          width={50}
          height={50}
        />
        <span className="text-base text-gray-500">Lung Health Care</span>
      </header>

      <main className="flex flex-1 font-poppins">
        <div className="flex justify-center items-center w-full md:w-1/2 p-8">
          <div className="bg-emerald-50 rounded-3xl shadow-md p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold mb-2 text-gray-900 text-center">
              Lung Healthcare
            </h1>

            <p className="text-sm text-gray-500 mb-6 text-center">
              Welcome back! Please login to your account
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  ID / National number
                </label>
                <input
                  type="text"
                  name="id"
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  placeholder="Enter your ID"
                  className="w-full p-3 mt-1 border rounded-2xl bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                    className="w-full p-3 mt-1 border rounded-2xl bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button
                    type="button"
                    className="absolute top-4 right-3 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <a href="#" className="text-gray-600 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>

              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="w-48 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl font-medium"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center p-7">
          <div className="text-center">
            <img
              src="/Doctors-pana.png"
              alt="Doctors Illustration"
              className="w-full max-w-md h-auto object-contain mb-2"
            />
            <p className="text-gray-600 font-bold text-base">
              With early detection, hope begins to flourish
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-[#97ADC8] border-t py-6 px-8 text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img
              src="/logo-preview.png"
              height={55}
              width={55}
              alt="Footer Logo"
              className="object-contain"
            />
            <span className="text-base font-medium">Lung Health Care</span>
          </div>

          <div className="flex flex-col items-center md:items-center mx-auto space-y-6 md:space-y-0">
            <div className="font-medium text-base text-center mb-3">
              Contact Us:
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-3">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-gray-600" />
                <span>+962 955585</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
                <span>info@lunghealthcare.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#b61111" }}
                />
                <span>Al-Wakalat St, Amman, Jordan</span>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faFax} className="text-gray-600" />
                <span>Fax: +962 8598</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="font-semibold text-base">Follow Us:</div>
            <div className="flex space-x-4">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#8598AF] py-2 text-center text-white text-sm mt-auto">
        <span>
          Copyright © 2024 - Developed by: Farah Rasasi, Sara Adaileh, ...
        </span>
      </div>
    </div>
  );
}
