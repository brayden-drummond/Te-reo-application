import nock from 'nock'

import { getQuizContent } from '../quizApi'

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
  it('gets home page content', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/quiz')
      .reply(200, mockQuizData)

    const homeContent = await getQuizContent()
    expect(homeContent).toEqual(mockQuizData)
    scope.done()
  })
})
