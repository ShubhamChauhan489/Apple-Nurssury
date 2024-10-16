import React from "react";
import photo from "../../asssets/images/Frame 54.jpg";
import send from "../../asssets/icons/send.svg";
import whatsApp from "../../asssets/icons/whatsapp.svg";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className=" mx-auto w-5/6 flex mt-36 items-center justify-center gap-10"
    >
      <div className="w-1/3 flex flex-col px-4">
        <h2 className="text-5xl font-semibold">
          Contact <span className="text-red-500">Us</span>
        </h2>
        <p className="text-xs text-neutral-500 mt-4">
          Have questions or need advice on starting your orchard? <br /> Reach
          out to us—we're here to help!
        </p>
      </div>
      <div className="w-2/3 flex border">
        <div>
          <img className="object-cover" src={photo} alt="image" />
        </div>
        <div className="px-4 py-4">
          <h6 className="mt-8 text-3xl font-medium text-red-500">
            Get in Touch
          </h6>
          <div className="flex flex-col mt-6">
            <input
              className="bg-neutral-100 border rounded-sm text-xs px-4 w-96 py-1.5 "
              type="text"
              name=""
              id=""
              placeholder="Enter a Email"
            />
            <textarea
              className="bg-neutral-100 border rounded-sm text-xs  w-96 h-16 mt-4 py-1.5 px-4"
              maxLength={500}
              name="discription"
              id=""
              placeholder="Description.."
            />
          </div>
          <div className="flex items-center mt-4 bg-red-600 px-4 py-2 h-9 text-white text-xs gap-2 w-20 rounded-md">
            <button>Send</button>
            <img src={send} alt="logo" />
          </div>
          <div className="flex items-center mt-6 gap-2">
            <img src={whatsApp} alt="logo" />
            <p className="text-xs text-neutral-400 underline">
              Contact us through whatsapp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
