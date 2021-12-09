import {getService} from './generalApiService'
import {shuffleArray} from '../helpers/arrayHelper'
import {fillUsersProperties} from '../helpers/fillUsers'
export async function getAlbums (){
  try {
    const albums = await getService('albums');
    const albumsFill = albums.map(album =>({...album, userName: null, userPhoto:''}))
    const albumsUsers = shuffleArray(fillUsersProperties(albumsFill))
    return albumsUsers
  } catch (error) {
    throw error
  }
}