import { fetchQuiz, SET_QUIZ } from '../quizAction'
import { getQuizContent } from '../../apis/quizApi'

jest.mock('../../apis/quizApi')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

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

describe('fetchQuiz', () => {
  it('dispatches SET_QUIZ action', () => {
    getQuizContent.mockReturnValue(Promise.resolve(mockQuizData))
    return fetchQuiz()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_QUIZ,
        payload: mockQuizData,
      })
    })
  })
  it('console.errors if api request fails', () => {
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getQuizContent.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchQuiz()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
