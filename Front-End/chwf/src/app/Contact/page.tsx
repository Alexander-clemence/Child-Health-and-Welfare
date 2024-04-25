'use client'
import React from 'react'
import styles from './about.module.css'
import Contactform from './contactform'

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
  <div className={styles.text}>At [Your Foundation Name], we are here to help! We understand that you may have questions, want to learn more about our programs, or even share your story.  We encourage you to reach out to us using the methods below.

Phone: [Phone Number] (Our phone lines are open from Hours of Operation)</div>
  <div className={styles.form}><Contactform/></div>
        </div> 
    </div>
   
  )
}

export default ContactUs
