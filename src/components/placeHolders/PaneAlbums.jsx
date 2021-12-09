import { useEffect, useState } from 'react';
import {getAlbums} from '../../services/albumService'
import AlbumExhibition from './exhibition/AlbumExhibition';
import Loading from '../transitions/Loading';
import Error from './exhibition/Error';
export default function PaneAlbums() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [albums,setAlbums] = useState([]);
  useEffect(() => {
    try{
     async function loadData (){
      const album = await getAlbums()
      setAlbums(album)
      setLoading(false)
     }
     loadData();
    }catch(error){
      setError(error.message)
    }
    return () => {
      
    }
  }, [])
  let mainJsx = (
    <div className="flex justify-center my-4">
      <Loading />
    </div>
  );

  if (error) {
    mainJsx = <Error>{error}</Error>;
  }
  if (!loading && !error) {
    mainJsx =  <div className='mx-24 mt-12 flex flex-row flex-wrap w-auto space-x-6 space-y-3 items-center cursor-pointer'>
    {albums.map((album) => {
      return <AlbumExhibition  key={album.id}>{album}</AlbumExhibition>
    })}
  </div>
  }
  return (
   <>
    <main>{mainJsx}</main>
   </>
    
  )
}
