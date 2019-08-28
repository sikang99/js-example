var blob = new Blob([
    `  
  let bitmap = undefined;
  let canvas = undefined;
  let ctx    = undefined;

let postAMessage=self.postMessage;

self.onmessage = function(ev) {
  if(ev.data.msg === 'bitmap' && canvas != undefined) {
		bitmap = ev.data.imageB;

	console.log("Received an ImageBitmap next!");
    while (true)
	{
		ctx.clearRect(0,0,640,480);
		ctx.drawImage(bitmap, 0,0);
	}
  }

  if(ev.data.msg === 'init' && bitmap != undefined) {
    canvas = ev.data.canvas;
    ctx = canvas.getContext('2d');
	console.log("Received a canvas next!");
	
    while (true)
	{
		ctx.clearRect(0,0,640,480);
		ctx.drawImage(bitmap, 0,0);
	}
  }

  if(ev.data.msg === 'bitmap' && canvas == undefined) {
	console.log("Received a bitmap first!");
	
		bitmap = ev.data.imageB;
  }

  if(ev.data.msg === 'init' && bitmap == undefined) {
	console.log("Received a canvas first!");
	
    canvas = ev.data.canvas;
    ctx = canvas.getContext('2d');

  }

}
`]);

var myWorker = new Worker(window.URL.createObjectURL(blob));
var buff = new ArrayBuffer(8);


var img = new Image();

img.src = "https://www.google.com/s2/favicons?domain=www.google.com";

img.decode().then(() => {createImageBitmap(img).then(Ibitmap => { myWorker.postMessage({imageB: Ibitmap, msg:'bitmap'}, [Ibitmap]);  })});

var canvas =  document.createElement("canvas");
var c2 =  document.createElement("canvas");
c2.width = 640;
c2.height = 480;
c2 = c2.transferControlToOffscreen();

canvas.width = 640;
canvas.height = 480;
c2.width = 640;
c2.height = 480;

var ctx = canvas.getContext('2d');

myWorker.postMessage({msg: 'init', canvas: c2}, [c2]);

