// pages/index.js
import React from 'react';
import Timeline from './Timeline';
import styles from'./SpeechBubbles.module.css'

const events = [
  { title: 'Zero Discrimination Day', description: 'Description for event 1', date: '2024-03-01' ,side:'left'},
  { title: 'World Birth Defect Day', description: 'Description for event 2', date: '2024-03-03' ,side:'right'},
  { title: 'World Hearing Day', description: 'Description for event 3', date: '2024-03-03' ,side:'right'},
  { title: 'World Obesity Day', description: 'Description for event 1', date: '2023-03-04' ,side:'left'},
  { title: 'World Glaucoma Day', description: 'Description for event 2', date: '2023-03-15 to 2023-03-17' ,side:'right'},
  { title: 'International Womens Day', description: 'Description for event 3', date: '2024-03-08' ,side:'left'},
  { title: 'World Kidney Day', description: 'Description for event 1', date: '2023-03-14' ,side:'right'},
  { title: 'International Day for the Elimination ', description: ' of Racial Discrimination', date: '2023-03-21' ,side:'left'},
  { title: 'World Down Syndrome Day', description: 'Description for event 3', date: '2024-03-21' ,side:'right'},
  { title: 'World Water Day', description: 'Description for event 1', date: '2023-03-22' ,side:'left'},
  { title: 'World Tuberculosis', description: 'Description for event 2', date: '2023-03-24' ,side:'right'},
  { title: 'International Day of Solidarity with Detained ', description: ' and Missing Staff Members', date: '2024-03-25' ,side:'left'},
];

const IndexPage = () => {
  return (
    <div className={styles.calendar}>
    <div className={styles.container}>
    <div className={styles.header}><h1>Our Events this year</h1></div>
    <div>
      <Timeline events={events}/>
    </div>
    </div>
    </div>
  );
};

export default IndexPage;
