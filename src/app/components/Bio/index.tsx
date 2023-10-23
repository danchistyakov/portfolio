import React from 'react';
import styles from './Bio.module.css';

const Bio = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
            <h1 className={styles.title}>I’m Daniil Chistyakov</h1>
            <h2 className={styles.description}>A Fullstack Engineer helping startups turn their visions into a tech reality. I
                specialize in designing and building modern mobile and web-based apps.</h2>
            <div className={styles.buttons}>
                <button className={styles.button}>See my resume</button>
                <button className={styles.button}>Get in touch</button>
            </div>
            </div>
            <img className={styles.portrait} src='portrait.jpg'/>
        </section>
    );
};

export default Bio;
