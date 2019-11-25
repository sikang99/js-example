postFormData('http://example.com/api/v1/users', {user: 'Mary'})
  .then(data => console.log(data))

function postFormData(url, data) {
  return fetch(url, {
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: new URLSearchParams(data),
    headers: new Headers({
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    })
  })
  .then(response => response.json())
  .catch(error => console.error(error))
}
