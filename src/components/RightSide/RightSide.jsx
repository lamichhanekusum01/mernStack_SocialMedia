import React ,{useState}from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModel from '../ShareModal/ShareModal'
const RightSide = () => {
  const [ModalOpened,setModalOpened]=useState(false)
  return (
    <div className="RightSide">
        <div className="navIcon">
            <img src={Home} alt=""/>
            <UilSetting/>
            <img src={Noti} alt=""/>
            <img src={Comment} alt=""/>
        </div>
        <TrendCard/>
        <button className="button r-button" onClick={()=>setModalOpened(true)}>
    share</button>
    <ShareModel ModalOpened={ModalOpened} setModalOpened={setModalOpened}/>
        

    </div>
  )
}

export default RightSide