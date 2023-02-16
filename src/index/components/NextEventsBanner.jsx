import { useEffect, useState } from "react";

import axios from "axios";

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Pagination, Navigation} from 'swiper';

import slide_image_1 from "../../../public/assets/images/events/bresh.jpg";
import slide_image_2 from "../../../public/assets/images/events/glow-juevete.jpg";
import slide_image_3 from "../../../public/assets/images/events/one-party.jpg";
import slide_image_4 from "../../../public/assets/images/events/sol-domingo.jpg";
import slide_image_5 from "../../../public/assets/images/events/summer-glitter.jpg";
import slide_image_6 from "../../../public/assets/images/events/summer-+25.jpg";




export const NextEventsBanner = () =>
{
    let [city, setCity] = useState(null);
    let [region, setRegion] = useState(null);

    let locationText = (city && region) ? `${city}, ${region}` : null;
    
    useEffect(() => {

        console.log("haciendo peticion");

        axios.request({
            method: "get",
            url: "https://cors-anywhere.herokuapp.com/https://ip-api.org/json/",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Credentials": "true"
            }
        })
        .then(response => {
            setCity(response.data.city);
            setRegion(response.data.region);
        })
        .catch(console.error);

    }, []);

    return (
        <section id="next-events-section">
            {/* <div className="container-fluid next-events-banner">
                <div className="row">
                    <h2 className="next-events-text">
                        <span>Próximos eventos:</span>
                        <i className="location-text">
                            { (locationText) ? (" " + locationText) : null }
                        </i>
                    </h2>
                    <h4>...</h4>
                    <hr />
                </div>
            </div> */}
            <div className="container-events">
                <h2 className="next-events-text">
                    <span>Próximos eventos en:</span>
                    <i className="location-text">
                            { (locationText) ? (" " + locationText) : null }
                    </i>
                </h2>

                <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,

                    }
                }
                pagination={{ el: '.swiper-pagination',clickable: true }}
                navigation={{   nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true, 
                            }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className = "swiper-container"
                >
                    <SwiperSlide>
                        <img src={slide_image_1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_6} alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination">

                        </div>
                    </div>
                </Swiper>

                <hr />
            </div>

        </section>
    );
};