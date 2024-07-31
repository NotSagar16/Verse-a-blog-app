import Link from 'next/link'
import styles from './card.module.css'
import Image from 'next/image'
const Card = () => {
  return (
    <Link href="/">
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11/03/2024 - </span>
                    <span className={styles.category}>Culture</span>
                </div>
                
                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                
                <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium rerum assumenda qui quis deleniti sunt reiciendis? Ratione, dolore cupiditate?</p>
                <Link href="/" className={styles.link}>Read more</Link>
            </div>
        </div>
    </Link>
  )
}

export default Card