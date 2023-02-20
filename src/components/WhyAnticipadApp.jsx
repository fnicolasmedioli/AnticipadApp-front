import { AnimationOnScroll } from "react-animation-on-scroll";

import { AppBenefitsList } from ".";

export const WhyAnticipadApp = () => {
    return (
        <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOnce
            offset={1550}
        >
            <section>
                <div
                    className="container-md why-anticipadapp"
                    style={{
                        paddingBottom: "100px",
                    }}
                >
                    <div className="row gy-4">
                        <div className="col-12 col-sm-6 px-5">
                            <span className="why-anticipadapp-question">
                                ¿Por qué AnticipadApp?
                            </span>

                            <span className="why-anticipadapp-response">
                                ¡AnticipadApp es la mejor forma de comprar
                                entradas online! Con nuestra app, podés
                                disfrutar de los siguientes beneficios:
                            </span>
                        </div>
                        <div className="col-12 col-sm-6">
                            <AppBenefitsList />
                        </div>
                    </div>
                </div>
            </section>
        </AnimationOnScroll>
    );
};
