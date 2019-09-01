"use strict";

export function chromakey(data) {
    for (let i = 0; i < data.length; i+=4) {
        let r = data[i+0];
        let g = data[i+1];
        let b = data[i+2];
        if (g > 100 && r > 100 && b < 50)
            data[i+ 3] = 0;
    }
    return data;
}

export function invert(data) {
    for (let i = 0; i < data.length/2; i+=4) {
        data[i] = 255 - data[i];		// R
        data[i+1] = 255 - data[i+1]; 	// G
        data[i+2] = 255 - data[i+2]; 	// B
        data[i+3] = 255;			// alpha
    }
    return data;
}

export function brightness(data, value) {
    for(var i =0; i< data.length; i+=4){
        data[i] += value/3;
        data[i+1] += value/3;
        data[i+2] += value/3;
    }
    return data;
}

export function grayscale(data) {
    for(var i =0; i< data.length; i+=4){
        let r = data[i];
        let g = data[i+1];
        let b = data[i+2];

        var v = 0.2126*r + 0.7152*g + 0.0722*b;  // complemented value
        data[i] = data[i+1] = data[i+2] = v      // same rgb values
    }
    return data;
}

// old style image
export function sepia(data) {
    for (let i = 0; i < data.length; i+=4) {
        let r = data[i+0];
        let g = data[i+1];
        let b = data[i+2];
        
        data[i] = r*0.3588 + g*0.7044 + b*0.1368;
        data[i+1] = r*0.2990 + g*0.5870 + b+0.1140;
        data[i+2] = r*0.2392 + g*0.4696 + b*0.0912;
    }
    return data;
}