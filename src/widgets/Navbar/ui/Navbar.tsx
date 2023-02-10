import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface INavbarProps {
    className?:string;
}

export const Navbar = ({ className }: INavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.Links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
            </div>
        </div>
    );
};
