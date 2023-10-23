import React from 'react';
import styles from './Work.module.css';

const Work = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.logo} src='logo.webp'/>
                <h3 className={styles.title}>Laguna - social network app</h3>
                <h4 className={styles.description}>Subbi is a side project that I’ve built to help me keep track of how
                    much I spend on subscriptions and also to prevent the “accidental” bill after a 14-day trail ends.
                    It helps you keep track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card, Bank Cards, and
                    many more.</h4>
                <a className={styles.link}>Visit</a>
            </div>
            <img className={styles.image} src='Laguna.png'/>
        </div>
    );
};

export default Work;
