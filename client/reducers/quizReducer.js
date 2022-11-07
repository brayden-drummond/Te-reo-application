import { SET_QUIZ } from '../actions/quizAction'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_QUIZ:
      return payload
    default:
      return state
  }
}

export default reducer
