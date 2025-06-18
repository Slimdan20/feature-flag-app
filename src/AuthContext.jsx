import { createContext, useContext, useState, useEffect } from "react";
import flagsmith from "flagsmith";
const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser){
            setUser(JSON.parse(storedUser));

            const userData = JSON.parse(storedUser);
            flagsmith.identify(userData.email, {
                email: userData.email,
                isDaneycorpsUser: userData.email.endsWith('@daneycorps.com')
            });
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));

        flagsmith.identify(userData.email, {
            email: userData.email,
            isDaneycorpsUser: userData.email.endsWith('@daneycorps.com')
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{user, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);