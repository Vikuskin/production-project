import { ButtonHTMLAttributes, FC } from 'react';
import { getClassNames } from 'shared/lib/classNames/classNames';
import * as styles from './AppButton.module.scss';

export enum ButtonVariants {
    Clear = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant: ButtonVariants;
    children?: React.ReactNode;
}

export const AppButton:FC<AppButtonProps> = (props: AppButtonProps) => {
    const {className, children, variant, ...otherProps} = props;

   return (
       <button
            className={getClassNames(styles.button, {}, [className ?? '', styles[variant]])}
            {...otherProps}
        >
            {children}
        </button>
   )
}
