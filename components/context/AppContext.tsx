import React, { createContext } from 'react';

export interface Account {
    name: string;
    email: string;
    avatarUrl?: string;
}

interface AppContextType {
    accounts: Account[];
    darkModeOption: string;
    setDarkModeOption: (option: string) => void;
    initialSettingsView: string | null;
    setInitialSettingsView: (view: string | null) => void;
}

export const AppContext = createContext<AppContextType>({
    accounts: [],
    darkModeOption: 'system',
    setDarkModeOption: () => {},
    initialSettingsView: null,
    setInitialSettingsView: () => {},
});
