function promiseTimeout(msec) {
    return (promise) => {
      let isDone = false
      promise.then(() => isDone = true)
      const timeout = new Promise((yea, nah) => setTimeout(() => {
        if (!isDone) {
          promise.__timeout = true
          nah(new Error('Timeout expired'))
        }
      }, msec))
      return Promise.race([promise, timeout])
    }
  }
  
  promiseTimeout(5000)(fetch('https://api.github.com/orgs/nodejs'))
  .then(response => response.json())
  .then(data => {
    console.log(data) // Prints result from `response.json()` in getRequest
  })
  .catch(error => console.error(error))