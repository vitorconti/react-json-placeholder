import {getService} from './generalApiService'
export async function getUserById (userId){
  try {
    return await getService(`users/${userId}`)
  } catch (error) {
    throw error
  }
  
}