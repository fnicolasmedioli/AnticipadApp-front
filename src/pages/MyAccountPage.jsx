import { GenericTemplate } from "./templates";

export const MyAccountPage = () => {
    return (
        <GenericTemplate>
            <div className="my-account-page">
                <div className="container">
                    <div className="section-box">
                        <h2 className="title">Seguridad de la cuenta</h2>
                        <hr />

                        <label htmlFor="current-email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            placeholder="test@test.com"
                            id="current-email"
                        />
                    </div>
                </div>
            </div>
        </GenericTemplate>
    );
};
