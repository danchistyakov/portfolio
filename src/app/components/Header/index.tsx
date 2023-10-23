import React from 'react';
import styles from './Header.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <p>About</p>
                <p>Works</p>
                <p>Contact</p>
            </div>
            <div className={styles.icons}>
                <Link href='https://www.linkedin.com/in/daniilchistyakov/' target='_blank'>
                    <img src='LinkedIn.svg'/>
                </Link>
                <Link href='https://github.com/danchistyakov' target='_blank'>
                    <img src='Github.svg'/>
                </Link>
                <Link href='https://t.me/danchistyakov' target='_blank'>
                    <img src='Telegram.svg'/>
                </Link>
            </div>
        </div>
    );
};

export default Header;
