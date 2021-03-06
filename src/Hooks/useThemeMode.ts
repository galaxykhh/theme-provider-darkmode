import { useState, useEffect } from "react"
import { ThemeType } from "../interfaces"

export const useThemeMode = () => {
    const [theme, setTheme] = useState<ThemeType>('light');
    const [mounted, setMounted] = useState<boolean>(false);

    const saveTheme = (theme: ThemeType): void => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
    };

    const toggler = (): void => {
        theme === 'light' ? saveTheme('dark') : saveTheme('light');
    };

    useEffect(() => {
        const savedTheme: any = localStorage.getItem('theme');
        savedTheme ? setTheme(savedTheme) : setTheme('light');
        setMounted(true);
    }, []);

    return {
        theme,
        mounted,
        toggler,
    };
};