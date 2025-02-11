import React from "react";
import img from "/logo.png";
import Contact from "../Contact/contact";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white bottom-0">
      <div className=" w-full h-full mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 p-10">
        <div>
          <h3 className="font-bold text-lg mb-4">XYZ Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Branches
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Release Notes
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Community</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Dribbble
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Podcast
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white">
                Legal
              </a>
            </li>
          </ul>
        </div>
        <div className="container mx-auto mt-28 flex flex-col items-start pt-8">
          <img src={img} alt="" className="w-8 h-8 rounded" />
          <p className="text-gray-400 text-sm mt-4">
            &copy; Copyright 2024 XYZ Company Design, Inc. All rights reserved
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
