import { getUserById } from "../services/userService";
import { getRandomInt } from "./mathHelper";

export async function fillUsersProperties(arrayToFill = []){
  try {
    const arrayFilled = []
    const iconPhotos  =['pi-facebook','pi-github','pi-twitter','pi-map','pi-youtube','pi-sun','pi-moon']
    for (let item of arrayToFill){
      const {name} = await getUserById(item.userId)
      item.userName = name
      item.userPhoto = iconPhotos[await getRandomInt(0,iconPhotos.length)]
      arrayFilled.push(item);
    }
  } catch (error) {
    throw error
  }
}