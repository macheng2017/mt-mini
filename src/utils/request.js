import fly from 'flyio'

export function getData () {
  fly.post('http://localhost:3000/api/v1/posts').then(function (data) {
    console.log(data)
  })
}
