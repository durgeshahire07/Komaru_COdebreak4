import React from 'react'
import QRillustrate from '../home/heroimg.png'
import herocss from './Hero.css'
import { Link } from 'react-router-dom'
import User_report from './User_report'



const Hero = () => {
    return (
        <div>
            <div className='hero'>
                <div className='hero_container'>
                    <div className='left_sidehero'>
                        <h1 className='hero_text1'>Lorem ipsum dolor sit amet, consectetur orn adipiscing elit.</h1>
                        <p className='hero_text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet Lorem ipsum dolor sit amet,</p>

                        <button id="myBtn" className='form-submit knowmore'><span>Know more about portel</span></button>
                    </div>
                    <div className='right_sidehero'>
                        <img className='QRillustrate' src={QRillustrate} />
                    </div>
                </div>

                <div className='recent chat'>
                    <h1 className='recentchattxt'>Recent Chat</h1>

                    <div className='recentdoc'>
                        <h1 className='recentdoc1'>Dr.Anil Aggrawal</h1>
                        <div className='recentdocgroup'>
                            <h2 className='recentdoc2'>Last assist on:- <span>Today- 1:00 am </span></h2>
                            <Link to="/doc" ><h2 className='recentdoc3'>Continue Chat</h2></Link>
                            <h2 className='recentdoc4'>Active</h2>
                        </div>
                    </div>
                    <hr />
                    <div className='recentdoc'>
                        <h1 className='recentdoc1'>Dr.Manjula Anagani</h1>
                        <div className='recentdocgroup1'>
                            <h2 className='recentdoc2'>Last assist on:- <span>11/05/22 </span></h2>
                            <Link to="/doc" ><h2 className='recentdoc3'>Continue Chat</h2></Link>
                            <h2 className='recentdoc5'>Deactive</h2>
                        </div>
                    </div>
                </div>

                {/* <User_report/> */}
            </div>
        </div>
    )
}

export default Hero