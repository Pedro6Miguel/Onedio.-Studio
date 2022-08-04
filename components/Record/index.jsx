import React from 'react'
import styles from './styles.module.scss'

export default function Record() {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <h3>Your <del>record studio</del> is<br></br> going to change the game, right?</h3>
            </div>
            <div className={styles.right}>
                <p>Massa, aliquam odio amet eget mollis pellentesque. Tellus mi diam rhoncus facilisis sed. Eus facilisi nulla pellentesquetus. Fames mauris amet nunc, mauris, porttitor duis venenatis. Posuere dictum elit, dictum purus.</p>
                <button>Read more</button>
            </div>
        </div>
    )
}
