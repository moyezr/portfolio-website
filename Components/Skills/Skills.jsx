import Image from "next/image";
import styles from "./Skills.module.css"
import {skills} from "./skill-images";
const Skills = () => {
  return (
    <div id="skills" className={styles.skills_container}>
        <h2 className={styles.skills_heading}>My Skills</h2>
        <div data-aos="fade-right" className={styles.skills_cards_container}>
            {skills.map((el, i) => {
                return (
                    <div className={styles.skill_card} key={i+1}>
                        <Image alt={el.name} id={el.name=="Next.js" || el.name=="Solidity" ? styles.invert_effect : null} className={styles.skills_img} src={el.url} width={200} height={100} />
                        <p className={styles.skill_name}>{el.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills