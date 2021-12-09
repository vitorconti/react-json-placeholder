import UserThumbNail from "./UserThumbNail"
import {getRandomIntSync} from '../../../helpers/mathHelper'
export default function AlbumExhibition({children}) {
  const {userName,userPhoto,title} = children
  const arrayOfPhotoThumbnails = ['pi-cloud','pi-compass','pi-sort-amount-up','pi-sun','pi-moon']
  return (
   <>
   <div className="rounded border-red-500 border shadow-xl w-80 items-center h-96 hover:opacity-75">
          <div className='p-6 m-2 flex flex-col space-y-3 text-center items-center'>
          <i className= {`pi border-8 ${arrayOfPhotoThumbnails[getRandomIntSync(0,4)]}`}style={{'fontSize': '8em'}} />
            <div className="border-r-3 h-20 mb-2">
              <p>Titulo do albúm</p>
              <p className='text-gray-800'>{title}</p> </div>
           <p className='text-sm text-gray-600'>publicado por:</p>   
          <UserThumbNail>{{userName,userPhoto}}</UserThumbNail>
          </div>
        </div>
   </>
  )
}
