'use client'

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { FiAlignLeft } from "react-icons/fi";

const Navbar = () => {
  // Update state toggle logic
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">CHWF</Link>
      </div>
      <button
        className={styles.hamburgerBtn}
        onClick={handleMenuClick} // Change to separate function
      >
        <FiAlignLeft />
        <span className={styles.hamburgerIcon}></span>
      </button>
      <ul
        className={`${styles.navLinks} ${isOpen && styles.open}`} // Conditional class
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">Who we are</Link>
        </li>
        <li>
          <Link href="/Events">Events</Link>
        </li>
        <li>
          <Link href="/Contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
