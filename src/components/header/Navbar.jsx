import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../pages/pages-Css/Navbar.css";
import { CgMenu, CgClose } from "react-icons/cg";
import logo from "../../../assets/Logo.png";
import { motion, transform, useScroll } from "framer-motion";

function Navbar() {
  const [openbar, setOpenbar] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <>
    <nav>
      <div className="container">
        <div className="image">
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: "05rem" }} />
          </Link>
        </div>
        <CgMenu className="open-menu" onClick={() => setOpenbar(!openbar)} />
        <ul className={openbar ? "nav-mobile responsive-mob" : "nav-mobile"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress, background:'navy' }}
      />
    </nav>
   
    </>
  );
}

export default Navbar;
