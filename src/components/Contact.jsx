// Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  document.title = "RankFlix | Contact";
  
  return (
    <div className="overflow-x-hidden ">

      <div className="flex gap-5 text-zinc-400 font-semibold px-4 py-6  bg-gray-800">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] text-4xl ri-arrow-left-line"
        ></i>
        <h1 className="text-3xl text-white">Contact</h1>
      </div>
      <div className="min-h-screen w-screen flex flex-col items-center justify-center -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="p-6 shadow-lg rounded-lg ">
            <form className="space-y-6">
              <div>
                <label
                  className="block text-zinc-100 text-xl mb-2 font-medium"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-zinc-100 text-xl font-medium"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  className="block text-zinc-100 text-xl mb-2 font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-zinc-100 text-xl mb-2 font-medium"
                  htmlFor="message"
                >
                  What can we help you with?
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
