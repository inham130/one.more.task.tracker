import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TaskModal } from './TaskModal';
import { Store } from '@/types'

const modalMap: Record<string, FC> = {
  'task': TaskModal
}

export const ModalManager: FC = () => {
  const { type } = useSelector((state: Store) => state.modal);

  let RenderModal = null;
  if (typeof type === 'string') {
    RenderModal = modalMap[type];
  }

  return (
    <>
      { RenderModal && <RenderModal /> }
    </>
  );
};