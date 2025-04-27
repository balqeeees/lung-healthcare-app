import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    id: Yup.string().required("ID is required"),
  });

  const formik = useFormik({
    initialValues: {
      id: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitting:", values);
      //  API call should be here
      setIsSubmitted(true);
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <button onClick={() => navigate("/")} className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            <img
              src="/logo-preview.png"
              alt="Lung Health Care Logo"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
          <span className=" text-gray-600 font-medium text-sm">
            Lung Health Care
          </span>
        </div>
        <button className="text-gray-500"></button>
      </header>

      <main className="flex-1 flex flex-col md:flex-row max-w-4xl mx-auto w-full p-4">
        <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute left-0 top-0 w-full h-full">
                <img
                  src="/Forgotpassword.png"
                  alt="Forgot Password"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    e.target.parentNode.style.backgroundColor = "#e6efff";
                  }}
                />
              </div>
              <div className="absolute right-6 top-10 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 leading-snug">
            Forgot
            <br />
            your password?
          </h1>

          <p className="text-gray-600 text-sm mb-6">
            Please verify your identity first. Once confirmed, we will send the
            password to the phone number registered in our database.
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
              <p className="text-green-800 text-sm">
                Verification sent! Please check your phone for the password
                reset code.
              </p>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="Enter your National or Medical ID"
                  value={formik.values.id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 rounded-lg bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ${
                    formik.touched.id && formik.errors.id
                      ? "border border-red-500"
                      : ""
                  }`}
                />
                {formik.touched.id && formik.errors.id && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.id}
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    console.log("Reset initiated");
                    formik.handleSubmit(); 
                  }}
                  className="text-blue-500 text-sm hover:underline focus:outline-none"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Processing..." : "Reset Password"}
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
