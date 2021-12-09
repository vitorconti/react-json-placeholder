import {getPosts} from '../../services/postService'
import {useEffect,useState} from 'react'
import PostExhibition from './exhibition/PostExhibition'
import Loading from '../transitions/Loading';
import Error from './exhibition/Error';
export default function PanePosts() {
  const [posts,setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    try{
     async function loadData (){
      const post = await getPosts()
      setPosts(post)
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
    mainJsx = <div>{posts.map(post=> {
      return <PostExhibition key={post.id}>{post}</PostExhibition>
  })}</div>
  }
  return (
    <>
    <main>{mainJsx}</main>
    </>
  );
}
