import { FC } from 'react';
import * as sprite from '@assets/atlas.svg';

interface IconProps {
  id: string;
  width?: string;
  height?: string;
}

export const Icon: FC<IconProps> = (
{
  id,
  width = '24px',
  height = '24px'
}) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${id}`} />
    </svg>
  )
}