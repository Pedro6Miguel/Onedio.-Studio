import React from 'react'
import styles from './styles.module.scss'
import Map from '../../public/Map.jpg'

export default function Location() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>Our Studio.</h3>
                <p>Global brands, Onedio offers a complete and flexible recording experience.</p>
                <button className='secondary'>See all</button>
            </div>
            <div className={styles.right}>
                <img src={Map} alt="" />
            </div>
        </div>
    )
}
