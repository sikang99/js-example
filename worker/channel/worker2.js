// --- worker2.js
var port;

// listen on creator of this worker
onmessage = function(e) {
	if (e.data == 'here is your port') {
		port = e.ports[0];
		// listen on this port, message comming from worker1 will get here
		port.onmessage = function(e) {
			// tell boss that I have got the message from him through worker1
			postMessage('I have got you message, boss. You said: ' + e.data);
		};
	}
};

