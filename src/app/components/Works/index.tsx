import React from 'react';
import styles from './Works.module.css';
import Work from "./components/Work";

const Works = () => {
    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <section className={styles.container}>
            <h2>Selected works</h2>
            {arr.map(item => (
                <Work/>
            ))}
        </section>
    );
};

export default Works;
