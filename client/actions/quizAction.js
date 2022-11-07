import { getQuizContent } from '../apis/quizApi'

export const SET_QUIZ = 'SET_QUIZ'

export function setQuiz(quiz) {
  return {
    type: SET_QUIZ,
    payload: quiz,
  }
}

export function fetchQuiz() {
  return (dispatch) => {
    return getQuizContent()
      .then((fruits) => {
        dispatch(setQuiz(fruits))
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
