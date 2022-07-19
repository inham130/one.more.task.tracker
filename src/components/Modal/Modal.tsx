import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import styles from './modal.module.css';

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
  const rootClasses = [styles.modal];
  if (isVisible) {
    rootClasses.push(styles.modal_active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};