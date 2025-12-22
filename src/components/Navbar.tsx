import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";


const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="bg-[#241431]">
            <div className="container mx-auto flex justify-between items-center ">
                <h1 className="text-[#1dc7bd] text-2xl font-bold">NicoDev</h1>
                <div className="flex space-x-8 items-center text-lg font-semibold">
                    <a href="#home" className="text-[#1dc7bd] hover:border-b-2 hover:border-[#1dc7bd] hover:py-2">{t("navbar.home")}</a>
                    <a href="#projects" className="text-[#1dc7bd] hover:border-b-2 hover:border-[#1dc7bd] hover:py-2">{t("navbar.projects")}</a>
                    <a href="#about" className="bg-[#a75ec1] text-white px-4 py-2 rounded-md hover:bg-[#964db1]">{t("navbar.about")}</a>
                    <a href="#contact" className="text-[#724880] hover:border-b-2 hover:border-[#724880] hover:py-2">{t("navbar.contact")}</a>
                </div>
                <div className="flex justify-end p-4">
                    <LanguageSwitcher />
                </div>
            </div>

        </nav>
    )
}

export default Navbar;