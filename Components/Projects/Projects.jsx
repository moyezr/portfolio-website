import Image from "next/image";
import styles from "./Projects.module.css";

import { nftMarketplace, uniswapClone, todoDapp, aiMints, dex } from "../../public/img";
import Link from "next/link";

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

  const projectDetails = [
    {
      name: "Ai NFT Minting Dapp",
      img: aiMints,
      codeLink:"https://github.com/moyezr/ai-nft-minting-app",
      websiteLink: "https://ai-nft-minting-horec6ihg-moyezrabbaniwork-gmailcom.vercel.app",
    },
    {
      name: "DeCentra Dev Marketplace",
      img: nftMarketplace,
      codeLink:"https://github.com/moyezr/nft-marketplace",
      websiteLink: "https://nft-marketplace-4vgcbhyna-moyezrabbaniwork-gmailcom.vercel.app",
    },
    {
      name: "DeSwap Exchange",
      img: dex,
      codeLink:"https://github.com/moyezr/dex",
      websiteLink: "https://dex-uniswap-clone-fymg433pf-moyezrabbaniwork-gmailcom.vercel.app",
    }
  ]

  return (
    <div id="projects" className={styles.projects_container}>
    <h2 className={styles.projects_heading}>My Works</h2>
    <div className={styles.projects_cards_container}>
      {projectDetails.map((el, i ) => {
        return(
          <div data-aos={`${i%2==0 ? "fade-right": "fade-left" }`} className={styles.project_card} key={i+1}>
            <Image alt={el.name} className={styles.project_img} src={el.img} width={400} height={400}/>
            <p className={styles.project_card_name}>{el.name}</p>
            <div className={styles.project_card_btn_container}>
            <Link target="_blank" href={el.codeLink} className={styles.project_card_btn}>View &lt;Code&gt;</Link>
            <Link target="_blank" href={el.websiteLink} className={styles.project_card_btn}>Live Demo</Link>
            </div>
          </div>
        )
      })}
    </div>

    </div>
  )
}

export default Projects