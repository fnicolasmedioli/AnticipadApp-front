import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useContext } from "react";

import { UserContext } from "../context";

const slideImageArray = [
    "/assets/images/events/bresh.jpg",
    "/assets/images/events/glow-juevete.jpg",
    "/assets/images/events/one-party.jpg",
    "/assets/images/events/sol-domingo.jpg",
    "/assets/images/events/summer-glitter.jpg",
    "/assets/images/events/summer-+25.jpg",
    "/assets/images/events/coldplay.avif",
    "/assets/images/events/guns.png",
    "/assets/images/events/metallica.jpg",
    "/assets/images/events/daddy_yankee.jpg",
    "/assets/images/events/duki.jpg",
    "/assets/images/events/maria_becerra.jpg",
];

export const NextEventsBanner = () => {
    const { userData } = useContext(UserContext);
    const city = userData?.location?.city;
    const region = userData?.location?.region;

    const locationText = city && region ? `${city}, ${region}` : null;
    const activateLoop = slideImageArray.length > 10;

    return (
        <section id="next-events-section">
            <div className="container-events">
                <div className="next-events-box">
                    <h2 className="next-events-text">
                        <span>
                            Próximos eventos
                            {(() => {
                                if (locationText)
                                    return (
                                        <span>
                                            <span> en: </span>
                                            <br />
                                            <i className="location-text">
                                                {locationText}
                                            </i>
                                        </span>
                                    );
                            })()}
                        </span>
                    </h2>
                </div>

                <Swiper
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView={"auto"}
                    loop={activateLoop}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 120,
                        modifier: 2.5,
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper-container"
                >
                    {slideImageArray.map((url, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                backgroundImage: `url("${url}")`,
                            }}
                        />
                    ))}

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

                <hr />
            </div>
        </section>
    );
};
