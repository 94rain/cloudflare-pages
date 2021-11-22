import fetch from 'isomorphic-fetch'

export function getPosts () {
  return fetch('https://posts.94rain.workers.dev/')
}
