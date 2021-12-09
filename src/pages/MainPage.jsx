import NavBar from '../components/menu/NavBar';

import { Routes, Route } from 'react-router-dom';
import PanePosts from '../components/placeHolders/PanePosts';
import PaneAlbums from '../components/placeHolders/PaneAlbums';
import PaneToDo from '../components/placeHolders/PaneToDo';
import HomePage from '../components/home/HomePage';

export default function MainPage() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path="posts" element={<PanePosts />} />
          <Route path="albums" element={<PaneAlbums />} />
          <Route path="todos" element={<PaneToDo />} />
        </Routes>
      </div>
    </>
  );
}
