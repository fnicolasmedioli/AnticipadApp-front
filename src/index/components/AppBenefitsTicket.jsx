

export const AppBenefitsTicket = ({title, text, icon}) =>
{
    return (
        <div className="container ticket-container">
            <div className="bp-card" data-clickthrough="link">
                <div className="bp-card_label">
                    <div className="bd-border_solid"></div>
                    <div className="bd-border_dotted"></div>
                </div>
                <div className="bp-card_content">
                    <h4>{title}</h4>
                    <ul>
                        <li>
                            {text}
                        </li>
                    </ul>
                    <img src={icon} alt="" className="price"/>
                </div>
            </div>
        </div>
    );
};