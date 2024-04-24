"use client"
import React from 'react'
import styles from './second.module.css'
import { League_Spartan } from 'next/font/google'
const inter = League_Spartan({ subsets: ['latin'] })
import { motion, useViewportScroll, useTransform } from "framer-motion";
const Second = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0], [1, 0.5]);
  return (
    <div className={styles.second}>
       <motion.div  style={{
          scale
        }} >
   <div className={styles.container}>
      <div className={styles.childgrid1}>
        <div className={styles.header}>
          <h1 className={inter.className}>KEY FOCUS AREAS</h1>
        </div>
      </div>
      </div>
      <div className={styles.container1}>
      <div className={styles.childgrid2}>
        <div className={styles.textContainer1}>
          <div className={styles.heading}>
          <h1 className={inter.className}>
            Early Childhood Education
          </h1>
          </div>
          <p className={styles.text}>
            We provide high-quality early childhood education programs that help
            children develop the skills they need to succeed in school and life.
          </p>
        
        </div>
        <div className={styles.gridmini}>
        <div className={styles.textContainer2}>
        <div className={styles.heading}>
        <h1 className={inter.className}>Health Care</h1></div>
          <p className={styles.text}>
          We provide access to healthcare services for children in need.
          </p>
          </div>
        <div className={styles.textContainer3}>
        <div className={styles.heading}>
        <h1 className={inter.className}>Family Support</h1></div>
          <p className={styles.text}>
            We provide support services for families of children in need,
            including parenting education, resource referrals, and social-emotional
            support.
          </p>
          </div>
          </div>
        
      </div>
      </div>
    
      </motion.div>
    </div>

  
  )
}

export default Second
