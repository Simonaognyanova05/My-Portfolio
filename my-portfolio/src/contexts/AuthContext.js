import { useState, useEffect, createContext, useContext } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
};

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(() => {
        const storedAdmin = localStorage.getItem('admin');
        return storedAdmin ? JSON.parse(storedAdmin) : initialState;
    });

    const onLoginAdmin = (authData) => {
        setAdmin(authData);
        localStorage.setItem('admin', JSON.stringify(authData));
    };

    const onLogoutAdmin = () => {
        setAdmin(initialState);
        localStorage.removeItem('admin');
    }
    return (
        <AuthContext.Provider value={{ admin, onLoginAdmin, onLogoutAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    let authResult = useContext(AuthContext);

    return authResult;
}