import React from 'react'
import styles from './styles.module.scss'
import Music from '../../public/Music.svg'

export default function MusicPlayer() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={Music} alt="" />
            </div>
            <div className={styles.right}>

            </div>
        </div>
    )
}
