'use client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import routes from 'lib/routes';
import { apiRequest } from 'utils/api';

interface User {
    name: string;
    email: string;
    [key: string]: string | number;
}

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextType {
    user: User | null;
    loading: boolean;
    fetchUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUser = async () => {
        try {
            const endpoint = routes.userProfile;
            const method = "GET";
            const response: User = await apiRequest<User>(endpoint, method);
            setUser(response);

        } catch (error) {
            console.error("Error fetching user: ", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, fetchUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext(): UserContextType {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
}
