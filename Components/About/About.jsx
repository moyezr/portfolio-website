import styles from "./About.module.css";
import Image from "next/image";
import myImage from "../../public/img/myImage.png";
const About = () => {
  return (
    <div id="about" className={styles.about_container}>
      <h2 className={styles.about_heading}>About Me</h2>
      <div className={styles.about_sub_container}>
      <div data-aos="fade-right" className={styles.about_txt_container}>
        <p className={styles.about_para}>
          I am Moyez Rabbani, developer & keen enthusiast in Web 3.0. I can
          build Decentralized Applications that interact with blockchain using
          latest Web technologies.
        </p>
        <p className={styles.about_para}>
          Presently, I am pursuing B.Tech in Computer Science & Engineering.
        </p>
        <p className={styles.about_para}>
          I am passionate about the blockchain technology and the revolution it
          can bring. I verily believe in decentralization of internet where
          users can have true ownership and without to rely on Central Entities.
        </p>
        </div>

      <Image data-aos="zoom-in" className={styles.my_img} src={myImage} width={400} height={400} alt="My Image" />
      </div>
    </div>
  );
};

export default About;
