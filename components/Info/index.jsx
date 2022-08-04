import React from 'react'
import styles from './styles.module.scss'
import StudioOne from '../../public/StudioOne.svg'
import StudioTwo from '../../public/StudioTwo.svg'

export default function Info() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>What can we do for you?</h3>
                <p>From independents to global brands, Onadio offers a complete and flexible recording experience.</p>
                <img src={StudioOne} alt="" />
            </div>
            <div className={styles.right}>
                <img src={StudioTwo} alt="" />
                <h3>Thousands of Musican trust us.</h3>
                <p>From independents to global brands.</p>
            </div>
        </div>
    )
}
