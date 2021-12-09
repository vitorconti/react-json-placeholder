import axios from 'axios'
const BASEURL = 'https://jsonplaceholder.typicode.com/'

export async function getService (route){
  try {
    const response = await (await axios.get(`${BASEURL}${route}`)).data
    return response;
  } catch (error) {
    throw new Error(error);
  }
  
}