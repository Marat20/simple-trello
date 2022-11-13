import { IList } from '../../../../modules/modules';

export const Card = ({ name, id, cards }: IList) => {
  return (
    <div className='card_task'>
      <h3>{name}</h3>
      <div className='card_task-done'>✓</div>
    </div>
  );
};
