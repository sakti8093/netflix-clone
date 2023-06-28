import { signOut } from 'next-auth/react'
const Popup = () => {
  return (
    <div className='w-[200px] absolute z-20 bg-[#1E1E1E] right-0 top-10 rounded-xl p-4'  >
      <div className='w-4 h-4 rotate-45 absolute -top-1 bg-[#1E1E1E] right-1' ></div>
        <p className='mt-2' >My Profile</p>
        <p className='mt-2' >My Plans</p>
        <p onClick={()=>signOut()} className=' text-center mt-4' >sign out</p>
    </div>
  )
}

export default Popup