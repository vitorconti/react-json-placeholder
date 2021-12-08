import {getService} from './generalApiService'
import {shuffleArray} from '../helpers/arrayHelper'
import {fillUsersProperties} from '../helpers/fillUsers'
export async function getPosts (){
  try {
    const posts = await getService('posts');
    const postsFill = posts.map(post =>({...post, userName: null, userPhoto:''}))
    const postsUsers = await shuffleArray(await fillUsersProperties(postsFill))
    return postsUsers
  } catch (error) {
    throw error
  }
}