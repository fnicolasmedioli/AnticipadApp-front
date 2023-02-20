import { UserContext } from ".";

export const UserProvider = ({ children, value }) => {
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
