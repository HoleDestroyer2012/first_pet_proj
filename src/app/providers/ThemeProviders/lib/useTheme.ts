import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
}
