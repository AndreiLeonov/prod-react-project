import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface IArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: IArticleImageBlockComponentProps) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
        <img alt={block.title} src={block.src} className={cls.img} />
        {block.title && (
            <Text text={block.title} align={TextAlign.CENTER} />
        )}
    </div>
));
