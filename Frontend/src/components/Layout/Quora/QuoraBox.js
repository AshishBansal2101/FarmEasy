// import { Avatar } from "@material-ui/core";
import React from "react";
// import { useSelector } from "react-redux";
// import { selectUser } from "../feature/userSlice";
import "./css/QuoraBox.css";

function QuoraBox() {
 
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
      <img class="object-cover w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
      
     
        <h3>Username</h3>
        </div>
        <div className="quoraBox__quora">
          <p>what is your question or link?</p>
        </div>

    </div>
  );
}

export default QuoraBox;