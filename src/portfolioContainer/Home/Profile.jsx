import React from 'react';
import Typical from 'react-typical'
import'./Profile.css'

export default function Profile(){
  return (
    <section id='Home'>
        <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">
                    <div className="colz-icon">
                        <a href="https://www.linkedin.com/in/gyan-biswal/" target="_blank">
                            <i class="fa fa-linkedin-square" target="_blank"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-envelope-square"></i>
                        </a>
                        <a href="https://github.com/GyanBiswal" target="_blank">
                            <i class="fa fa-github-square"></i>
                        </a>
                        <a href="https://www.instagram.com/gyanbiswal_/" target="_blank">
                            <i class="fa fa-instagram" ></i>
                        </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className="primary-text">
                        {" "}
                        Hello, I'm <span className='highlighted-text'>Gyan Biswal</span>
                    </span>
                </div>    
                <div className='profile-details-role'>
                    <span className="primary-text">
                        {" "}
                        <h1>
                            <Typical 
                                className="small-h1"
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic",
                                    1000,
                                    "Passionate",
                                    1000,
                                    "Web Developer",
                                    1000,
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Learning Till Oblivion
                        </span>
                    </span>
                </div> 
                <div className="profile-options">
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{""}
                    </button>
                    <a href=".pdf file" download="name.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>   
                <div className="profile-desc">
                    <h5>Techno Lunatic During The Day</h5>
                    <h5>Cyber Punk Over The Night</h5>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
