import Accordion from "react-bootstrap/Accordion";

import { GenericTemplate } from "./templates";

export const FAQPage = () =>
{
    return (
    <GenericTemplate>
        <div className="container" style={{
            position: "relative",
            top: "2rem"
        }}>
            <Accordion flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>¿Debo registrarme para poder comprar?</Accordion.Header>
                <Accordion.Body>
                Si, ingresando en "Registrarse" deberá crear un usuario ingresando un email válido.
                A este mail te llegarán los tickets electrónicos.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>NO ME LLEGÓ EL EMAIL DE CONFIRMACIÓN DE COMPRA.</Accordion.Header>
                <Accordion.Body>
                Le sugerimos consultar la bandeja de SPAM/Correo no deseado, es posible que se encuentre ahí. En caso de no ubicarlo podrá iniciar sesión ingresando en "Mi Cuenta", donde podrá consultar el historial de compra. Para solicitar un reenvío debe contactarse desde la misma cuenta de email con la que realizó la compra.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>¿CÓMO DESCARGO MI ETICKET DESDE LA APP?</Accordion.Header>
                <Accordion.Body>
                Haciendo clic en "DESCARGA TU TICKET AQUÍ" será derivado a la web de AnticipadApp donde deberá loguearse con el mismo email y contraseña utilizados para la compra de entradas. Una vez completado todos los campos requeridos, se descargará el ticket electrónico en formato de archivo PDF. Le recomendamos llevarlo impreso o bien mostrarlo desde tu celular.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>¿CÓMO DESCARGO MI TICKET SI NO ENCUENTRO EL EMAIL DE CONFIRMACIÓN DE COMPRA?</Accordion.Header>
                <Accordion.Body>
                Ingresando en nuestra web deberá hacer clic en “DESCARGA TU Eticket” y loguearse con el mismo email y contraseña utilizados para la compra de entradas. Ir a la pestaña "MIS COMPRAS", visualice su número de ORDEN y haga clic en el icono "DESCARGAR eTicket". Una vez completado todos los CAMPOS requeridos además de la DDJJ, se descargará el eTicket electrónico en formato de archivo PDF. Le recomendamos llevarlo impreso o bien mostrarlo desde tu celular.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>¿QUÉ TIEMPO TENGO PARA DESCARGAR MI eTICKET?</Accordion.Header>
                <Accordion.Body>
                La descarga del eTicket electrónico estará habilitado desde una semana antes del evento hasta 2 hs antes del comienzo de la función. Tenga en cuenta que una vez comenzado el espectáculo se bloquea la descarga del mismo.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>¿SI NO ASISTÍ AL EVENTO PUEDO SOLICITAR LA CANCELACIÓN?</Accordion.Header>
                <Accordion.Body>
                No. La ubicación que adquirió quedó sin utilizar el día de la función. Lamentablemente una vez realizado el evento no es posible realizar una devolución.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>NO RECUERDO LA CLAVE ¿CÓMO RESETEO MI CLAVE?</Accordion.Header>
                <Accordion.Body>
                Ingrese al evento para el cual adquirió entradas. Desde esa misma página, haga clic en el icono MI CUENTA, se deslizará el panel de ingreso. Encontrará la opción RECUPERAR CLAVE. Ingrese el email con el cual realizó la compra y haga clic en CONTINUAR y siga los pasos.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>TENGO UN COBRO DUPLICADO.</Accordion.Header>
                <Accordion.Body>
                Lamentamos mucho lo sucedido, no se preocupe estamos para ayudarle. Tenga en cuenta que el valor de la entrada y el valor de los cargos por servicio figuran separados en el resumen o movimiento de tarjeta. Por favor escríbanos vía email a anticipadapp@gmail.com
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
                <Accordion.Header>Qué debo presentar para ingresar al Evento?</Accordion.Header>
                <Accordion.Body>
                Cuando ingreses al evento te van a pedir:
                Las entradas descargadas ya sea en el celular en formato QR o el PDF impreso en formato papel.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
                <Accordion.Header>TENGO UN COBRO DUPLICADO.</Accordion.Header>
                <Accordion.Body>
                Lamentamos mucho lo sucedido, no se preocupe estamos para ayudarle. Tenga en cuenta que el valor de la entrada y el valor de los cargos por servicio figuran separados en el resumen o movimiento de tarjeta. Por favor escríbanos vía email a anticipadapp@gmail.com
                </Accordion.Body>
            </Accordion.Item>            
            
            </Accordion>
        </div>
    </GenericTemplate>
    );
};