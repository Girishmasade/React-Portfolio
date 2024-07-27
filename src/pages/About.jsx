import React from 'react'
import './pages-Css/About.css'
import aboutimg from '../../assets/About.svg'
import travel from '../../assets/travelling.svg'
import pj from '../../assets/phij.svg'
import develop from '../../assets/develop.svg'

import Skill from '../pages/Skill'

function About() {
  return (
    <section id='about'>
      <div className="about-conttainer">
        <h2>About Me</h2>
        <div className="about-data">
          <div className="about-details">
            <h1>Girish Vijay Masade</h1>
            <p>Hello! I'm Girish, a passionate Full Stack Developer with a knack for creating seamless and engaging digital experiences. My journey in the world of web development has been driven by a deep curiosity and a relentless pursuit of excellence.</p>
            <img src={aboutimg} alt="Girish Masade" />
          </div>

          <div className="about-details">
            <h1>My Journey</h1>
            <p>From the early days of tinkering with code to mastering complex frameworks, my development journey has been an exciting adventure. I have honed my skills in both front-end and back-end technologies, allowing me to build robust, scalable, and visually appealing applications.</p>
            <img src={travel} alt="" />
          </div>

          <div className="about-details">
            <h1>My Philosophy</h1>
            <p>I believe that great development is about more than just writing code. It's about understanding the needs of users, collaborating with designers, and continuously learning and adapting to new technologies. I strive to write clean, maintainable code and follow best practices to ensure the longevity and performance of my projects.</p>
            <img src={pj} alt="" />
          </div>

          <div className="about-details">
            <h1>Beyond Development</h1>
            <p>When I'm not coding, you can find me exploring the latest design trends, working on my podcast and story channels, or experimenting with new recipes in the kitchen. I love connecting with like-minded individuals and sharing knowledge and experiences.</p>
            <img src={develop} alt="" />
          </div>        
          </div>
        </div>
    </section>
  )
}

export default About
