import { GlobalHeader } from "../../components";

export const GenericTemplate = ({ children }) => {
    return (
        <>
            <GlobalHeader />
            {children}
        </>
    );
};
