import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface ISidebarProps {
    className?:string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar-test"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
