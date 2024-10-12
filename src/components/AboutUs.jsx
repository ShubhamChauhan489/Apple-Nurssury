import React from "react";
import img1 from "../../asssets/images/img1.jpg";
import img2 from "../../asssets/images/img2.jpg";
import img3 from "../../asssets/images/img3.jpg";
import Support from "../../asssets/icons/support.svg"
import Seedling from "../../asssets/icons/seedling.svg"
import NaturalSVG from "../../asssets/icons/natural.png"

const AboutUs = () => {
  return (
    <div className="mt-36 flex flex-col justify-center items-center ">
      <div className="w-1/2 text-center">
        <h2 className="font-medium text-4xl">
          <spam className="text-red-500">Our Passion:</spam> Helping You
          Cultivate Thriving Apple Orchards
        </h2>
        <p className="text-sm mt-4 text-neutral-500">
          We're committed to helping gardeners and farmers grow healthy apple
          orchards. With years of experience, we provide high-quality apple
          plants for personal and commercial success.
        </p>
      </div>
      <div className="mt-10 relative flex items-center justify-center">
        <img src={img3} className="absolute top-4 -left-1/2" alt="image" />
        <img src={img1} alt="img" className="z-50" />
        <img src={img2} alt="image" className="absolute top-4 -right-1/2" />
      </div>
      <div className="mt-20">
        <ul className="flex gap-20 [&>li]:flex [&>li]:flex-col [&>li]:items-center ">
          <li>
            <img className="w-11" src={NaturalSVG} alt="natural" />
            <h6 className="text-lg font-semibold text-green-600"> 100% Organic Plants</h6>
            <p className="text-xs text-neutral-500 mt-2">Naturally Grown for Your Garden</p>
          </li>
          <li>
            <img src={Seedling} alt="seedling" />
            <h6 className="text-lg font-semibold text-green-600">High-Quality Seeds</h6>
            <p className="text-xs text-neutral-500 mt-2">Robust and Resilient Varieties
            </p>
          </li>
          <li>
            <img src={Support} alt="support" />
            <h6 className="text-lg font-semibold text-green-600">Expert Support</h6>
            <p className="text-xs text-neutral-500 mt-2">Guidance Every Step of the Way</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
