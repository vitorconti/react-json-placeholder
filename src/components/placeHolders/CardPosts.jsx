import {getUserById} from '../../services/userService'
import {useEffect} from 'react'
export default function CardPosts() {
  useEffect(() => {
     async function loadUsuario (){
      const user = await getUserById('1')
      console.log(user.name)
     }
     loadUsuario();
    return () => {
      
    }
  }, [])
  return <div>AAAAAAAAAAAAAAAAAAAAAA</div>;
}
