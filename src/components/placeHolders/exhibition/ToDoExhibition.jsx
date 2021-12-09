import UserThumbNail from '../exhibition/UserThumbNail'
import {v4 as uuid} from 'uuid'
export default function ToDoExhibition({children}) {
  const {userName,userPhoto,title,completed} = children
  const isDone = completed ? 'bg-green-100':'bg-red-100'
  return (
   <>
   <tr className = {` border-blue-200 border-b-2 text-center items-center ${isDone}`}>
    <td className="border px-4 py-2">{title}</td>
      <td className="border px-16 py-2 text-center"><UserThumbNail>{{userName,userPhoto}}</UserThumbNail> </td>
      <td className="border px-4 py-2 w-96"><label className='m-2'><input checked={completed} className='m-2' readOnly type="checkbox" id={uuid()}/>Completada</label></td>
    </tr>
   </>
  )
}
