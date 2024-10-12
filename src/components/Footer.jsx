import React from "react";
import logo2 from "../../asssets/icons/logo-light.svg";
import social1 from "../../asssets/icons/landingPage/facebook.svg";
import social2 from "../../asssets/icons/landingPage/instagram.svg";
import social3 from "../../asssets/icons/landingPage/mail.svg";
import social4 from "../../asssets/icons/landingPage/twitter.svg";

const Footer = () => {
  return (
    <div className="mt-32 py-8 px-8 text-neutral-500 text-xs bg-black ">
      <div className="flex justify-between px-24 gap-20">
        <div className="">
          <img src={logo2} alt="logo" />
          <p className="mb-4 mt-2">
            Grow Your Dream Orchard with Our Premium Apple Plants
          </p>
          <p className="text-white"> Social Links</p>
          <div className="mt-2 ">
           
            <ul className="flex items-center  gap-2">
              <li>
                <img src={social1} alt="" />
              </li>
              <li>
                <img src={social2} alt="" />
              </li>
              <li>
                <img src={social3} alt="" />
              </li>
              <li>
                <img src={social4} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-white mb-4">Useful links</p>
          
          <ul className="mt-4 flex flex-col gap-2">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p className="text-white">Quick Links</p>
          <ul className="flex flex-col gap-2 mt-4">
            <li>Variety</li>
            <li>Plants</li>
            <li>Seeds</li>
            <li>Term & Condition</li>
          </ul>
        </div>
        <div className="">
          <h6 className="text-sm font-semibold">Join Our Newsletter</h6>
          <div className="mt-3 flex items-center gap-3">
            <input className=" bg-neutral-800 px-2 rounded-md border border-neutral-700/25 py-1 text-xs" type="text" placeholder="Enter Email" />
            <button className="bg-red-500 text-white rounded-md px-4 py-1 text-[9px]">Join Now</button>
          </div>
          <p className="text-[10px] mt-2">Hurry up, to get latest details related plants</p>
        </div>
      </div>
      <hr className="opacity-10 mt-10" />
      <div className="flex items-center justify-center mt-6 gap-2">
        <p className="">All copyrights reserved by</p>
        <img className=" h-4 opacity-50" src={logo2} alt="" />
      </div>
    </div>
  );
};

export default Footer;
