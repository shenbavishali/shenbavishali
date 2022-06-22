import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container" 
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={AVTR1} alt="Avatar one" />
            </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repudiandae debitis fuga eos pariatur quo cum minus mollitia temporibus, sunt quod officia dolorem nisi corrupti tempora accusantium quae? Amet, officiis?
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={AVTR2} alt="Avatar one" />
            </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repudiandae debitis fuga eos pariatur quo cum minus mollitia temporibus, sunt quod officia dolorem nisi corrupti tempora accusantium quae? Amet, officiis?
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={AVTR3} alt="Avatar one" />
            </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repudiandae debitis fuga eos pariatur quo cum minus mollitia temporibus, sunt quod officia dolorem nisi corrupti tempora accusantium quae? Amet, officiis?
            </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className='client_avatar'>
            <img src={AVTR4} alt="Avatar one" />
            </div>
            <h5 className='client_name'>Ernest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt repudiandae debitis fuga eos pariatur quo cum minus mollitia temporibus, sunt quod officia dolorem nisi corrupti tempora accusantium quae? Amet, officiis?
            </small>
        </SwiperSlide>        
        </Swiper>
    </section>
  )
}

export default Testimonials