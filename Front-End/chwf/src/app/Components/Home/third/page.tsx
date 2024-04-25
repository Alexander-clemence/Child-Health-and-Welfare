"use client"
import React from 'react'
import styles from './third.module.css'
import { League_Spartan } from 'next/font/google'
const inter = League_Spartan({ subsets: ['latin'] })
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button"


const Third = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.3, 0], [1, 0.5]);
  return (
    <div className={styles.third}>
   <motion.div  style={{
          scale
        }} >
        <div className={styles.container}>
        <div className={styles.childgrid1}>
        <div className={styles.header}>
        <h1 className={inter.className}>News</h1>
        </div>
      </div>
      <div className={styles.grids}>
          <div className={styles.cols}>
            <Card className={styles.card}>
            <CardHeader>
                <CardTitle className='text-white'>NEWS TITLE ONE</CardTitle>
                <CardDescription>Date</CardDescription>
            </CardHeader>
            <CardContent >
            <Image
                  src="/messina.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  border-radius="10px"
                />
            </CardContent>
            <CardFooter>
                  <Button variant="secondary">Read more</Button>
            </CardFooter>
            </Card>
          </div>
          <div className={styles.cols}>
          <Card className={styles.card}>
          <CardHeader>
              <CardTitle className='text-white'>NEWS TITLE TWO</CardTitle>
              <CardDescription>Date</CardDescription>
          </CardHeader>
          <CardContent>
          <Image
                  src="/consoler.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  border-radius="10px"
                />
          </CardContent>
          <CardFooter>
          <Button variant="secondary">Read more</Button>
          </CardFooter>
          </Card>
          </div>
          <div className={styles.cols}>
          <Card className={styles.card}>
          <CardHeader>
              <CardTitle className='text-white'>NEWS TITLE THREE</CardTitle>
              <CardDescription>Date</CardDescription>
          </CardHeader>
          <CardContent>
          <Image
                  src="/hey.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  border-radius="10px"
                />
          </CardContent>
          <CardFooter>
          <Button variant="secondary">Read more</Button>
          </CardFooter>
          </Card>
          </div>
        </div>
        </div>
        </motion.div>
        </div>
  )
}

export default Third