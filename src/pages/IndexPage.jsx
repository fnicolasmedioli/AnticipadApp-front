import { GlobalHeader } from "../global/components";
import { MainImage, NextEventsBanner, WhyAnticipadApp } from "../index/components";

import { LoginBox } from "../auth/components";

export const IndexPage = () =>
{
    return (
        <>
            <GlobalHeader />
            <MainImage />
            <NextEventsBanner />

            <div className="view view-first">
                <figure>
                    <a href="#">
                        <img src="#" alt="" />
                        <figcaption className="mask">
                            <h2>Tets</h2>
                            <p>Jeje</p>
                            <p>Juju</p>
                            <p className="btn btn-info">Comprar</p>
                        </figcaption>
                    </a>
                </figure>
            </div>

            <WhyAnticipadApp />
        </>
    );
};