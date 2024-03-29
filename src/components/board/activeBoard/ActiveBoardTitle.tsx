import { memo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ActiveBoardTitle = memo(({ children }: Props) => (
  <div className='active_board-title'>
    <h1>{children}</h1>
  </div>
));
