import axios from 'axios'
const BASEURL = 'https://jsonplaceholder.typicode.com/'

export async function getService (route){
  try {
    console.log(`${BASEURL}${route}`);
    const response = await (await axios.get(`${BASEURL}${route}`)).data
    return response;
  } catch (error) {
    throw new Error(error);
  }
  
}