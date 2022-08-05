import React from 'react'
import styles from './styles.module.scss'
import { AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>Get in touch.</h3>
                <p>Libero volutpat mi euismod tellus etiam ac egestas odio. Molestie nibh turps tincidutie nibh turps tincidutie nibh turps tincidutie nibh turps tincidunt.</p>
                <div>
                    <a href="#"><AiOutlineTwitter size={30} color={"#262626"} /></a>
                    <a href="#"><AiFillInstagram size={30} color={"#262626"} /></a>
                    <a href="#"><AiFillYoutube size={30} color={"#262626"} /></a>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.first}>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                </div>
                <textarea type="text" placeholder='Message' />
                <div className={styles.second}>
                    <div>
                        <input type="radio" />
                        <p>I accept this for my future newsletter and be yours for ever and ever</p>
                    </div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}
