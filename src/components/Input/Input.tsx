import { FC, InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface InputProps {
  className?: String,
};

export const Input: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  className = '',
  ...inputAttributes
}) => {
  const rootClasses = [styles.input, className].join(' ');

  return (
    <input className={rootClasses} {...inputAttributes} />
  );
};