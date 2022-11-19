import { memo } from 'react';
import { Link } from 'react-router-dom';

export const Header = memo(() => (
  <header>
    <Link to='/'>
      <div className='header-icon'></div>
    </Link>
  </header>
));
