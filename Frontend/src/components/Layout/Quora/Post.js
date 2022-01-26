import React from 'react';
import "./css/Post.css";

function Post() {
  return (
  <div className='post'>
    <div className='post_info'>
    <img class="inline object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
    <h4>Username</h4>
    <small>Timestamp</small>
    </div>
    <div className='post__body'>    
        <div className='post__question'>
            <p>Question</p>
            <button className='post__btnAnswer'>Answer</button>
        </div> 
        <div className='post__answer'>
        <p>

        </p>

        </div>
        <img src="https://images.unsplash.com/photo-1597084570140-f3da3d1e62d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRjc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
    </div>
    <div className='post__footer'>
        <div className='post__footerAction'>
        {/* up arrow */}
        <div className='twindSvgIcon-root'>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
        </div>
       <div className='justify-contnt-center text-gray-500 hover:text-blue-500 cursor-pointer'>
        {/* down arrow */}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
       </div>
        
        </div>
        <div className='padding -2px text-gray-500 cursor-pointer px-7 hover:text-blue-500'>
         {/* repeat icon */}
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        </div>
       <div className=' text-gray-500 cursor-pointer hover:text-gray-700'>
        {/* chat bubble icon */}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
       </div>
        
        <div className='post__footerLeft'>
        <div className='twindSvgIcon-root'>
         {/* share */}
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            {/* dots */}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>

        </div>
           
        </div>
    </div>

  </div>
  );
}

export default Post;
