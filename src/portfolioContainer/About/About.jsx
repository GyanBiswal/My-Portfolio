import React from 'react'
import "./About.css"
import danceIcon from "../../assets/Home/danceIcon.jpg"
import cameraIcon from "../../assets/Home/cameraIcon.jpg"
import poetryIcon from "../../assets/Home/poetryIcon.jpg"
import travelIcon from "../../assets/Home/travelIcon.jpg"
import gyanLogo2 from "../../assets/Home/gyanLogo2.png"
export default function About() {
  return (
    <div className='about-container'>
        <section id='about'>
            <div className="about-header">
                <h1>About Me</h1>
            </div>
            <div className="about-body">
                <div class="text-content">
                    <img src={gyanLogo2} alt="" />
                    <h1>I am more than just a software engineer</h1>
                    {/* <h1>more than just a</h1> */}
                    {/* <h1>software engineer</h1> */}
                </div>
                <div className="body-img-background"></div>
                <div className="activity">
                    <div className="dancer">
                        <img src={danceIcon} alt="" />
                        <h2>Dancer</h2>
                    </div>
                    <div className="dancer">
                        <img src={cameraIcon} alt="" />
                        <h2>Shutterbug</h2>
                    </div>
                    <div className="dancer">
                        <img src={poetryIcon} alt="" />
                        <h2>Poem Writing</h2>
                    </div>
                    <div className="dancer">
                        <img src={travelIcon} alt="" />
                        <h2>Travelling</h2>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
