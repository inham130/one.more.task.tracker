import { FC } from 'react';
import styles from './card.module.css';

type OwnProps = {
  title: string;
  body: string;
}

export const Card: FC<OwnProps> = ({
  title = '',
  body = ''
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>{title}</div>
      <div className={styles.card_body}>{body}</div>
    </div>
  );
};