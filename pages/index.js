import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import styles from '../styles/Home.module.css'
import {cdv} from "../public/img";
import Projects from '../Components/Projects/Projects'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
export default function Home() {
  const [openImage, setOpenImage] = useState(true)
  useEffect(() => {
    if(window.innerWidth <= 768) {
      setOpenImage(false)
    }
  }, [])
  return (
    <div className={styles.global_container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Moyez Rabbani Fullstack Web3 Developer Portfolio Website" />
        <title>Moyez Rabbani</title>
      </Head>
      <Navbar />
      <main id='main' className={styles.main}>
      <div className={styles.txt_container}>
        <p className={styles.greeting_txt}>Hello there! <span className={styles.emoji}>👋</span></p>
        <div className={styles.name_container}>I am <h1 className={styles.name}>Moyez Rabbani</h1></div>
        <p className={styles.profession_txt}> Web3.0 Fullstack Developer | Content Creator</p>
      </div>
      {
        openImage ? <Image alt='Coding Vector Image' className={styles.home_img} width={400} height={400} src={cdv} /> : null
      }
      </main>
      
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />

    </div>
  )
}
