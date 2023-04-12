import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
    className?:string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const isCanEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEditProfile());
    }, [dispatch]);
    const onSaveForm = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {isCanEdit && (
                <div className={cls.btnsWrapper}>
                    {
                        readonly
                            ? (
                                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                                    {t('Редактировать')}
                                </Button>
                            )
                            : (
                                <>
                                    {/* eslint-disable-next-line max-len */}
                                    <Button theme={ThemeButton.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
                                        {t('Отменить')}
                                    </Button>
                                    <Button theme={ThemeButton.OUTLINE} className={cls.saveBtn} onClick={onSaveForm}>
                                        {t('Сохранить')}
                                    </Button>
                                </>
                            )
                    }
                </div>
            )}

        </div>
    );
};
