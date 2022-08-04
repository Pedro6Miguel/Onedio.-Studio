import React from 'react'
import styles from './styles.module.scss'
import Sound from '../../public/Sound.svg'

export default function Lyrics() {
    return (
        <div className={styles.container}>
            <img src={Sound} alt="" />
            <h3>Sometimes life gets fucked up. That's why we get fucked up.</h3>
            <h6>“U Said” - Lil Peep</h6>
            <p>Emo rap Artist</p>
        </div>
    )
}
