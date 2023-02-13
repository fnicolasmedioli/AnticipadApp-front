export const AppBenefitsItem = ({title, text, icon}) =>
{
    return (
        <div className="container-fuid">
            <div className="row app-benefits-item py-3 px-2">
                <div className="col-3 benefit-icon" style={{
                    backgroundImage: `url('${icon}')`
                }}></div>
                <div className="col-9">
                    <span className="app-benefits-item-title">{title}</span>
                    <br />
                    <i className="app-benefits-item-text">{text}</i>
                </div>
            </div>
        </div>
    );
};