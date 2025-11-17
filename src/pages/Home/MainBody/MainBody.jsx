import React from "react";
import img from "../../../assets/service.png";

const MainBody = () => {
  return (
    <div className="bg-secondary px-8 py-12 mt-20">
      <h1 className="text-white font-bold text-center">Our Services</h1>
      <p className="text-white mt-4">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <div className="grid grid-cols-3 mt-10 gap-5">
        <div className="bg-white rounded-xl shadow p-10">
          <img src={img} className="text-center mx-auto" alt="" />
          <h2 className="font-bold text-3xl mb-3 mt-3">
            Cash on Home Delivery
          </h2>
          <p className="text-gray-600">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-10">
          <img src={img} className="text-center mx-auto" alt="" />
          <h2 className="font-bold text-3xl mb-3 mt-3">
            Cash on Home Delivery
          </h2>
          <p className="text-gray-600">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-10">
          <img src={img} className="text-center mx-auto" alt="" />
          <h2 className="font-bold text-3xl mb-3 mt-3">
            Cash on Home Delivery
          </h2>
          <p className="text-gray-600">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-10">
          <img src={img} className="text-center mx-auto" alt="" />
          <h2 className="font-bold text-3xl mb-3 mt-3">
            Cash on Home Delivery
          </h2>
          <p className="text-gray-600">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-10">
          <img src={img} className="text-center mx-auto" alt="" />
          <h2 className="font-bold text-3xl mb-3 mt-3">
            Cash on Home Delivery
          </h2>
          <p className="text-gray-600">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-10">
          <img src={img} className="text-center mx-auto" alt="" />
          <h2 className="font-bold text-3xl mb-3 mt-3">
            Cash on Home Delivery
          </h2>
          <p className="text-gray-600">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
