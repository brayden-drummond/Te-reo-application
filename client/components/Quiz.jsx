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
      <div>
        {quizContent.map((question) => {
          return (
            <div key={question.id}>
              <p>{question.question}</p>
              <p>{question.answer}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
