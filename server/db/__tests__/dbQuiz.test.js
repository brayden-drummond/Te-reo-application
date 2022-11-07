const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getQuiz } = require('../dbQuiz')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getQuiz', () => {
  it('gets all quiz questions from the db', () => {
    return getQuiz(testDb).then((quiz) => {
      expect(quiz[0].question).toBe('Test')
      expect(quiz).toHaveLength(2)
    })
  })
})
