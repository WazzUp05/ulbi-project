import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitchers.module.scss';

interface LangSwitchersProps {
    className?: string;
}

export const LangSwitchers = ({ className }: LangSwitchersProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.LangSwitchers, {}, [className])} onClick={toggle}>
            {t('Язык')}
        </Button>
    );
};