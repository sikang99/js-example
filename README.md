# sikang99/js-example

Javascript programming


## Web Worker

### History
- 2019/07/22 [Using WebAssembly with Web Workers](https://www.sitepen.com/blog/using-webassembly-with-web-workers/)
- 2018/10/01 [A Quick Look at WorkerDOM](https://www.loxodrome.io/post/worker-dom/)
- 2018/09/09 [**Improved Performance with OffscreenCanvas**](https://newinweb.com/2018/09/10/offscreen-canvas/)
- 2018/08/28 [50 popular JavaScript open-source projects on GitHub in 2018](https://hackernoon.com/50-popular-javascript-open-source-projects-on-github-in-2018-469c11b48b8d)
- 2018/07/04 [Service Worker State Management](https://www.loxodrome.io/page/2/)
    - Service Workers are a separate thread that sit at in the background at browser level (rather than the page level like Web Workers) allowing pages and workers on the same domain scope (i.e. example.com) to interact with it.
- 2018/05/22 [Examining Web Worker Performance](https://www.loxodrome.io/post/web-worker-performance/)
    -  web worker libraries: greenlet, Workerize and [Comlink](https://github.com/GoogleChromeLabs/comlink)
    -  transferable values of type ArrayBuffer, MessagePort, ImageBitmap
- 2018/04/01 [How to use Web Workers to schedule consistent asynchronous tasks in JavaScript](https://www.freecodecamp.org/news/how-web-workers-can-help-with-consistent-asynchronous-tasks-in-javascript-cd6d728fa4ee/)
- 2018/02/18 [Easier Web Workers](https://www.loxodrome.io/post/easier-web-workers/)
    - Greenlet, Comlink, Operative
    - promise-worker, Workerize, Clooney
    - Fibrelite based on greenlet
- 2017/04/30 [JavaScript: From Workers to Shared Memory](https://lucasfcosta.com/2017/04/30/JavaScript-From-Workers-to-Shared-Memory.html)


### Information
- [**NavidZ/input-for-workers**](https://github.com/NavidZ/input-for-workers) - Specification for exposing input events to workers
- [Reducing input latency on the web](https://www.w3.org/2018/12/games-workshop/slides/20-reducing-input-latency.pdf)
- [**Web Workers API: Using web workers**](https://code-examples.net/en/docs/dom/web_workers_api/using_web_workers)
- [Web Workers API](https://code-examples.net/en/docs/dom/web_workers_api)
- [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
    - dedicated workers, shared workers, embedded workers
- [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
- [**is Service Worker ready?**](https://jakearchibald.github.io/isserviceworkerready/resources.html)
- [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)
- [A simple demo to show shared worker basics.](https://discourse.threejs.org/t/web-workers-in-3d-web-applications/5674)
    - [three.js offscreen canvas example](https://threejs.org/examples/webgl_worker_offscreencanvas.html)
 - [**Low-latency rendering with the desynchronized hint**](https://developers.google.com/web/updates/2019/05/desynchronized)


### Stack Overflow
- [How to share variables from main thread and web workers in javascript?](https://stackoverflow.com/questions/47850679/how-to-share-variables-from-main-thread-and-web-workers-in-javascript)
- Tags
    - [service worker](https://stackoverflow.com/questions/tagged/service-worker)
    - [web worker](https://stackoverflow.com/questions/tagged/web-worker)

### Open Source
- [jamesmilneruk/fibrelite](https://github.com/jamesmilneruk/fibrelite) - keeping the mainthread free with inline Web Workers
- [amesMilnerUK/web-worker-comparison](https://github.com/JamesMilnerUK/web-worker-comparison) - Comparing plain Web Workers and various associated libraries
- [**ampproject/worker-dom**](https://github.com/ampproject/worker-dom) - The same DOM API and Frameworks you know, but in a Web Worker
- [DannyMcwaves/web-workers](https://github.com/DannyMcwaves/web-workers) - An exemplary introduction to web workers.
- [lars-t-hansen/parlib-simple](https://github.com/lars-t-hansen/parlib-simple)
- [https://github.com/greenido/Web-Workers-Examples-](https://github.com/greenido/Web-Workers-Examples-) - Web Workers Example of book
- [pshihn/workly](https://github.com/pshihn/workly)i - A really simple way to move a function or class to a web worker
- [developit/workerize](https://github.com/developit/workerize)
- [israelss/simple-web-worker](https://github.com/israelss/simple-web-worker)
- [mdn/simple-web-worker](https://github.com/mdn/simple-web-worker) - A simple web worker test.
- [mdn/simple-shared-worker](https://github.com/mdn/simple-shared-worker) - A simple demo to show shared worker basics.

### Persons
- [loxodrome.io](https://www.loxodrome.io) - WebAssembly, Web Worker, Web Component, Go, WorkerDOM

