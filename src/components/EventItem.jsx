

export const EventItem = ({title, img}) =>
{
    return (
        <div className="view view-first">
            <figure>
                <a href="#">
                    <img src={img} alt="" />
                    <figcaption className="mask">
                        <h2>{title}</h2>
                        <p>Jeje</p>
                        <p>Juju</p>
                        <p className="btn btn-info">Comprar</p>
                    </figcaption>
                </a>
            </figure>
        </div>
    );
};