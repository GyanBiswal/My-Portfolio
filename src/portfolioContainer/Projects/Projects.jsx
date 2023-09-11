import React from 'react'
import './Projects.css'
import helloGirlfriend from '../../assets/Home/helloGirlfriend.jpg'
import movieProject from '../../assets/Home/movieProject.jpg'
import portfolio from '../../assets/Home/portfolioProject.jpg'
export default function Projects() {
  return (
    <section id='project'>
      <div className='projects-container' id='projects'>
        <h2 className='centered-header'>Projects</h2>
        <div className="projects-img">
        <div className="project-1">
            <img src={movieProject} alt="" />
            <h2>Moviely</h2>
            <p>A user-friendly web application using React, JavaScript and the OMDB API for real-time movie searches.</p>
          </div>
          <div className="project-2">
            <img src={portfolio} alt="" />
            <h2>My Portfolio</h2>
            <p>A personal Portfolio Website developed using React where you can explore my journey and my latest works.</p>
          </div>
          <div className="project-3">
            <img src={helloGirlfriend} alt="" />
            <h2>Hello-GirlFriend</h2>
            <p>A Python-based WhatsApp message scheduling application using Tkinter , pywhatkit and APScheduler.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
