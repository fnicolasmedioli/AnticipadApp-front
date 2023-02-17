import { useEffect, useState } from "react";

import axios from "axios";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {EffectCoverflow, Pagination, Navigation} from "swiper";

import slide_image_1 from "/assets/images/events/bresh.jpg";
import slide_image_2 from "/assets/images/events/glow-juevete.jpg";
import slide_image_3 from "/assets/images/events/one-party.jpg";
import slide_image_4 from "/assets/images/events/sol-domingo.jpg";
import slide_image_5 from "/assets/images/events/summer-glitter.jpg";
import slide_image_6 from "/assets/images/events/summer-+25.jpg";

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
            
            <div className="container-events">
                  
                 <h2 className="next-events-text">
                    <span>Próximos eventos
                    {
                        (() => {
                            if (locationText) return (
                                <span>
                                    <span> en: </span>
                                    <br />
                                    <i className="location-text">
                                        { locationText }
                                    </i>
                                </span>
                            );
                        })()
                    }
                    </span>
                </h2>        

                <div className="swiper-container">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor
                        centeredSlides
                        loop
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 120,
                            modifier: 2.5
                        }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{   
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: true, 
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        // className = "swiper-container"
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
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>

                <hr />
            </div>

        </section>
    );
};