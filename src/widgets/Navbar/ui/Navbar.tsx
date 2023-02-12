import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?:string;
}

export const Navbar = ({ className }: INavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.Links}>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
        </div>
    </div>
);
