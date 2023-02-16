import Navbar from './Nav.module.css';
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSetting } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoPersonOutline } from 'react-icons/io5'
import { FaHandHoldingMedical } from 'react-icons/fa'
import {FiLogIn} from 'react-icons/fi'
import {BiLockOpenAlt} from 'react-icons/bi'

function Navb() {
  return (
<nav className={Navbar.nav}>
            <Link to="/" className={Navbar.title}><span className={Navbar.span_logo}><FaHandHoldingMedical /></span> CareDocs</Link>

            <ul className={Navbar.link_name}>
                <li>
                    <Link to="/home" className={Navbar.linkaa}>Home</Link>
                </li>

                <li>
                    <Link to="/doc" className={Navbar.linkaa}>Doctors Chat</Link>
                </li>
            </ul>


            <ul className={Navbar.link_icon}>
                <li>
                    <Link to="/setting" className={Navbar.iconaa}><AiOutlineSetting /></Link>
                </li>

                <li>
                    <Link to="/notification" className={Navbar.iconaa}><IoMdNotificationsOutline /></Link>
                </li>

                <li>

                    <Link to="/profile" className={Navbar.iconaa}><IoPersonOutline /></Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/login" className={Navbar.login}><span className={Navbar.loginlogo1}><FiLogIn /></span>Login</Link>
                </li>

                <li>
                    <Link to="/signup" className={Navbar.login}><span className={Navbar.loginlogo1}><BiLockOpenAlt /></span>Sign Up</Link>
                </li>
            </ul>
        </nav>
  );
}

export default Navb;
