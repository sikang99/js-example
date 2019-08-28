/**
 * © 2010 Mihai Șucan
 * http://www.robodesign.ro/
 */

onmessage = function (ev) {
  if (ev && ev.data && ev.data.type == 'calcHist') {
    calcHist(ev.data.histType, ev.data.accuracy, ev.data.frameData, ev.data.timeStart);
  }
};

var calcHist = function (type, step, frameData, timeStart) {
  var chans = [[]], v = 0, m = 1,
      maxCount = 0, val, subtype = 0;

  if (type == 16) {
    chans = [[], [], []];
    subtype = 1;
    m = 3;
  } else if (type === 'cmyk') {
    chans = [[], [], [], []];
    subtype = 1;
    m = 4;
  }

  if (type & 2) { // green, sat, magenta
    v = 1;
  } else if (type & 4) { // blue, value, yellow
    v = 2;
  } else if (type & 8) { // kelvin
    v = 3;
  }

  for (var i = 0, n = frameData.length; i < n; i+= step) {
    if (type & 16) { // rgb
      val = [frameData[i], frameData[i+1], frameData[i+2]];
    } else if (type & 32) { // cmyk
      val = rgb2cmyk(frameData[i], frameData[i+1], frameData[i+2]);
    } else if (type & 64) { // hsv
      val = rgb2hsv(frameData[i], frameData[i+1], frameData[i+2]);
    }

    for (var j = v, y = 0; y < m; y++, j++) {
      if (val[j] in chans[y]) {
        chans[y][val[j]]++;
      } else {
        chans[y][val[j]] = 1;
      }

      if (chans[y][val[j]] > maxCount) {
        maxCount = chans[y][val[j]];
      }
    }
  }

  postMessage({'type': 'drawHist', 'chans': chans, 'maxCount': maxCount, 'timeStart': timeStart, 'histType': type});
};

var rgb2hsv = function (red, green, blue) {
  var hue,
      max   = Math.max(red, green, blue),
      delta = max - Math.min(red, green, blue);

  // This is gray (red==green==blue)
  if (delta == 0) {
    return [0, 0, max];
  } else {
    if (max == red) {
      hue = ((green -  blue) / delta) / 6;
    } else if (max == green) {
      hue = ((blue  -   red) / delta + 2) / 6;
    } else if (max ==  blue) {
      hue = ((red   - green) / delta + 4) / 6;
    }

    if (hue < 0) {
      hue += 1;
    }

    // [hue, saturation, value]
    return [(hue*255) << 0, (delta / max * 255) << 0, max];
  }
};

// Note that this is only an approximation of the CMYK color space. For proper
// CMYK color space conversion one needs to implement support for color
// profiles.
var rgb2cmyk = function (red, green, blue) {
  var cyan    = 255 - red,
      magenta = 255 - green,
      yellow  = 255 - blue,
      black   = Math.min(cyan, magenta, yellow);

  if (black == 255) {
    return [0, 0, 0, 255];
  } else {
    return [cyan - black, magenta - black, yellow - black, black];
  }
};

// vim:set spell spl=en fo=wancroql tw=80 ts=2 sw=2 sts=2 sta et ai cin fenc=utf-8 ff=unix:
