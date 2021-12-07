import NavBar from '../components/menu/NavBar';

import { Routes, Route } from 'react-router-dom';
import CardPosts from '../components/placeHolders/CardPosts';
import CardAlbuns from '../components/placeHolders/CardAlbuns';
import ToDo from '../components/placeHolders/ToDo';
import HomePage from '../components/Home/HomePage';

export default function MainPage() {
  return (
    <>
      <NavBar />
      
      <div>
        <Routes>
          <Route path='/' element = {<HomePage/>}/>
          <Route path="posts" element={<CardPosts />} />
          <Route path="albums" element={<CardAlbuns />} />
          <Route path="todos" element={<ToDo />} />
        </Routes>
      </div>
    </>
  );
}
