import {getToDos} from '../../services/toDoService'
import {useEffect,useState} from 'react'
import ToDoExhibition from './exhibition/ToDoExhibition'
import Loading from '../transitions/Loading';
import Error from './exhibition/Error';

export default function PaneToDos() {
  const [todos,setToDos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    try{
     async function loadData (){
      const todo = await getToDos()
      setToDos(todo)
      setLoading(false)
     }
     loadData();
    }catch(error){
      setError(error.message);
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
    mainJsx = (<div className='mx-48 mt-16'>
    <table className="table-auto shadow-lg">
    <thead>
      <tr className='border-t-2 bg-blue-200'>
        <th className="px-4 py-2">To do list</th>
        <th className="px-4 py-2">Usuário</th>
        <th className="px-4 py-2">Status</th>
      </tr>
    </thead>
    <tbody>
     {todos.map(todo=> {
    return <ToDoExhibition  key={todo.id}>{todo}</ToDoExhibition>
    })}
    </tbody>
  </table>
  </div>)
  }
 return (
    <>
      <main>{mainJsx}</main>
    </>
  );
}
