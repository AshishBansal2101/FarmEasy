import React from 'react';
import Feed from './Feed';
import Quoraheader from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import './css/Quora.css'


function Quora() {
  return (
        <div className='quora'>
        <Quoraheader/>
            <div className='quora_content'>
            
            <Sidebar/>
            
            <Feed/> 
            <Widget/>
            </div>
        </div>
  )
}

export default Quora;
