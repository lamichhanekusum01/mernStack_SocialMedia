import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

const profileCard = () => {
  const profilePage =true;
  return (
    <div className="profileCard">
<div className="profileImages">
 <img  src = {Cover} alt=""/>
 <img  src = {Profile} alt=""/>
</div>
<div className="profileName">
  <span>Kusum Lamichhane</span>
  <span>Software Engineering Intern</span>
</div>
<div className="status">
  <hr/>
  <div>
    <div className="follow">
      <span>1</span>
      <span>Following</span>
    </div>
    <div className="vl">   </div>
    <div className="follow">
      <span>1M</span>
      <span>Followers</span>
    </div>
    {
      profilePage && (
        <>
        <div className="vl">

        </div>
        <div className="follow">
          <span>3</span>
          <span>Posts</span>
        </div>
        </>
      )
    }
  
  </div>
  <hr/>

  </div> 
  { profilePage ?'': <span>My Profile</span>  }
 
   </div>
  )
}

export default profileCard