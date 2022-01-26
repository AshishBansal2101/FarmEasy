import React from 'react';
import SidebarOptions from './SidebarOptions';
import "./css/Sidebar.css"
function Sidebar() {
  return (            
          <div className='max-w-xs '>
        <div className='sidebar '>
        <SidebarOptions/>
        </div>
        </div>
        );
}

export default Sidebar;
