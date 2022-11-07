const request = require('supertest')
const server = require('../../server')

const { getQuiz } = require('../../db/dbQuiz')
jest.mock('../../db/dbQuiz')

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

describe('GET /api/v1/quiz', () => {
  it('should return status 200 and quiz questions', () => {
    getQuiz.mockReturnValue(Promise.resolve(mockQuizData))
    return request(server)
      .get('/api/v1/quiz')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(mockQuizData).toEqual(res.body)
      })
  })
  it('should return status 500 and an error message when database fails', () => {
    getQuiz.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return request(server)
      .get('/api/v1/quiz')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('wrong')
      })
  })
})
