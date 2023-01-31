import { useEffect, useState } from "react";

import Styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import {Link} from "react-scroll";

const Navbar = () => {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
      console.log(windowWidth)
    } 
  }, [windowWidth])
  

  return (
    <>

    {windowWidth <= 768 ? (<Sidebar />) : (
      <div className={Styles.navbar_container}>

      <nav className={Styles.navbar}>
      <Link smooth={true} to="main"><p className={Styles.logo}>MR</p></Link>
      <ul className={Styles.navbar_links_container}>
        <Link offset={-80} smooth={true} to="projects" className={Styles.navbar_link}>Projects</Link>
        <Link offset={-60} smooth={true} to="skills" className={Styles.navbar_link}>Skills</Link>
        <Link smooth={true} to="about" className={Styles.navbar_link}>About</Link>
        <Link offset={-45} smooth={true} to="contact" className={`${Styles.contact_btn}`}>Contact Me</Link>
      </ul>
    </nav>
    </div>
    ) }
    
</>
  );
};

export default Navbar;
