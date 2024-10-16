import React, { useEffect, useState } from "react";
import logoLight from "../../asssets/icons/logo-light.svg";
import profile from "../../asssets/icons/Vector.svg";
import cart from "../../asssets/icons/mdi_cart-outline.svg";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && isVisible) {
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY && !isVisible) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isVisible]);

  return (
    <div
      className="w-full flex justify-between top-0 right-0 py-4  bg-transparent  px-16 mx-auto fixed "
      style={{
        transition: "transform 0.3s ease",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <img src={logoLight} alt="logo" />
      <div className="flex items-center gap-28 ">
        <ul className="flex gap-16 text-gray-500">
          <li className="hover:text-red-500 cursor-pointer text-sm">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-red-500 cursor-pointer text-sm">
            <a href="">Product</a>
          </li>
          <li className="hover:text-red-500 cursor-pointer text-sm">
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-red-500 cursor-pointer text-sm">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        <div className="flex justify-end gap-6 ">
          <img className="cursor-pointer" src={cart} alt="cart" />
          <img
            className="bg-gray-200 rounded-full px-2 py-2  cursor-pointer"
            src={profile}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
