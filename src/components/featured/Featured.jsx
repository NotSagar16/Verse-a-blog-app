import React from 'react'
import styles from "./Featured.module.css"
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Journey, Your Words: Start Blogging Today</h1>
      <div className={styles.post}>
        <div className={styles.imgcontainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textcontainer}>
          <h1 className={styles.posttitle}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.postdesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur expedita! Enim veritatis, quia culpa autem voluptatibus perspiciatis aut maiores unde quis eveniet cupiditate? Dignissimos!</p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured