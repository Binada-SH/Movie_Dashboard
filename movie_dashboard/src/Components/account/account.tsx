import React from 'react'

const account = () => {
  return (
    <div>
        <div className='text-[#565656] flex items-center'>
            <ul className='pl-25 flex gap-6'>
                <div className='w-20 h-7 outline-red-500 outline-solid outline-1 rounded-lg focus:outline-none'>
                     <li><a href="" className='hover:text-white p-5'>Login</a></li>
                </div>
               <div className='w-20 h-7 bg-red-500 rounded-lg outline-none'>
                <li><a href="" className='text-[#000000] hover:text-white p-2.5'>Sign Up</a></li>
               </div>
            </ul>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 items-center ml-16 cursor-pointer hover:text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </span>
        </div>
    </div>
  )
}

export default account
