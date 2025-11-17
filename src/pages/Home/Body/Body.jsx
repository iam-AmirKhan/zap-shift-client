import React from "react";
import img from "../../../assets/bookingIcon.png";
const Body = () => {
  return (
    <div>
        <h1 className="text-secondary font-bold">How it Works</h1>
      <div className="flex gap-6 mt-6">
        <div className="bg-white rounded-xl shadow border border-[rgba(0,0,0,0.04)] p-7">
          <img src={img} alt="" />
          <h4 className="text-secondary font-semibold ">Booking Pick & Drop</h4>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow border border-[rgba(0,0,0,0.04)] p-7">
          <img src={img} alt="" />
          <h4 className="text-secondary font-semibold ">Cash On Delivery</h4>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.{" "}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow border border-[rgba(0,0,0,0.04)] p-7">
          <img src={img} alt="" />
          <h4 className="text-secondary font-semibold ">Delivery Hub</h4>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow border border-[rgba(0,0,0,0.04)] p-7">
          <img src={img} alt="" />
          <h4 className="text-secondary font-semibold ">
            Booking SME & Corporate
          </h4>
          <p className="text-gray-600">
            From personal packages to business shipments — we deliver on time,
            every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
