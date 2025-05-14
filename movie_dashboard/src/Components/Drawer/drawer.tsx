import React from 'react';
import './drawer.css';

const drawer = () => {
  return (
    <div className='drawer'>
        <h1 className="site_name">
            Cine Stream
        </h1>
        <div className="menu_section">
            <h4 className="menu_title">
                Men
            </h4>
            <ul className="menu_list">
                <li><a href="#home">Home</a></li>
                <li><a href="#new">Discover</a></li>
            </ul>
        </div>  
        <hr className="line1" />
        <div className="library_section">
            <h4 className="library_title">
                Library
            </h4>
            <ul className="library_list">
                <li><a href="">Recent</a></li>
                <li><a href="">Bookmarked</a></li>
                <li><a href="">Liked</a></li>
                <li><a href="">Pending</a></li>
            </ul>
        </div>     
        <hr className="line2" />
        <div className="general_section">
            <h4 className="general_title">
                General
            </h4>
            <ul className="general_list">
                <li><a href="">Settings</a></li>
                <li><a href="">Help</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default drawer
