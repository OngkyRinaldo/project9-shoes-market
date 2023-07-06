import React, { useState } from "react";
import { addUserToTable } from "@/utils/api";
import Link from "next/link"

export default function Register() {
  const [userData, setUserData] = useState({});

  function setValue(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    console.log({ name, value });

    setUserData({
      ...userData,
      [name]: value,
    });
  }

// ambil endpoint strapi user-shoe

   const registerUser = async () => {
    try {
      console.log(userData)
    
      const res = await addUserToTable("/api/user-shoes", {
        data: userData,
      });
       console.log("User registered successfully:", res);
    } catch (error) {
      console.log(error);
    }
  }

   

  function handleSubmit(e) {
    e.preventDefault();
    registerUser();
  }

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
              Register
            </h2>
            <form className="mt-10" onSubmit={handleSubmit}>
              {/* Nama Input */}
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="user name"
                autoComplete="username"
                className="block w-full px-1 py-3 mt-2 text-gray-800 border-2 appearance-none border-slate-300 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required=""
                onChange={setValue}
              />
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
                onChange={setValue}
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
                onChange={setValue}
              />
              {/* Auth Buttton */}
              <button
                type="submit"
                className="w-full py-3 mt-10 font-medium text-white uppercase bg-gray-800 rounded-lg focus:outline-none hover:bg-gray-700 hover:shadow-none"
              >
                Register
              </button>
              <button
                type="submit"
                className="w-full py-3 mt-3 font-medium text-gray-800 uppercase bg-white border-2 rounded-lg border-slate-500 focus:outline-none hover:bg-gray-200 hover:shadow-lg"
              >
                Sign up with Github
              </button>
              {/* Another Auth Routes */}
              <div className="mt-8 text-sm text-center sm:flex sm:flex-wrap sm:mb-4">
                <Link href="/auth/forgot-password" className="underline flex-2">
                  Forgot password?
                </Link>
                <p className="flex-1 mx-4 my-1 text-gray-500 text-md sm:my-auto">
                  or
                </p>
                <Link href="/auth/login" className="underline flex-2">
                  Have an Account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
