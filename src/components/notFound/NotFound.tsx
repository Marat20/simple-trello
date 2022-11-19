import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className='not-found'>
    <h1>Woops!</h1>
    <Link to='/'>Head back to safety!</Link>
  </div>
);
