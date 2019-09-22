// variables
var canvas, ctx;
var imgObj;

// filter strength
var strength = 0.5;

// shifting matrix
var matrix = [-2, -1, 0, -1, 1, 1, 0, 1, 2];

// normalize matrix
function normalizeMatrix(m) {
    var j = 0;
    for (var i = 0; i < m.length; i++) {
        j += m[i];
    }
    for (var i = 0; i < m.length; i++) {
        m[i] /= j;
    }
    return m;
}

// convert x-y coordinates into pixel position
function convertCoordinates(x, y, w) {
    return x + (y * w);
}

// find a specified distance between two colours
function findColorDiff(dif, dest, src) {
    return dif * dest + (1 - dif) * src;
}

// transform matrix
function transformMatrix(img, pixels) {

    // create a second canvas and context to keep temp results
    var canvas2 = document.createElement('canvas');
    var ctx2 = canvas2.getContext('2d');
    ctx2.width = canvas2.width = img.width;
    ctx2.height = canvas2.height = img.height;

    // draw image
    ctx2.drawImage(img, 0, 0, img.width , img.height);
    var buffImageData = ctx2.getImageData(0, 0, canvas.width, canvas.height);

    var data = pixels.data;
    var bufferedData = buffImageData.data;

    // normalize matrix
    matrix = normalizeMatrix(matrix);
    var mSize = Math.sqrt(matrix.length);

    for (var i = 1; i < img.width - 1; i++) {
        for (var j = 1; j < img.height - 1; j++) {

            var sumR = sumG = sumB = 0;

            // loop through the matrix
            for (var h = 0; h < mSize; h++) {
                for (var w = 0; w < mSize; w++) {
                    var r = convertCoordinates(i + h - 1, j + w - 1, img.width) << 2;

                    // RGB for current pixel
                    var currentPixel = {
                        r: bufferedData[r],
                        g: bufferedData[r + 1],
                        b: bufferedData[r + 2]
                    };

                    sumR += currentPixel.r * matrix[w + h * mSize];
                    sumG += currentPixel.g * matrix[w + h * mSize];
                    sumB += currentPixel.b * matrix[w + h * mSize];
                }
            }

            var rf = convertCoordinates(i, j, img.width) << 2;
            data[rf] = findColorDiff(strength, sumR, data[rf]);
            data[rf + 1] = findColorDiff(strength, sumG, data[rf + 1]);
            data[rf + 2] = findColorDiff(strength, sumB, data[rf + 2]);
        }
    }
    return pixels;
}

// process emboss function
function processEmboss() {

    // clear context
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw image
    ctx.drawImage(imgObj, 0, 0, imgObj.width , imgObj.height);

    // get image data
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // transform image data
    imageData = transformMatrix(imgObj, imageData);

    // draw data back
    ctx.putImageData(imageData, 0, 0);
};

$(function () {

    // create canvas and context objects
    canvas = document.getElementById('source');
    ctx = canvas.getContext('2d');

    // load source image
    imgObj = new Image();
    imgObj.onload = function () {

        // draw image
        ctx.drawImage(this, 0, 0, this.width, this.height, 0, 0, canvas.width, canvas.height);
    }
    imgObj.src = 'images/pic1.jpg';

    // different onclick handlers
    var iCur = 1;
    $('#next').click(function () {
        iCur++;
        if (iCur > 6) iCur = 1;
        imgObj.src = 'images/pic' + iCur + '.jpg';
    });
    $('#emboss').click(function () {
        processEmboss();
    });
    $('#toImage').click(function () {
        $('#img').attr('src', canvas.toDataURL('image/jpeg'));
    });
});