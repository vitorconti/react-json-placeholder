import {getService} from './generalApiService'
export async function getUserById (userId){
  return await getService(`users/${userId}`)
}