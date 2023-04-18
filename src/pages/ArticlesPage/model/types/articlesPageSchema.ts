import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleView,
    ArticleType,
    ArticleSortField,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;

    _inited: boolean;

    // filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}
