import { useState } from "react";
import styles from "./Contact.module.css"
import SocialIcons from "../SocialIcons/SocialIcons"
const Contact = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [res, setRes] = useState(null);

  const handleSubmit = (e) => {    
      e.preventDefault();
      let data = {
          email,
          subject,
          msg
      };
      fetch("/api/contact", {
          method: 'POST',
          headers: {
              'Content-Type': "application/json",
              'Accept': "application/json, text/plain, */*"
          },
          body: JSON.stringify(data)
      }).then((res) => {
          console.log("Response Received");
          if(res.status == "200") {    
            setRes({
              status: 200,
              msg: "Mail Sent Successfully! ✅ We will Get in Touch Soon..."
            })
            
            setTimeout(() => setRes(null), 2500);
              console.log("Response Succeeded")
          }
      }).catch((err) => {
        setRes({
          status: 500,
          msg: "Something went Wrong! ❌"
        })
        setTimeout(() => setRes(null), 2000);
      })
  }

  return (
    <div id="contact" className={styles.contact_container}>
      <h2 className={styles.contact_heading}>Let's Get In Touch</h2>
      <SocialIcons styles={styles} />
      <form className={styles.form}>
        <input type="email" className={styles.form_input} onChange={e => setEmail(e.target.value)} name="email" placeholder="Your Email" />

        <input className={styles.form_input} onChange={e => setSubject(e.target.value)} name="subject" placeholder="Subject" />

        <textarea className={styles.form_txt_area} onChange={e => setMsg(e.target.value)} name="msg" placeholder="Elaborate Yourself"></textarea>
        <button className={styles.submit_btn} onClick={handleSubmit}>Conntact Me</button>
      </form>

    </div>
  )
}

export default Contact