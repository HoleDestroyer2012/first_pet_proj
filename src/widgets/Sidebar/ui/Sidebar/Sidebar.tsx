import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Button, ButtonSize, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Sidebar.module.scss";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";

interface SidebarProps {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const { t, i18n } = useTranslation();

    return (
        <div
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: !collapsed },
                [className]
            )}
        >
            <Button
                className={classNames(cls.collapsedBtn, {})}
                theme={ThemeButton.BACKGROUND_INVERTED}
                onClick={onToggle}
                square={true}
                size={ButtonSize.L}
            >
                {collapsed ? "<" : ">"}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>{t("Главная")}</span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t("О сайте")}</span>
                </AppLink>
            </div>
            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={!collapsed} />
            </div>
        </div>
    );
};
