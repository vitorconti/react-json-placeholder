import {getService} from './generalApiService'
import {shuffleArray} from '../helpers/arrayHelper'
import {fillUsersProperties} from '../helpers/fillUsers'
export async function getToDos (){
  try {
    const todos = await getService('todos');
    const todosFill = todos.map(todo =>({...todo, userName: null, userPhoto:''}))
    const todosUsers = await shuffleArray(await fillUsersProperties(todosFill))
    return todosUsers
  } catch (error) {
    throw error
  }
}