import React from "react";
import profile1 from "../../asssets/images/Ellipse 1.png";
import profile2 from "../../asssets/images/Ellipse 2.png";
import profile3 from "../../asssets/images/Ellipse 3.png";

const CustomerSay = () => {
  return (
    <div className="mt-32 flex-col items-center justify-center ">
      <h2 className="font-medium text-4xl  text-center">
        What Our <span className="text-red-500">Customers</span> Say
      </h2>
      <div className="mt-6 mx-auto w-5/6 gap-4 flex items-center justify-center px-4 py-4">
        <div className="border flex flex-col px-6 py-2">
          <h6 className="text-red-500 text-xl mt-2">Amazing Quality!</h6>
          <p className="text-xs text-neutral-500 mt-4">
            The apple plants I purchased grew quickly and produced a great
            harvest in the first year. Their organic plants are truly top-notch!
          </p>
          <div className="flex  items-center gap-4 mt-4">
            <img src={profile3} alt="UserProfile" />
            <p className="text-xs italic text-neutral-400 font-light">
              Sarah T., Home Gardener
            </p>
          </div>
        </div>
        <div className="border flex flex-col px-6 py-2">
          <h6 className="text-red-500 text-xl mt-2">Perfect for My Orchard</h6>
          <p className="text-xs text-neutral-500 mt-4">
            As a farmer, I need reliable and resilient plants. These apple
            plants exceeded my expectations with strong growth and disease
            resistance.
          </p>
          <div className="flex  items-center gap-4 mt-4">
            <img src={profile1} alt="UserProfile" />
            <p className="text-xs italic text-neutral-400 font-light">
              John M., Orchard Owner
            </p>
          </div>
        </div>
        <div className="border flex flex-col px-6 py-2 bg-red-500">
          <h6 className="text-white text-xl mt-2">Highly Recommend!</h6>
          <p className="text-xs text-white mt-4">
            I was new to growing apple trees, but their expert support made the
            process so easy. Now, my small garden is full of thriving apple
            trees.
          </p>
          <div className="flex  items-center gap-4 mt-4">
            <img className='border-white border rounded-full'src={profile2} alt="UserProfile" />
            <p className="text-xs italic text-white font-light">
              Andrew T., Home Gardener
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
