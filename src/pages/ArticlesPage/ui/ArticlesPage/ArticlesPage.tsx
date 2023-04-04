import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: IArticlesPageProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
        Articles Page
    </div>
);

export default memo(ArticlesPage);
