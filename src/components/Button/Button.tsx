import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from '@utils/index';
import styles from './button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'icon';

type OwnProps = {
  className?: string;
  children: ReactNode | string;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button:FC<OwnProps> = ({
  children = '',
  className = '',
  variant = 'primary',
  ...ButtonHTMLAttributes
}) => {
  const buttonClasses = classNames(styles.btn, styles[`btn_${variant}`], className);

  return (
    <button
      className={buttonClasses}
      { ...ButtonHTMLAttributes }
    >
      {children}
    </button>
  );
};