import { getUserById } from "../services/userService";
import { getRandomInt } from "./mathHelper";

export async function fillUsersProperties(arrayToFill = []){
  try {
    const arrayFilled = []
    const iconPhotos  =['pi-facebook','pi-github','pi-twitter','pi-map','pi-youtube','pi-apple','pi-discord']
    const userIds = [...new Set(arrayToFill.map(x => x.userId))];

    await Promise.all(userIds.map(async userId => {
      let user = await getUserById(userId)
      arrayFilled.push(
        ...await Promise.all(
          arrayToFill.filter(x => x.userId == userId)
                  .map(async x => ({
                    ...x,
                    userName: user.name,
                    userPhoto: iconPhotos[await getRandomInt(0, iconPhotos.length)]
              })
            )
          )
        )
      })
    );
    return arrayFilled
  } catch (error) {
    throw error
  }
}