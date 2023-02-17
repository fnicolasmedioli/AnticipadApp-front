
import { AppBenefitsItem } from ".";

export const AppBenefitsList = () =>
{
    return (
        <div>
            <AppBenefitsItem title="Conveniencia" text="No más filas de espera." icon="/assets/emojis/relieved.png"/>
            <AppBenefitsItem title="Seguridad" text="Utilizamos la última tecnología de seguridad para mantener su información personal y la información de pago segura y protegida." icon="/assets/emojis/security.png" />
            <AppBenefitsItem title="Opciones de pago sencillas" text="Elija entre una variedad de opciones de pago, incluidas tarjetas de crédito/débito y servicios de pago en línea, para realizar su compra de forma rápida y sencilla." icon="/assets/emojis/credit-card.png" />
            <AppBenefitsItem title="Descuentos y promociones exclusivas" text="Sé el primero en conocer los descuentos y promociones exclusivas disponibles solo a través de AnticipadApp." icon="/assets/emojis/discount.png" />
        </div>
    );
};