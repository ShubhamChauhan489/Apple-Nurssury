import React from 'react'
import mainImg from "../../asssets/images/main.jpg"
import watch from "../../asssets/icons/watch-now.svg"
import profile1 from "../../asssets/images/Ellipse 1.png"
import profile2 from "../../asssets/images/Ellipse 2.png"
import profile3 from "../../asssets/images/Ellipse 3.png"
import profile4 from "../../asssets/images/Ellipse 4.png"

const Hero = () => {
  return (
    <div id='home' className='flex h-screen justify-center items-center'>
        <div className='w-1/2'>
            <img className='w-full h-screen object-cover' src={mainImg} alt="img"  />
        </div>
        <div className='w-1/2 h-full px-10 py-56'>
            <h1 className=' font-bold text-5xl'>Grow Your Dream
                Orchard with Our
                Premium <spam className='text-red-500'> Apple</spam> Plants
            </h1>
                        <p className='text-gray-500 mt-4 text-sm '>Whether you're a home gardener or a farmer, our premium apple plants help you grow a thriving orchard. Start cultivating fresh, delicious apples and watch your land flourish!</p>

            <div className='mt-6 flex gap-6'>
                <button className=' px-10 py-2 border rounded-md bg-red-600 text-white text-sm'>Shop Now</button>
                <button className=' px-8 py-2 border-black border rounded-md flex gap-2 items-center text-sm'><img className='text-sm'src={watch} alt="logo" />Watch Now</button>
            </div>
            <div className='flex mt-44 items-center gap-2 self-end'>
                <div className='flex -space-x-4 [&>img]:border-white [&>img]:border-4 [&>img]:rounded-full'>
                <img src={profile1} alt="logo" />
                <img src={profile2} alt="logo" />
                <img src={profile3} alt="logo" />
                <img src={profile4} alt="logo" />
                </div>

                <p className='text-xs text-gray-500'>Trusted by 100+ farmers, loved by gardeners.</p>

            </div>

        </div>
    </div>
  )
}

export default Hero