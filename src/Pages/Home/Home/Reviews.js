import React, { useEffect, useState } from 'react';
import './Reviews.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://nameless-oasis-38976.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const rev = [...reviews];
    const newReviews = rev.reverse()
    return (
        <div className='mx-20 py-10'>
            <h1 className='text-center fnt-os text-6xl font-bold mb-20'>What Our Coustomar Says!</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    newReviews.map((review, index) => <SwiperSlide><ReviewCard
                        key={index}
                        feedback={review}
                    ></ReviewCard></SwiperSlide>)
                }

                <br />
                <br />
                <br />

            </Swiper>


        </div>
    );
};

export default Reviews;