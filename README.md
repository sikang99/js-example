# sikang99/js-example

Javascript programming

## Web Worker
- [Web Workers](https://w3c.github.io/workers/), Editor’s Draft, 26 June 2017


### History
- 2019/07/22 [Using WebAssembly with Web Workers](https://www.sitepen.com/blog/using-webassembly-with-web-workers/)
- 2019/06/20 [The ImageBitmap rendering context for <offscreenCanvas>](https://www.chromestatus.com/feature/5700221617045504)
- 2019/06/20 [Understanding Worker Threads in Node.js](https://nodesource.com/blog/worker-threads-nodejs/)
- 2019/06/19 [Real-time processing with Web Workers](https://blog.logrocket.com/real-time-processing-web-workers/)
- 2019/05/16 [Web Workers](https://flaviocopes.com/web-workers/)
    - [The Channel Messaging API](https://flaviocopes.com/channel-messaging-api/)
- 2019/05/13 [Web Workers in the Real World](https://medium.com/samsung-internet-dev/web-workers-in-the-real-world-d61387958a40)
- 2019/04/29 [Optimizing JavaScript Application Performance with Web Workers](https://www.twilio.com/blog/optimize-javascript-application-performance-web-workers)
- 2019/04/03 [Faster WebGL/Three.js 3D graphics with OffscreenCanvas and Web Workers](https://dev.to/evilmartians/faster-webgl-three-js-3d-graphics-with-offscreencanvas-and-web-workers-43he)
- 2019/04/03 [JavaScript Web Workers: A Beginner’s Guide](https://www.sitepoint.com/javascript-web-workers/)
- 2019/03/07 [Introduction to Web Workers](https://blog.bitsrc.io/introduction-to-web-workers-674d372f1b85)
- 2019/02/27 [**Web Workers Demystified**](https://medium.com/clockwork-nl/web-workers-demystified-fb4c84bd566c)
- 2019/02/22 [Service workers and SEO: What developers should know](https://searchengineland.com/service-workers-and-seo-seo-for-developers-311292)
    - The original idea for service workers is to allow programmers the ability to create native-like apps using only Web technology.
    - PWA, Edge SEO, push notification, dynamic content 
- 2019/00/00
- 2018/12/12 [Web workers in action: why they’re helpful, and how you should use them](https://www.freecodecamp.org/news/web-workers-in-action-2c9ff33be266/)
- 2018/11/20 [Web workers vs Service workers vs Worklets](https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/)
- 2018/10/31 [Transferable ImageData](https://www.kevinhoyt.com/2018/10/31/transferable-imagedata/)
- 2018/10/23 [**Image Processing in a Web Worker**](https://www.kevinhoyt.com/2018/10/23/image-processing-in-a-web-worker/)
- 2018/10/01 [A Quick Look at WorkerDOM](https://www.loxodrome.io/post/worker-dom/)
- 2018/09/23 [Building an Async React Renderer with Diffing in Web Worker](https://medium.com/@azizhk/building-an-async-react-renderer-with-diffing-in-web-worker-f3be07f16d90)
- 2018/09/09 [**Improved Performance with OffscreenCanvas**](https://newinweb.com/2018/09/10/offscreen-canvas/)
- 2018/08/28 [50 popular JavaScript open-source projects on GitHub in 2018](https://hackernoon.com/50-popular-javascript-open-source-projects-on-github-in-2018-469c11b48b8d)
- 2018/07/04 [Service Worker State Management](https://www.loxodrome.io/page/2/)
    - Service Workers are a separate thread that sit at in the background at browser level (rather than the page level like Web Workers) allowing pages and workers on the same domain scope (i.e. example.com) to interact with it.
- 2018/05/22 [Examining Web Worker Performance](https://www.loxodrome.io/post/web-worker-performance/)
    -  web worker libraries: greenlet, Workerize and [Comlink](https://github.com/GoogleChromeLabs/comlink)
    -  transferable values of type ArrayBuffer, MessagePort, ImageBitmap
- 2018/04/01 [**Parallel programming in JavaScript using Web Workers**](https://itnext.io/achieving-parallelism-in-javascript-using-web-workers-8f921f2d26db)
    - Transferable objects : ArrayBuffer, MessagePort and ImageBitmap
    - `worker.postMessage(payload, transferableObjects)`
    - Once these objects are transferred, they become neutered or unusable and can not be transferred again.
- 2018/04/01 [How to use Web Workers to schedule consistent asynchronous tasks in JavaScript](https://www.freecodecamp.org/news/how-web-workers-can-help-with-consistent-asynchronous-tasks-in-javascript-cd6d728fa4ee/)
- 2018/03/26 [Using web workers for safe, concurrent JavaScript](https://blog.logrocket.com/using-webworkers-for-safe-concurrent-javascript-3f33da4eb0b2/)
    - [Image Filters with Canvas](https://www.html5rocks.com/en/tutorials/canvas/imagefilters/)
- 2018/02/18 [Easier Web Workers](https://www.loxodrome.io/post/easier-web-workers/)
    - Greenlet, Comlink, Operative
    - promise-worker, Workerize, Clooney
    - Fibrelite based on greenlet
- 2018/00/00
- 2017/11/23 [Introduction to Shared Memory in JavaScript](https://www.hongkiat.com/blog/shared-memory-in-javascript/)
- 2017/04/30 [JavaScript: From Workers to Shared Memory](https://lucasfcosta.com/2017/04/30/JavaScript-From-Workers-to-Shared-Memory.html)


### Information
- [Performance comparison among Blocking Code, Async Programming and Web Workers](https://bhushangoel.github.io/webworker-demo-1/)
- [**NavidZ/input-for-workers**](https://github.com/NavidZ/input-for-workers) - Specification for exposing input events to workers
- [Reducing input latency on the web](https://www.w3.org/2018/12/games-workshop/slides/20-reducing-input-latency.pdf)
- [**Web Workers API: Using web workers**](https://code-examples.net/en/docs/dom/web_workers_api/using_web_workers)
- [Web Workers API](https://code-examples.net/en/docs/dom/web_workers_api)
- [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
    - dedicated workers, shared workers, embedded workers
- [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
- [**is Service Worker ready?**](https://jakearchibald.github.io/isserviceworkerready/resources.html)
- [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)
- [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)
- [A simple demo to show shared worker basics.](https://discourse.threejs.org/t/web-workers-in-3d-web-applications/5674)
    - [three.js offscreen canvas example](https://threejs.org/examples/webgl_worker_offscreencanvas.html)
- [**Low-latency rendering with the desynchronized hint**](https://developers.google.com/web/updates/2019/05/desynchronized)
- [The Service Worker Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)

### Stack Overflow
- [How to share variables from main thread and web workers in javascript?](https://stackoverflow.com/questions/47850679/how-to-share-variables-from-main-thread-and-web-workers-in-javascript)
- Tags
    - [service worker](https://stackoverflow.com/questions/tagged/service-worker)
    - [web worker](https://stackoverflow.com/questions/tagged/web-worker)

### Open Source
- [satya164/web-worker-proxy](https://github.com/satya164/web-worker-proxy) - A better way of working with web workers
- [liron-navon/web-workers-examples](https://github.com/liron-navon/web-workers-examples)
- [9jaswag/web-performance-with-workers](https://github.com/9jaswag/web-performance-with-workers) - demo app for improving web performance using Web Workers
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

