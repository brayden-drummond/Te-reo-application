exports.seed = async (knex) => {
  await knex('movies').insert([
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
  ])
}
