import { useEffect, useState } from 'react';
const getInitialTheme = () => {
    if (typeof window === 'undefined')
        return 'light';
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
};
export const useTheme = () => {
    const [theme, setTheme] = useState(getInitialTheme);
    const applyTheme = (next) => {
        if (typeof window === 'undefined')
            return;
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    };
    const toggleTheme = () => {
        const next = theme === 'light' ? 'dark' : 'light';
        setTheme(next);
        applyTheme(next);
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme]);
    return { theme, toggleTheme };
};
