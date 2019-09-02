// worker1.js
var port;

// listen on main.html who created this worker
onmessage = function(e) {
	if (e.data == 'here is your port') {
		port = e.ports[0];
	} else {
		// i am just a messenger, so pass it to w2
		// this port is used to talk to who eles get the other port of the MessageChannel
		port.postMessage('boss wants me(worker1) to tell you: ' + e.data);
	}
};