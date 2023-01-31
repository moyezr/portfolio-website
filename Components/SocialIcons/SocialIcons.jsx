import Link from "next/link"
import {BsEnvelopeFill, BsGithub, BsLinkedin, BsTwitter, BsYoutube} from "react-icons/bs"
const SocialIcons = ({styles}) => {
  return (
    <div className={styles.social_links_container}>
    <Link className={styles.social_icon} target="_blank" href="https://github.com/moyezr"><BsGithub /></Link>
    <Link className={styles.social_icon} target="_blank" href="https://www.linkedin.com/in/moyez-rabbani-4a647421b/"><BsLinkedin /></Link>
    <Link className={styles.social_icon} target="_blank" href="https://www.youtube.com/channel/UCpd5TSiaz1rDTGj9YQo1WIQ"><BsYoutube /></Link>
    <Link className={styles.social_icon} target="_blank" href="https://twitter.com/MoyezRabbani"><BsTwitter /></Link>
    <Link className={styles.social_icon} target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=moyezrabbani.work@gmail.com"><BsEnvelopeFill /></Link>


    </div>
  )
}

export default SocialIcons