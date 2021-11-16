import React from 'react'
import Typical from  'react-typical';
import ScrollService from '../../../utilities/ScrollService';

import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.linkedin.com/in/kiran-pai-263802119/"> 
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href="https://github.com/paik1"> 
                                <i className='fa fa-github'></i>
                            </a>
                            <a href="https://www.instagram.com/kiran_pai/"> 
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="https://twitter.com/Pai95Kiran"> 
                                <i className='fa fa-twitter-square'></i>
                            </a>
                        </div>
                    </div>
                
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Kiran Pai</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <p>
                                <Typical 
                                loop = {Infinity}
                                steps = {[
                                    "Avid Eager Enthusiastic",
                                    1000,
                                    "Full Stack Developer💻",
                                    1000,
                                ]}
                                />
                            </p>
                            <span className='profile-role-tagline'>
                                I want to make things that make a difference 

                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button onClick= {() => ScrollService.scrollHandler.scrollToHireMe()} className='btn primary-btn'>
                            {" "}
                            Hire me{" "}
                        </button>
                        <a href='Kiran_Pai_Resume.pdf' download='Kiran Pai CV'>
                            <button className='btn highlighted-btn'>
                                Get Resume
                            </button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}
