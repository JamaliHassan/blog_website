import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full bg-[#212529] gap-4 mt-8">
      <div className="max-w-full   text-white flex flex-wrap gap-4  justify-between px-6 py-20">
        <div className="w-full sm:w-auto">
          <h1 className="text-4xl font-bold">The Daily Scroll</h1>
          <p className="text-xs mt-3 text-[#E5E5E5]">
            Discover trending stories, everyday insights, and more.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <h1 className="text-lg font-bold">Subscription</h1>
          <form action="" className="flex flex-col gap-2 mt-3">
            <Input
              className="italic w-full sm:w-[250px]"
              placeholder="Your email address"
            />
            <Button className="w-full sm:w-auto">SUBSCRIBE</Button>
          </form>
        </div>
        <div className="w-full sm:w-auto">
          <h1 className="text-lg font-bold">Explorate</h1>
          <ul className="flex flex-col gap-2 mt-3 text-[##E5E5E5]">
            {[
              { name: "About", href: "/about" },
              { name: "Partners", href: "/" },
              { name: "Job Opportunities", href: "/" },
              { name: "Advertise", href: "/" },
              { name: "Contact", href: "/contact" },
            ].map((items, index) => (
              <Link
                href={items.href}
                key={index}
                className="text-xs text-[#E5E5E5]"
              >
                <li className="transtition ease-linear hover:text-[#D4A373]">
                  {items.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-auto">
          <h1>Category</h1>
          <ul className="flex flex-col mt-3  gap-3">
            {["Adventure", "Fashion", "Travel", "Technology", "Branding"].map(
              (items, index) => (
                <Link href={"."} key={index} className="text-xs text-[#E5E5E5]">
                  <li className="transtition ease-linear hover:text-[#D4A373]">
                    {items}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#343A40] flex justify-between items-center">
        <h1 className="text-white p-8">
          2021 | The Daily Scroll Publisher Studio
        </h1>
        <div className="flex gap-2 p-4">
          <Link  href={''}>
            <FaFacebook
              size={20}
              className="transtition ease-linear hover:text-[#D4A373]"
            />
          </Link>
          <Link  href={''}>
            <FaTwitter
              size={20}
              className="transtition ease-linear hover:text-[#D4A373]"
            />
          </Link>
          <Link href={''}>
            <FaInstagram
              size={20}
              className="transtition ease-linear hover:text-[#D4A373]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

