import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования
export const ErrorButton = () => {
    const [isError, setIsError] = useState(false);
    const { t } = useTranslation();

    const setIsErrorFunc = () => {
        setIsError(true);
    };

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        <Button onClick={setIsErrorFunc}>
            {t('throw error')}
        </Button>
    );
};
