import { GenericTemplate } from "./templates";
import { SignupBox } from "../components";

export const SignupPage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div
                    className="col form-container"
                    style={{
                        minHeight: "100vh",
                    }}
                >
                    <SignupBox></SignupBox>
                </div>
                <div
                    className="col d-none d-lg-block"
                    style={{
                        backgroundImage: `url("/assets/images/bg-img4.jpg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center bottom",
                    }}
                ></div>
            </div>
        </div>
    );
};
