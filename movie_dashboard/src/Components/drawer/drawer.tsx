import React from 'react'

const drawer = () => {
  return (
    <div>
        <div className='w-53 min-h-200 rounded bg-[#232323]'>
            <div>
                <h1 className="text-[18px] text-white text-left p-10 font-[jura] italic">Cine • <span className='text-red-500'>Streams</span></h1>
            </div>
            <ul className='list-none text-[#565656] leading-[2.5]'>
                <div className="flex item-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2 ml-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>
                        <li><a href="#home" className='p-4 font-normal'>Home</a></li>
                    </span>
                </div>
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2 ml-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                    </svg>
                     <span><li><a href="#new" className='p-4 font-normal'>Discover</a></li></span>
                </div>
               
                
            </ul>
          
        <hr className='w-26 h-1 ml-8 rounded-lg border-[#303030] my-6' />
        <div className=''>
            <h4 className='text-white text-left p-10 font-jura'>
                Library
            </h4>
            <ul className='list-none text-[#565656] leading-[2.5]'>
                <li><a href=""className='p-10 font-normal'>Recent</a></li>
                <li><a href=""className='p-10 font-normal'>Bookmarked</a></li>
                <li><a href=""className='p-10 font-normal'>Liked</a></li>
                <li><a href=""className='p-10 font-normal'>Pending</a></li>
            </ul>
        </div>     
        <hr className='w-26 h-1 ml-8 rounded-lg border-[#303030] my-6'/>
        <div className=''>
            <h4 className='text-white text-left p-10 font-jura'>
                General
            </h4>
            <ul className='list-none text-[#565656] leading-[2.5]'>
                <li><a href=""className='p-10 font-normal'>Settings</a></li>
                <li><a href=""className='p-10 font-normal'>Help</a></li>
                <li><a href=""className='p-10 font-normal'>Logout</a></li>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default drawer
