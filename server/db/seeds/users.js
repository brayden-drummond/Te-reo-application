exports.seed = async (knex) => {
  await knex('users').insert([
    { auth0_id: '1', name: 'Hey' },
    { auth0_id: '2', name: 'There' },
    { auth0_id: '3', name: 'Bills' },
  ])
}
