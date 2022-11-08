import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Quiz.module.scss'

import { fetchQuiz } from '../actions/quizAction'
import { questions } from '../questions'

export default function Quiz() {
  const dispatch = useDispatch()
  const quizContent = useSelector((state) => state.quiz)

  // Properties
  const [showFinalResults, setFinalResults] = useState(false)
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => dispatch(fetchQuiz()), [])

  //logic
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinalResults(true)
    }
  }

  const restartGame = () => {
    setScore(0)
    setCurrentQuestion(0)
    setFinalResults(false)
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <h1>Quiz!</h1>

      {/* Current Score */}
      <h2>Current Score: {score}</h2>

      {showFinalResults ? (
        <div className={styles.finalResults}>
          <h1>Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Retake Quiz</button>
        </div>
      ) : (
        <div className={styles.questionCard}>
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className={styles.questionText}>
            {questions[currentQuestion].question}
          </h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
