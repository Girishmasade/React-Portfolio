import React from 'react'
import hero from '../../assets/logo2.png'
import '../App.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';

function Home() {
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 1 },
  };
  return (

    <motion.div className='home-Container' initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      <div className="data-home">
        <span>Hello there!! <br />It's me</span>
        <h1>Girish Vijay Masade</h1>
        <p>I'm Girish a web developer, Youtuber, Freelancer.</p>
       <Link to="/contact"><button type="button" className="btn btn-primary">Hire Me</button></Link>
      </div>
      <div className="img-home">
        <img src={hero} alt="Girish"/>
      </div>
    </motion.div>
  )
}

export default Home;
