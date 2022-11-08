const questions = [
  {
    id: 0,
    question: 'What is 1 + 2?',
    options: [
      { id: 0, text: '3', isCorrect: true },
      { id: 1, text: '4', isCorrect: false },
      { id: 2, text: '2', isCorrect: false },
      { id: 3, text: '5', isCorrect: false },
    ],
  },
  {
    id: 1,
    question: 'What is 10 + 10?',
    options: [
      { id: 0, text: '18', isCorrect: false },
      { id: 1, text: '22', isCorrect: false },
      { id: 2, text: '20', isCorrect: true },
      { id: 3, text: '15', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'What is 9 + 10?',
    options: [
      { id: 0, text: '21', isCorrect: true },
      { id: 1, text: '17', isCorrect: false },
      { id: 2, text: '15', isCorrect: false },
      { id: 3, text: '23', isCorrect: false },
    ],
  },
]

module.exports = { questions }
