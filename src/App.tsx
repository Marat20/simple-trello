import { Routes, Route, useParams } from 'react-router-dom';
import { BoardContainer } from './components/board/BoardContainer';
import { ShowActiveBoard } from './components/board/activeBoard/ShowActiveBoard';
import { NotFound } from './components/notFound/NotFound';
import { Header } from './components/header/Header';

export const App = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<BoardContainer />} />
          <Route path='/board/:id' element={<ShowActiveBoard />} />
          <Route element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};
