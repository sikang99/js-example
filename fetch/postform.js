postForm('http://example.com/api/v1/users', 'form#userEdit')
  .then(data => console.log(data))

function postForm(url, formSelector) {
  const formData = new FormData(document.querySelector(formSelector))

  return fetch(url, {
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: formData  // a FormData will automatically set the 'Content-Type'
  })
  .then(response => response.json())
  .catch(error => console.error(error))
}