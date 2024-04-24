import React from 'react';
import styles from './ContactUsFooter.module.css'; // Import CSS module

const ContactUsFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h2>Contact Us</h2>
          <p>We would love to hear from you!</p>
          <ul>
            <li>
              <a href="mailto:your@email.com">Email</a>
            </li>
            <li>
              <a href="https://your-website.com/contact">Website form</a>
            </li>
          </ul>
        </div>
        <div className={styles.socialLinks}>
          <h2>Follow Us</h2>
          <ul>
            <li>
              <a href="https://your-twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://your-facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://your-instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactUsFooter;
