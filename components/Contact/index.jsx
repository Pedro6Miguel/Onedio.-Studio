import React from 'react'
import styles from './styles.module.scss'

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h3>Get in touch.</h3>
                <p>Libero volutpat mi euismod tellus etiam ac egestas odio. Molestie nibh turps tincidutie nibh turps tincidutie nibh turps tincidutie nibh turps tincidunt.</p>
                <div>
                    <a href="#">Insta</a>
                    <a href="#">Twitter</a>
                    <a href="#">Youtube</a>
                </div>
            </div>
            <div className={styles.right}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod neque numquam rem natus repudiandae suscipit nostrum, ratione enim fuga, sequi et a reprehenderit aspernatur maiores asperiores corporis, impedit quae ipsam!</p>
            </div>
        </div>
    )
}
