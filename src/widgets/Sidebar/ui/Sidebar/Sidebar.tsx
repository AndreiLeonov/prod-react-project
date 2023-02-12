import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface ISidebarProps {
    className?:string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const onToggle = () => {
        setIsCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: isCollapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};
