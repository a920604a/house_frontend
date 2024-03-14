import React, { useContext, createContext, useState } from 'react';

const UserContext = createContext(undefined);

const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [theme, setTheme] = useState("light");

    return (
        <UserContext.Provider value={{ username, setUsername, theme, setTheme }} >
            {children}
        </UserContext.Provider>
    );
};
// export const useUsername = () => useContext(UsernameContext)
export { UserContext, UserProvider };
