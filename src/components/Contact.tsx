import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const ContactForm = () => {
  return (
    <section className="">
      <h1 className="text-center text-3xl p-4">Contact Us</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 px-2 lg:px-20 py-12 max-w-7xl my-6  mx-auto bg-white mt-6">
        <div className="lg:w-1/3 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-[#495057]">
          Get in Touch!
          </h1>
          <p className="text-lg text-[#a1a1a1] mb-6">
          Hi there! I&apos;d love to hear from you. Whether you have questions, feedback, collaboration ideas, or just want to say hello, feel free to reach out. Fill out the form below, and I&apos;ll get back to you as soon as possible.
          </p>
          <a
            href="mailto:contact@info.com"
            className="text-lg font-medium text-[#D4A373] hover:underline"
          >
            contact@thdailyscroll.com
          </a>
          <div className="flex space-x-4 mt-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 text-xl"
            >
              <FaFacebook  className="transtition ease-linear hover:text-[#D4A373]"/>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 text-xl"
            >
              <FaTwitter  className="transtition ease-linear hover:text-[#D4A373]"/>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-800 text-xl"
            >
              <FaInstagram className="transtition ease-linear hover:text-[#D4A373]" />
            </Link>
          </div>
        </div>
        <div className="w-2/3 bg-white p-6 shadow-md rounded-lg">
          <form>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md p-4"
                    required
                  />
                </div>
                <div className="flex-1 mt-4 lg:mt-0">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md p-4"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md p-4"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-md p-4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#D4A373] text-white font-medium py-4 px-4 rounded-md hover:bg-amber-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
