import React from 'react'

const drawer = () => {
  return (
    <div>
        <div className='w-53 min-h-200 rounded bg-[#232323]'>
            <div>
                <h1 className="text-[18px] text-white text-left p-10 font-[jura] italic">Cine • <span className='text-red-500'>Streams</span></h1>
            </div>
            <ul className='list-none text-[#565656] leading-[2.8]'>
                <div className="flex item-center pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2 ml-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>
                        <li><a href="#home" className='p-4 font-[lato]'>Home</a></li>
                    </span>
                </div>
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2 ml-10 shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                    </svg>
                     <span><li><a href="#new" className='p-4 font-[lato]'>Discover</a></li></span>
                </div>
            </ul>
            <hr className='w-33 h-1 ml-10 rounded-lg border-[#303030] my-6' />
        <div className=''>
            <h4 className='text-white text-left  pt-4 p-10 font-[lato]'>Library
            </h4>
            <ul className='list-none text-[#565656] leading-[2.8]'>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2 ml-10 shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>
                        <li><a href=""className='p-4 font-[lato]'>Recent</a></li>
                        </span>
                </div>
                <div className='flex '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2 ml-10 shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                    </svg>
                    <span>
                        <li><a href=""className='p-4 font-[lato]'>Bookmarked</a></li>
                    </span>
                </div>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2 ml-10 shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <span>
                        <li><a href=""className='p-4 font-[lato]'>Liked</a></li>
                    </span>
                </div>
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2 ml-10 shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>
                        <li><a href=""className='p-4 font-[lato]'>Downloaded</a></li>
                    </span>
                </div>  
            </ul>
        </div>     
        <hr className='w-33 h-1 ml-8 rounded-lg border-[#303030] my-6'/>
        <div className=''>
            <h4 className='text-white text-left pt-4 p-10 font-[lato]'>
                General
            </h4>
            <ul className='list-none text-[#565656] leading-[2.8]'>
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
