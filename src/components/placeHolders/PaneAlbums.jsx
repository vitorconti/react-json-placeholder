import { useEffect, useState } from 'react';
import {getAlbums} from '../../services/albumService'
import AlbumExhibition from './exhibition/AlbumExhibition';
export default function PaneAlbums() {
  const [albums,setAlbums] = useState([]);
  useEffect(() => {
     async function loadData (){
      const album = await getAlbums()
      console.log(album)
      setAlbums(album)
     }
     loadData();
    return () => {
      
    }
  }, [])
  return (
    <div className='mx-36 mt-12 flex flex-row flex-wrap w-5/6 space-x-6 space-y-3 items-center cursor-pointer'>
      {albums.map((album) => {
        return <AlbumExhibition  key={album.id}>{album}</AlbumExhibition>
      })}
    </div>
    
  )
}
