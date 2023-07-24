import React, { createContext, useState, useContext, ReactNode } from 'react';

import { api } from '../services/api';
import { Alert } from 'react-native';

interface User {
    id: string,
    email: string,
    name: string,
    driver_license: string,
    avatar: string,
}

interface AuthState {
    token: string,
    user: User,
}

interface SignInCredentials {
    email: string,
    password: string
}

interface AuthContextData {
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<AuthState>({} as AuthState)

    async function signIn({ email, password }: SignInCredentials) {
        try {
            const response = await api.post('/sessions', {
                email,
                password,
            });

            const { token, user } = response.data;
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ token, user });
        } catch (error) {
            const apiError = error as { response?: { status: number } };

            if (apiError.response && apiError.response.status === 401) {
                // Handle invalid credentials, e.g., display an error message to the user
                Alert.alert('Erro na autenticação', 'Credenciais invalidas. Por favor verifique o email e senha e tente novamente');
            } else {
                // Handle other errors, e.g., display a generic error message
                Alert.alert('Erro na autenticação', 'Credenciais invalidas. Por favor verifique o email e senha e tente novamente');
            }
        }
    }

    return (
        <AuthContext.Provider
            value={{ user: data.user, signIn }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }





