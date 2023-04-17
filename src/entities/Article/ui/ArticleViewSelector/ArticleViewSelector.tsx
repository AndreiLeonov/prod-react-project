import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ListICon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { ArticleView } from 'entities/Article';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface IArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: 'SMALL',
        icon: TiledIcon,
    },
    {
        view: 'BIG',
        icon: ListICon,
    },
];
export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
    const { className, onViewClick, view } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view as ArticleView)}
                >
                    <Icon
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
});
