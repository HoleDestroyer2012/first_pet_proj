import { Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProviders/index";
import { classNames } from "shared/lib/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />}></Route>
                    <Route path={"/"} element={<MainPage />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
