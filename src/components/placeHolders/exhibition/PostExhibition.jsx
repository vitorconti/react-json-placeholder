import UserThumbNail from "./UserThumbNail"
import {getRandomIntSync} from '../../../helpers/mathHelper'
export default function PostExhibition({children}) {
  const {userName,userPhoto,title,body} = children
  return (
    <>
      <div className="flex bg-white shadow-lg rounded-lg my-4 mx-56 w-2/3">
   <div className="flex items-start px-4 py-6">
     
      <div>
         <UserThumbNail>{{userName,userPhoto}}</UserThumbNail>
         <h2 className='m-3 text-justify text-xl text-gray-700 font-semibold'>{title}</h2>
         <p className="m-3 text-gray-700 text-sm">
            {body}
         </p>
         <div className="m-3 flex items-center">
            <div className="flex mr-2 text-gray-700 text-sm mr-3">
               <svg fill="none" viewBox="0 0 24 24"  className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
               <span>{getRandomIntSync(1,540)}</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-8">
               <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
               </svg>
               <span>{getRandomIntSync(1,540)}</span>
            </div>
            <div className="flex mr-2 text-gray-700 text-sm mr-4">
               <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                </svg>
               <span>share</span>
            </div>
         </div>
      </div>
   </div>
</div>
    </>
  )
}