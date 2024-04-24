'use client'
import Intro from "./Components/Home/Intro/page"
import Fourth from "./Components/Home/fourth/page"
import Second from "./Components/Home/second/page"
import Third from "./Components/Home/third/page"
import Navbar from "./Components/Nav/page"
import Contact from "./Contact/page"
import styles from './home.module.css'



export default function Home() {
  return (
 
    <main className="flex ">
          <div className={styles.container}>
          <div className="grid-child-1"><Intro/></div>
          <div className="grid-child-2"><Second/></div>
          <div className="grid-child-3"><Third/></div>
          <div className="grid-child-4"><Fourth/></div>  
          </div>

    </main>
  
  )
}
