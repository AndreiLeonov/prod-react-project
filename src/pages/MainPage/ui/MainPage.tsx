import React from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <ErrorButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
