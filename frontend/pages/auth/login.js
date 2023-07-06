import React, { useState } from "react";
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
              Login
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
              {/* Password Input */}
              <label
                htmlFor="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                autoComplete="current-password"
                className="block w-full px-1 py-3 mt-2 mb-4 text-gray-800 border-2 appearance-none border-slate-300 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required=""
              />
              {/* Auth Buttton */}
              <button
                type="submit"
                className="w-full py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-lg focus:outline-none hover:bg-gray-700 hover:shadow-none"
              >
                Login
              </button>
              <button
                type="submit"
                className="w-full py-3 mt-3 font-medium text-gray-800 uppercase bg-white border-2 rounded-lg border-slate-500 focus:outline-none hover:bg-gray-200 hover:shadow-lg"
              >
                Sign in with Github
              </button>
              {/* Another Auth Routes */}
              <div className="mt-8 text-sm text-center sm:flex sm:flex-wrap sm:mb-4">
                <Link href="/auth/forgot-password" className="underline flex-2">
                  Forgot password?
                </Link>
                <p className="flex-1 mx-4 my-1 text-gray-500 text-md sm:my-auto">
                  or
                </p>
                <Link href="/auth/register" className="underline flex-2">
                  Create an Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
