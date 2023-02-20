import { AppBenefitsTicket } from ".";

export const AppBenefitsList = () => {
    return (
        <div className="app-benefits-list">
            <AppBenefitsTicket
                title="Comodidad"
                text={
                    <>
                        No más filas de espera.
                        <br />
                        Sin moverte de tu casa.
                        <br />
                        Ahorra tiempo.
                    </>
                }
                icon="/assets/emojis/relieved.png"
            />

            <AppBenefitsTicket
                title="Seguridad"
                text="Utilizamos la última tecnología de seguridad para mantener su información personal y la información de pago segura y protegida."
                icon="/assets/emojis/security.png"
            />

            <AppBenefitsTicket
                title={
                    <>
                        Opciones
                        <br />
                        <span
                            style={{
                                whiteSpace: "nowrap",
                            }}
                        >
                            de pago
                        </span>
                    </>
                }
                text="Elija entre una variedad de opciones de pago, incluidas tarjetas de crédito/débito y servicios de pago en línea, para realizar su compra de forma rápida y sencilla."
                icon="/assets/emojis/credit-card.png"
            />

            <AppBenefitsTicket
                title="Descuentos"
                text="Sé el primero en conocer los descuentos y promociones exclusivas disponibles solo a través de AnticipadApp."
                icon="/assets/emojis/discount.png"
            />
        </div>
    );
};
