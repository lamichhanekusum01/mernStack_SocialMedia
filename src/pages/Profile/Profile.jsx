import React from 'react'
import LeftProfile from '../../components/LeftProfile/LeftProfile'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import './Profile.css'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
  return (
    <div className='Profile'>
      <LeftProfile/>
      <div className="profileCenter">
        <ProfileCard/>
        <PostSide/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile