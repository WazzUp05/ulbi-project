import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Form auth')} />
            {error && (
                <Text
                    text={t('You entered an incorrect username or password')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                onChange={onChangeUsername}
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Enter username')}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                type="text"
                className={cls.input}
                placeholder={t('Enter password')}
                value={password}
            />
            <Button
                onClick={onLoginClick}
                disabled={isLoading}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
            >
                {t('Login')}
            </Button>
        </div>
    );
});
