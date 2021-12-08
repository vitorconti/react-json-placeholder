export default function UserThumbNail({children}) {
  const {userPhoto,userName} = children
  return (
    <>
    <div className="flex flex-row space-x-2 items-center">
         <i className= {`text-center w-8 h-8 rounded-full shadow-lg border-t-8 pi ${userPhoto}`} ></i>
            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{userName}</h2>
         </div>
    </>
  )
}
