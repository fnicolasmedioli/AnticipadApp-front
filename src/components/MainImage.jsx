import Image from "react-bootstrap/Image";

export const MainImage = () =>
{

    return (
        <div className="background-image">
            <div className="text-centered">
                <h1>La entrada perfecta para una noche perfecta</h1>
                <h2>No pierdas tiempo, compra tu entrada online en segundos!</h2>

                <div className="emoji-container">
                    <Image src="/../../assets/emojis/bailarina.png" alt="emoji emotion" />
                    <Image src="/../../assets/emojis/bailarin.png" alt="emoji emotion" />
                    <Image src="/../../assets/emojis/teatro.png" alt="emoji emotion" />
                    <Image src="/../../assets/emojis/cerveza.png" alt="emoji emotion" />
                    <Image src="/../../assets/emojis/anteojos.png" alt="emoji emotion" />
                </div>

                <button className="btn btn-info">Próximos eventos</button>

            </div>
            
        </div>
    );

};