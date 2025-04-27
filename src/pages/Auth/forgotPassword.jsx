import React from "react";

function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-blue-100">
      {/* Header */}
      <div className="flex justify-center py-6">
        <img src="/logo.png" alt="Lung Health Care" className="h-10" />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center gap-10 px-4">
        {/* Login Box */}
        <div className="bg-blue-100 p-10 rounded-2xl shadow-md w-full max-w-sm">
          <h2 className="text-center text-2xl font-bold mb-6">
            Lung Healthcare
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Welcome back! Please login to your account
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="national-id">
                ID / National num
              </label>
              <input
                id="national-id"
                type="text"
                placeholder="Enter your ID"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Image + Text */}
        <div className="hidden md:block">
          <img src="/doctors-illustration.png" alt="Doctors" className="h-80" />
          <p className="text-center text-gray-600 mt-4 text-lg font-medium">
            Hope starts with early detection..
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-6 mt-10 text-center text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
          <div>
            <p>Contact Us:</p>
            <p>📞 06 xxx xxx</p>
            <p>✉️ info@lunghealthcare.com</p>
            <p>📍 Al-wakalat St, Amman, Jordan</p>
            <p>📠 Fax: +962 xxx xxx</p>
          </div>
          <div>
            <p>Follow Our News:</p>
            <div className="flex justify-center gap-3 mt-2">
              <a href="#">
                <img src="/facebook-icon.png" alt="Facebook" className="h-6" />
              </a>
              <a href="#">
                <img
                  src="/instagram-icon.png"
                  alt="Instagram"
                  className="h-6"
                />
              </a>
            </div>
          </div>
        </div>
        <p>© 2024 - Developed by (your developer name)</p>
      </footer>
    </div>
  );
}

export default ForgotPassword;
