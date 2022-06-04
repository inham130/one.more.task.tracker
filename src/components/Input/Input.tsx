import { FC, InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type OwnProps = {
  className?: String,
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FC<OwnProps> = (
  { className = '',
    ...inputAttributes
  }) => {

  const rootClasses = [styles.input, className].join(' ');

  return (
    <input className={rootClasses} {...inputAttributes} />
  );
};