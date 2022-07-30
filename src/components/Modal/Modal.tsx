import { Dispatch, FC, MouseEvent, ReactNode, SetStateAction, useCallback } from 'react';
import { Icon } from '@components/Icon';
import styles from './modal.module.css';
import { classNames } from '@utils/index';

type OwnProps = {
  children?: ReactNode | string;
  title?: string;
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onSave?: () => void | null;
  renderFooter?: () => JSX.Element,
}

export const Modal: FC<OwnProps> = ({
  children = '',
  title = '',
  isVisible= false,
  setVisible,
  renderFooter = null,
  onSave = () => {}
}) => {
  const rootClasses = classNames(styles.modal, {[styles.modal_active]: isVisible});

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  const handleSave = useCallback((_event: MouseEvent<HTMLButtonElement>) => {
    onSave();
  }, [onSave])

  return (
    <div className={rootClasses} onClick={handleClose}>
      <div className={styles.modal__dialog} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal__header}>
          { title.length > 0 && <h5 className={styles.modal__title}>{title}</h5> }
          <button className={styles.modal__close} onClick={handleClose}>
            <Icon id="x" />
          </button>
        </div>
        <div className={styles.modal__content}>
          {children}
        </div>
        <div className={styles.modal__footer}>
          {renderFooter ? renderFooter() : <>
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </>}
        </div>
      </div>
    </div>
  );
};