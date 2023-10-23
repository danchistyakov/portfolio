import Image from 'next/image'
import styles from './page.module.css'
import Bio from "@/app/components/Bio";
import Works from "@/app/components/Works";
import Header from "@/app/components/Header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <img className={styles.gradient} src='gradient_up.png'/>
            <Bio/>
            <Works/>
        </main>
    )
}
