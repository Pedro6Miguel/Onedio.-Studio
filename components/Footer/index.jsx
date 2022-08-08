import React from 'react'
import styles from './styles.module.scss'

import FooterLogo from '../../public/Footer.svg'
import Logo from "../../public/OnedioLogo.svg"

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.teste}>
                <img src={FooterLogo} alt="" />
            </div>

            <div className={styles.vamos}>
                <img className={styles.logo} src={Logo} alt="" />
                <div>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Features</a>
                </div>
                <p>Copyright 2022. All Right Reserved.</p>
            </div>
        </div>
    )
}
