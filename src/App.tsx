import { Routes, Route } from 'react-router-dom';
import BoardContainer from './boards/BoardContainer';
import ShowActiveBoard from './boards/activeBoard/ShowActiveBoard';
import {NotFound} from './components/NotFound';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<BoardContainer />} />
        <Route path='/b/:id' element={<ShowActiveBoard />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
};
