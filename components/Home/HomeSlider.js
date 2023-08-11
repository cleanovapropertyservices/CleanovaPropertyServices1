import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

// Images imported
const slider1 = "/img/slider/commercial-cleaning.png"
const slider2 = "/img/slider/residential-cleaning.png"
const slider3 = "/img/slider/SpecializedCleaningSolutions.png"
const slider4 = "/img/slider/AdditionalCleaningServices.png"
const slider5 = "/img/slider/extraCleaning.png"


export default function HomeSlider() {
    return (
        <>
            <div className="industify_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">

                {/* <!-- Alpha Slider: navigation --> */}
                <div className="owl_control">
                    <div className="fn_prev"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                    <div className="fn_next"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                </div>
                {/* <!-- /Alpha Slider: navigation --> */}

                {/* <!-- Alpha Slider: pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- /Alpha Slider: pagination --> */}

                {/* <!-- Alpha Slider: wrapper --> */}
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: ".fn_prev",
                        nextEl: ".fn_next",
                    }}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    className="custom-class"
                >

                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider1})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <h3><span>Commercial Cleaning</span></h3>
                                        <div className="desc"><span>Cleanova Property Services delivers customized commercial cleaning solutions with a commitment to excellence. Your workspace's shine and your satisfaction are our top priorities.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider2})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <h3><span>Residential Cleaning</span></h3>
                                        <div className="desc"><span>Cleanova Property Services understands the importance of a clean and comfortable home. With a legacy built on expertise and customer satisfaction, we offer residential cleaning services that transform living spaces, ensuring every corner radiates freshness and tranquility.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider3})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <h3><span>Speciality Cleaning</span></h3>
                                        <div className="desc"><span>Cleanova Property Services specializes in transformative cleaning solutions, from deep carpet refreshes to meticulous sterilizations. Our dedicated approach ensures each space feels renewed, reflecting our unwavering commitment to excellence.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider4})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <h3><span>Additional Cleaning Services</span></h3>
                                        <div className="desc"><span>At Cleanova, we delve deeper. From rejuvenating vehicle interiors to tackling pest sanitization, our additional services ensure every corner of your environment is impeccably addressed and revitalized.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                {/* <!-- Alpha Slider: wrapper --> */}

            </div>
            {/* <!-- /Alpha Slider --> */}
        </>
    )
}
