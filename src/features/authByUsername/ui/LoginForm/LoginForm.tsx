import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?:string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={t('Введите логин')} type="text" className={cls.input} />
            <Input placeholder={t('Введите пароль')} type="text" className={cls.input} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};