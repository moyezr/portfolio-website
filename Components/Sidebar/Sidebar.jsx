import { useState } from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import {Link} from "react-scroll"

import styles from "./Sidebar.module.css";
const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleMenu = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
      <div className={styles.sidebar_container}>
        <div className={styles.hamburger_logo_container}>
        <Link onClick={(e) => setOpenSidebar(prev => {prev ? !prev : prev})} smooth={true} to="main" className={styles.sidebar_links}><p className={styles.logo}>MR</p></Link>
          <button
            className={`${styles.hamburger} ${
              openSidebar ? styles.is_active : null
            }`}
            onTouchEnd={toggleMenu}
          >
            <div className={styles.bar}></div>
          </button>
        </div>
        <nav
          className={`${styles.sidebar_links_container} ${
            openSidebar ? styles.open_sidebar : styles.close_sidebar
          }`}
        >
          <Link onClick={toggleMenu} smooth={true} offset={-50} to="projects" className={styles.sidebar_links}>Projects</Link>
          <Link onClick={toggleMenu} smooth={true} offset={-20} to="skills" className={styles.sidebar_links}>Skills</Link>
          <Link onClick={toggleMenu} smooth={true} offset={20} to="about" className={styles.sidebar_links}>About</Link>
          <Link onClick={toggleMenu} smooth={true} to="contact" className={styles.sidebar_links}>Contact Me</Link>
          <SocialIcons styles={styles} />
        </nav>
      </div>

  );
};

export default Sidebar;
