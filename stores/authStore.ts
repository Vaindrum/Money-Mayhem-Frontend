import {create} from 'zustand';

interface AuthState{
    user: null | {username: string};
    setUser: (user: {username: string}) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({user}),
    logout: () => set({user: null}),
}))