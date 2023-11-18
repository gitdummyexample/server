const Jimp = require('jimp');

Module = {
    onRuntimeInitialized
  };

  const cv = require('./opencv.js');

  async function onRuntimeInitialized(){
    let jimpSrc = await Jimp.read(__dirname + '/image-sample-1.jpeg');

    var src = cv.matFromImageData(jimpSrc.bitmap);

    let dst = new cv.Mat();
    let M = cv.Mat.ones(5, 5, cv.CV_8U);
    let anchor = new cv.Point(-1, -1);
    cv.dilate(src, dst, M, anchor, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());

    new Jimp({
        width: dst.cols,
        height: dst.rows,
        data: Buffer.from(dst.data)
    })
        .write(__dirname + '/test-output/dilation.jpeg');
};


