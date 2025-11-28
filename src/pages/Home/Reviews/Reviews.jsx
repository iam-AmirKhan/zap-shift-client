import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <div className="my-24">
      <div className="text-center my-12">
        <h3 className="text-3xl text-center font-bold my-8">Reviews</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          vel iure eum distinctio architecto nulla voluptatibus rerum nisi
          debitis. Earum ut impedit voluptate ipsum recusandae voluptates fuga
          facilis alias nostrum.
        </p>
      </div>
      <Swiper
        loop="true"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
