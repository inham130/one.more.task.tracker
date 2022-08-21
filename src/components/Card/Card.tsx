import { FC, useCallback } from 'react';
import styles from './card.module.css';
import { Button } from '@components/Button';
import { Icon } from '@components/Icon';

type OwnProps = {
  id: number;
  title: string;
  body: string;
  handleEdit?: (id: number) => void;
  handleRemove?: (id: number) => void;
}

export const Card: FC<OwnProps> = ({
  id = 0,
  title = '',
  body = '',
  handleEdit,
  handleRemove
}) => {
  const onEdit = useCallback(() => {
    if (handleEdit) {
      handleEdit(id);
    }
  }, [id]);

  const onRemove = useCallback(() => {
    if (handleRemove) {
      handleRemove(id);
    }
  }, [id])

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_title}>{title}</div>
        <div className={styles.card_actions}>
          {handleEdit && <Button variant='icon' onClick={onEdit}>
            <Icon id="x" />
          </Button>}
          {handleRemove &&<Button variant='icon' onClick={onRemove}>
            <Icon id="x" />
          </Button>}
        </div>
      </div>
      <div className={styles.card_body}>{body}</div>
    </div>
  );
};