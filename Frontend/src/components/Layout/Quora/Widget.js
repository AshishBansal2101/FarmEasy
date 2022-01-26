import React from 'react';
import './css/WidgetContent.css';
import WidgetContent from './WidgetContent';
import './css/Widget.css';



function Widget() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Space to follow</h5>
      </div>
      <div className="widget__contents">
        <WidgetContent />
      </div>
    </div>
        
     
    
  );
}

export default Widget;