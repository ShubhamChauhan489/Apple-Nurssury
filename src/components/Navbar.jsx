import React from 'react'
import logoLight from "../../asssets/icons/logo-light.svg"
import profile from "../../asssets/icons/Vector.svg"
import cart from "../../asssets/icons/mdi_cart-outline.svg"

const Navbar = () => {
  return (
    <div className='flex justify-between top-0 right-0 py-4 left-1/2 -translate-x-1/2 bg-transparent w-full px-16 mx-auto absolute'>
        <img src={logoLight} alt="logo"/>
        <div className='flex items-center gap-28 '>
        <ul className='flex gap-16 text-gray-500'>
            <li className='hover:text-red-500 cursor-pointer text-sm'>Home</li>
            <li className='hover:text-red-500 cursor-pointer text-sm'>Product</li>
            <li className='hover:text-red-500 cursor-pointer text-sm'>About Us</li>
            <li className='hover:text-red-500 cursor-pointer text-sm'>Contact Us</li>
        </ul>

        <div className='flex justify-end gap-6 '>
            <img className='cursor-pointer'src={cart} alt="cart" />
            <img  className='bg-gray-200 rounded-full px-2 py-2  cursor-pointer' src={profile} alt="Profile" />
        </div>
        </div>
    </div>
  )
}

export default Navbar