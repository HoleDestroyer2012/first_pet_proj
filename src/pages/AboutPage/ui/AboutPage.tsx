import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation()

    return <div>
        {t("О сайте страница")}
    </div>
}

export default AboutPage;