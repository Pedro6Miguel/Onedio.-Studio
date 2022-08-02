import React from 'react'
import styles from './styles.module.scss'
import HeaderImg from '../../public/Teste.png'

export default function Header() {
    return (
        <main className={styles.container}>
            <div className={styles.left}>
                <span className={styles.number}>01</span>
                <span className={styles.recording}>recording</span>
                <span><img src={HeaderImg} alt="" /></span>
            </div>

            <div className={styles.right}>
                Lets go world
            </div>
        </main>
    )
}
