import { signOut } from 'next-auth/react'
const Popup = () => {
  return (
    <div className='w-[100px] absolute z-20 bg-black right-0 top-10 p-2 rounded-xl'  >
        <p onClick={()=>signOut()} className=' text-center' >sign out</p>
    </div>
  )
}

export default Popup