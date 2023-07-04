import React from "react";
import Link from "next/link"

export default function Login() {
  return (
    <>
      {/* component */}
      {/* Container */}
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Auth Card Container */}
        <div className="grid mx-2 my-20 place-items-center sm:my-auto">
          {/* Auth Card */}
          <div className="w-11/12 p-12 px-6 py-10 bg-white rounded-lg shadow-md sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 sm:px-10 sm:py-6 lg:shadow-lg">
            {/* Card Title */}
            <h2 className="text-3xl font-semibold text-center text-gray-800 lg:text-4xl">
              Reset Password
            </h2>
            <form className="mt-10">
              {/* Email Input */}
              <label
                htmlFor="email"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e-mail address"
                autoComplete="email"
                className="block w-full px-1 py-3 mt-2 text-gray-800 border-2 appearance-none border-slate-300 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required=""
              />
             
              {/* Reset Buttton */}
              <button
                type="submit"
                className="w-full py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-lg focus:outline-none hover:bg-gray-700 hover:shadow-none"
              >
                Reset
              </button>
              {/* Another Auth Routes */}
              <div className="mt-8 text-sm text-center sm:flex sm:flex-wrap sm:mb-4">
  
                <Link href="/auth/login" className="underline flex-2">
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
