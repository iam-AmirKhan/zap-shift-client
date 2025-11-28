import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoUR } = review;
  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Quote Icon */}
          <div className="mb-4">
            <FaQuoteLeft className="text-4xl text-info opacity-30" />
          </div>

          {/* Review Text */}
          <p className="text-gray-700 leading-relaxed mb-6">{testimonial}</p>

          {/* Dotted Divider */}
          <div className="divider before:bg-dotted after:bg-dotted"></div>

          {/* Reviewer Info */}
          <div className="flex items-center gap-4 mt-2">
            <div className="w-14 rounded-full bg-primary">
              <img src={user_photoUR} alt="" />
            </div>
          </div>

          {/* Name and Title */}
          <div>
            <h3 className="font-bold text-lg text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
