import React from 'react'
import './Doc_chat.css'
import { Link } from 'react-router-dom'
import { GiMedicalDrip } from 'react-icons/gi'
import { IoSend } from 'react-icons/io5'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'

import Doc1 from './doc1/Doc1'
import Doc2 from './doc2/Doc2'
const Doc_chat = () => {
  return (
    <div className='notification'>
      <div className='noti_left_side'>
        <h1 className='noti_title'>
          <input
            className='form-control'
            id='chatseach'
            type='search'
            placeholder="Search"
          /></h1>
        <ul className='noti_link_name'>
          <li>
            <Link to="/doc1" className='linkaa'><span className='noti_left_logo'><GiMedicalDrip /></span>Dr.Anil Aggrawal</Link>
          </li>
          <hr />
          <li>
            <Link to="/doc2" className='linkaa'><span className='noti_left_logo'><GiMedicalDrip /></span>Dr.S.N.Aarya</Link>
          </li>
          <hr />
          <li>
            <Link to="/doc3" className='linkaa'><span className='noti_left_logo'><GiMedicalDrip /></span>Dr.Manjula Anagani</Link>
          </li>
          <hr />
        </ul>
      </div>
      <div className='noti_right_side'>
        <Doc1 />
      </div>
    </div>
  )
}

export default Doc_chat