import Image from "next/image";
import styles from "./Projects.module.css";

import { nftMarketplace, uniswapClone, todoDapp } from "../../public/img";

const Projects = () => {

  const demoProjects  = [
    {
      name: "NFT Marketplace",
      img: nftMarketplace
    },
    {
      name: "Uniswap Clone",
      img: uniswapClone
    },
    {
      name: "Todo Dapp",
      img: todoDapp
    }
  ]

  return (
    <div id="projects" className={styles.projects_container}>
    <h2 className={styles.projects_heading}>My Works</h2>
    <div className={styles.projects_cards_container}>
      {demoProjects.map((el, i ) => {
        return(
          <div className={styles.project_card} key={i+1}>
            <Image alt={el.name} className={styles.project_img} src={el.img} width={400} height={400}/>
            <p className={styles.project_card_name}>{el.name}</p>
            <div className={styles.project_card_btn_container}>
            <button className={styles.project_card_btn}>View Details</button>
            <button className={styles.project_card_btn}>Live Demo</button>
            </div>
          </div>
        )
      })}
    </div>

    </div>
  )
}

export default Projects