"use client"
import React from 'react'
import styles from './Intro.module.css'
import { League_Spartan } from 'next/font/google'
import { motion, useViewportScroll, useTransform } from "framer-motion";
const inter = League_Spartan({ subsets: ['latin'] })

const Intro = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  return (
   
    <div className={styles.intro}>
 <motion.div  style={{
          scale
        }} >
<div className={styles.container}>
  <div className={styles.h1}>
  <h1 className={inter.className}>Empowering the future of every child</h1>

  </div>
  <div className={styles.right}>
    <p className={styles.p}>
    <div className={styles.h2}>
      <h1 className={inter.className}>OUR VISION</h1>
      </div>
      A world where every child flourishes, achieving optimal health and well-being, empowering them to transform their lives and society.</p>
</div>
</div>
</motion.div>
  </div>

  )
}

export default Intro