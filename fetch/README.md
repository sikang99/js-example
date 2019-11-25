## js-example/fetch
Fetch is a promise-based modern replacement of XHR for making HTTP requests in the browser and massively used in PWA Service Workers.


### Usage Patterns
```
fetch(<url>, options)
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.error(err));
```

### History
- 2019/10/30 [How to upload a file using Fetch](https://flaviocopes.com/how-to-upload-files-fetch/)
- 2019/08/15 [**How to upload files on the server using Fetch API**](https://attacomsian.com/blog/uploading-files-using-fetch-api)
- 2019/08/02 [**Fetch API – Introduction To Promised-based Data Fetching In Plain JavaScript**](https://codingthesmartway.com/fetch-api-introduction-to-promised-based-data-fetching-in-plain-javascript/)
- 2019/05/12 [Introduction to JavaScript Fetch API](https://attacomsian.com/blog/javascript-fetch-api)
- 2019/03/04 [How to upload files with Fetch to Node.js (without using FormData)](https://medium.com/@CWMma/how-to-upload-files-with-fetch-to-node-js-without-using-formdata-687e35ba1ab6)
- 2019/01/27 [Using Fetch API to Get and Post](https://dev.to/dev_amaz/using-fetch-api-to-get-and-post--1g7d)
- 2019/01/07 [**You may not need Axios**](https://danlevy.net/you-may-not-need-axios/)
- 2016/01/04 [HTTP/REST API File Uploads](https://phil.tech/api/2016/01/04/http-rest-api-file-uploads/)


### Information
- [Fetch](https://github.github.io/fetch/)
- [fetch() upload streaming](https://chromestatus.com/features/5274139738767360)
- [Fetch & Streams API Progress Indicator Examples](https://fetch-progress.anthum.com/)
- [The Fetch API](https://flaviocopes.com/fetch-api/)
- [Request()](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)
- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) 
    - [Using readable streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams)
    - [Using writable streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_writable_streams)
- [Ftech API Demo](https://demo-107.codingthesmartway.com/)    


### Open Source
- [github/fetch](https://github.com/github/fetch) - A window.fetch JavaScript polyfill
- [AnthumChris/fetch-progress-indicators](https://github.com/AnthumChris/fetch-progress-indicators) - Progress indicators/bars using Streams, Service Workers, and Fetch APIs
- [axios/axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js