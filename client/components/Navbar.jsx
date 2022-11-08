import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <div className={styles.title}>Home</div>
      </Link>
      <div className={styles.links}>
        <Link to="/results">Results</Link>
        <span>|</span>
        <Link to="/">Log Out</Link>
        <Link to="/">Log In</Link>
      </div>
    </nav>
  )
}
