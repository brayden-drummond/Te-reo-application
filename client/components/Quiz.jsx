import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Quiz.module.scss'

import { fetchQuiz } from '../actions/quizAction'

export default function Quiz() {
  const dispatch = useDispatch()
  const quizContent = useSelector((state) => state.quiz)

  useEffect(() => dispatch(fetchQuiz()), [])
  return (
    <div className={styles.container}>
      <h1>Quiz!</h1>
      <h2>Current Score</h2>
      <div className={styles.questionCard}>
        <h2>Question X out of 5</h2>
        <h3 className={styles.questionText}>The Question is</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  )
}
