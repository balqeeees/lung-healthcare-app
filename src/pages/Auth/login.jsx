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
      <header className="flex flex-col items-center py-4 w-full px-4">
        <div className="max-w-md w-full flex items-center justify-center">
          <img
            src="/logo-preview.png"
            alt="Lung Health Care Logo"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="text-sm sm:text-base text-gray-500 ml-2">
            Lung Health Care
          </span>
        </div>
        <div className="w-1/2 border-b border-gray-300 mt-4" />
      </header>

      <main className="flex flex-col md:flex-row flex-1 font-poppins">
        <div className="flex justify-center items-center w-full md:w-1/2 p-4 sm:p-6 lg:p-8 order-2 md:order-1">
          <div className="bg-emerald-50 rounded-3xl shadow-md p-4 sm:p-6 lg:p-8 w-full max-w-md">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 text-center">
              Lung Healthcare
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 text-center">
              Welcome back! Please login to your account
            </p>

            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 sm:space-y-5"
            >
              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-700">
                  ID / National number
                </label>
                <input
                  type="text"
                  name="id"
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  placeholder="Enter your ID"
                  className="w-full p-2 sm:p-3 mt-1 border rounded-2xl bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                    className="w-full p-2 sm:p-3 mt-1 border rounded-2xl bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-gray-600 text-xs sm:text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-48 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-2xl font-medium text-sm"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex w-full md:w-1/2 justify-center items-center p-4 sm:p-6 lg:p-7 order-1 md:order-2">
          <div className="text-center">
            <img
              src="/Doctors-pana.png"
              alt="Doctors Illustration"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto object-contain mb-2"
            />
            <p className="text-gray-600 font-bold text-xs sm:text-sm md:text-base">
              With early detection, hope begins to flourish
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#97ADC8] border-t py-4 sm:py-6 px-4 sm:px-8 text-gray-700 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6 sm:space-y-8 lg:space-y-0 lg:flex-row lg:justify-between lg:items-start">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start space-x-3">
            <img
              src="/logo-preview.png"
              alt="Footer Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
            />
            <span className="text-sm sm:text-base font-medium">
              Lung Health Care
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="font-medium text-sm sm:text-base text-center mb-2 sm:mb-3">
              Contact Us:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-gray-600" />
                <span>+962 955585</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-600" />
                <span>info@lunghealthcare.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#b61111" }}
                />
                <span>Al-Wakalat St, Amman, Jordan</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faFax} className="text-gray-600" />
                <span>Fax: +962 8598</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <div className="font-semibold text-sm sm:text-base">Follow Us:</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-700 transition-colors">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-lg sm:text-xl"
                />
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-lg sm:text-xl"
                />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-lg sm:text-xl"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#8598AF] py-2 text-center text-white text-xs sm:text-sm">
        <span className="px-4">
          Copyright © 2024 - Developed by: Farah Rasasi, Sara Adaileh, ...
        </span>
      </div>
    </div>
  );
}
