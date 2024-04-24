import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.about}>
    <div className={styles.container}>
      <h1 className={styles.title}>Know about us</h1>
      <div className={styles.content}>
        <p>
          Child Health and Welfare is a non-profit organization dedicated to promoting
          the health and well-being of children. We work tirelessly to ensure
          every child has access to the resources they need to thrive.
        </p>
        <p>
          Our mission is promoting holistic child development and fostering a brighter future by providing comprehensive support, empowering communities, and advocating for policies that prioritize child health and welfare outcomes. We achieve this by:
        </p>
        <ul className={styles.list}>
          <li>Providing [List of services provided]</li>
          <li>Supporting [Beneficiaries of your services]</li>
          <li>Advocating for [Causes you advocate for]</li>
        </ul>
        <p>
          With the help of our dedicated staff, volunteers, and generous donors,
          we have made a significant impact on the lives of countless children.
        </p>
      </div>
      <button className={styles.button}>Get Involved</button>
    </div>
    </div>
  );
};

export default AboutUs;
