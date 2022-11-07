import request from 'superagent'

const rootUrl = '/api/v1'

export function getQuizContent() {
  return request.get(rootUrl + '/quiz').then((res) => {
    return res.body
  })
}
