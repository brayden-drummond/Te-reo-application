import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Learn about Te Reo</h1>
      <div className={styles.text}>
        <p>Click Quiz!</p>
      </div>
      <div className={styles.buttoncontainer}>
        <Link to="/quiz">
          <button className={styles.button}>Take Quiz!</button>
        </Link>
      </div>
    </div>
  )
}
