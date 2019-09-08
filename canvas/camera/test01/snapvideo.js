window.addEventListener('DOMContentLoaded', function() {

// Grab elements, create settings, etc.
var video = document.getElementById('video');

function ToggleCamera(video) {
    // check if camera is already on
    if (video.srcObject) { 
        video.srcObject = undefined;
        return;
    }
    // Get access to the camera!
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
    }
}

document.getElementById("camera").addEventListener("click", function() {
    if (video == undefined) return;
    ToggleCamera(video);
});

function ToggleVideo(video) {
    if (video.srcObject == undefined) return;
    video.srcObject.getTracks().forEach(t => t.enabled = !t.enabled);
}

document.getElementById("toggle").addEventListener("click", function() {
    ToggleVideo(video);
});

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 320, 240);
});

var txt = document.getElementById('log');

function logPrint(txt, msg) {
    txt.value += msg + '\n';
}
//var log = msg => div.innerHTML += "<br>" + msg;

logPrint(txt, "Ready to play. Capture video from camera.");

}, false);
