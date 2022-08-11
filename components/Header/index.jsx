import React from 'react'
import styles from './styles.module.scss'
import HeaderImg from '../../public/Teste.png'
import Ellipse from '../../public/Ellipse.svg'

export default function Header() {
    return (
        <main className={styles.container}>
            <div className={styles.left}>
                <span className={styles.number}>01</span>
                <span className={styles.recording}>recording</span>
                <span><img src={HeaderImg} alt="" /></span>
            </div>

            <div className={styles.right}>
                <span></span>
                <div>
                    <h1>Best Music<br></br>Recording<br></br>Studio Services.</h1>
                    <ul>
                        <li><img src={Ellipse} alt="" /> Free of operating costs and distribution costs</li>
                        <li><img src={Ellipse} alt="" /> Unlimited recording take for couple weeks</li>
                        <li><img src={Ellipse} alt="" /> Free of operating costs and distribution costs</li>
                    </ul>
                    <button className='secondary'>Learn more</button>
                </div>
            </div>
        </main>
    )
}
