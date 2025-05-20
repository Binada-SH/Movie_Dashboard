import React from 'react'

const drawer = () => {
  return (
    <div>
        <div className='w-53 h-full bg-[#232323]'>
            <div>
                <h1 className="text-[18px] text-white text-left p-10 font-[jura] italic">Cine • <span className='text-red-500'>Streams</span></h1>
            </div>
            <ul className='list-none text-[#565656]'>
                <li><a href="#home" className='p-10 font-normal'>Home</a></li>
                <li><a href="#new" className='p-10 font-normal'>Discover</a></li>
            </ul>
          
        <hr className='w-26 h-1 ml-8 rounded-lg border-[#303030] my-6' />
        <div className=''>
            <h4 className='text-white text-left p-10 font-jura'>
                Library
            </h4>
            <ul className='list-none text-[#565656]'>
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
            <ul className='list-none text-[#565656]'>
                <li><a href=""className='p-10 font-normal'>Settings</a></li>
                <li><a href=""className='p-10 font-normal'>Help</a></li>
            </ul>
        </div>
    </div>
      
    </div>
  )
}

export default drawer
