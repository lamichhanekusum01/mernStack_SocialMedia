import React, {useState} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {
const[ModalOpened,setModalOpened]=useState(false);
  return (
    <div className='InfoCard'>
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
            <UilPen width='2rem'  height='1.2rem' onClick={()=>setModalOpened(true)}/>
            <ProfileModal ModalOpened={ModalOpened} setModalOpened={setModalOpened}/>
            </div>
        </div>
        <div className="info">
            <span>
                <b>Status</b>
            </span>
            <span>
                  in Relationship
            </span>
        </div>
        <div className="info">
            <span>
                <b> Lives in </b>
            </span>
            <span>
                Kathmandu
            </span>
        </div>
        <div className="info">
            <span>
                <b> Works at </b>
            </span>
            <span>
                 Optimum Futurist
            </span>
        </div>
        <button className='button lg-button'>Logout</button>
    </div>
  )
}

export default InfoCard