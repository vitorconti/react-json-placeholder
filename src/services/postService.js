import {getService} from './generalApiService'
import {getUserById} from './userService'
export async function getPosts (){
  try {
    const posts = await getService('posts');
    const postsFill = posts.map(post =>({...post, userName: null, userPhoto:''}))
    const postsUsers = []
    for (let post of postsFill){
      const {name} = await getUserById(post.userId)
      post.userName = name
      postsUsers.push(post);
    }
    return postsUsers
  } catch (error) {
    throw error
  }
}