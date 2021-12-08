import {getPosts} from '../../services/postService'
import {useEffect,useState} from 'react'
import PostExhibition from './exhibition/PostExhibition'
export default function CardPosts() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
     async function loadData (){
      const post = await getPosts()
      console.log(post)
      setPosts(post)
     }
     loadData();
    return () => {
      
    }
  }, [])
  
  return <div>{posts.map(post=> {
    return <PostExhibition key={post.id}>{post}</PostExhibition>
})}</div>;
}
