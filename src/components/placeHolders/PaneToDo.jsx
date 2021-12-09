import {getToDos} from '../../services/toDoService'
import {useEffect,useState} from 'react'
import ToDoExhibition from './exhibition/ToDoExhibition'

export default function PaneToDos() {
  const [todos,setToDos] = useState([]);
  useEffect(() => {
     async function loadData (){
      const todo = await getToDos()
      console.log(todo)
      setToDos(todo)
     }
     loadData();
    return () => {
      
    }
  }, [])
  return <div className='mx-48 mt-16'>
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
</div>;
}

// return <div>{todos.map(todo=> {
//   return <ToDoExhibition key={todo.id}>{todo}</ToDoExhibition>
// })}</div>;