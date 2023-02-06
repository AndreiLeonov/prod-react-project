import { useContext } from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";


interface IUseThemeHook {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): IUseThemeHook {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const currentTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(currentTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme)
    }

    return {
        toggleTheme,
        theme
    }
}