import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import styles from './modal.module.css';
import { classNames } from '@utils/index';

type OwnProps = {
  children?: ReactNode | string;
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<OwnProps> = ({
  children = '',
  isVisible= false,
  setVisible
}) => {
  const rootClasses = classNames(styles.modal, {[styles.modal_active]: isVisible});

  return (
    <div className={rootClasses} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};