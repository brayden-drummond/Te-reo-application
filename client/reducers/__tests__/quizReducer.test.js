import { SET_QUIZ } from '../../actions/quizAction'
import quiz from '../quizReducer'

const mockQuizData = [
  {
    id: 0,
    question: 'Test',
    options: [
      { id: 0, option: 'This', isCorrect: true },
      { id: 1, option: 'Is', isCorrect: false },
      { id: 2, option: 'Now', isCorrect: false },
      { id: 3, option: 'Working', isCorrect: false },
    ],
  },
  {
    id: 1,
    question: 'Test',
    options: [
      { id: 0, option: 'This', isCorrect: true },
      { id: 1, option: 'Is', isCorrect: false },
      { id: 2, option: 'Now', isCorrect: false },
      { id: 3, option: 'Working', isCorrect: false },
    ],
  },
]

describe('quiz reducer', () => {
  it('returns action payload for the type SET_QUIZ', () => {
    const action = {
      type: SET_QUIZ,
      payload: mockQuizData,
    }
    const initialState = []
    const expectedState = mockQuizData
    const outputState = quiz(initialState, action)
    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toEqual(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = quiz(undefined, [])

    expect(outputState).toEqual(expectedState)
  })
})
