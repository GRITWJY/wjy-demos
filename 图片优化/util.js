/**
 * 图片调整大小和质量， 即压缩图片， 最终返回file类型
 * @param file 获取图片时的file
 * @param quality 图片质量 0 ~ 1
 * @param cb 回调函数，参数为最终的file
 * @param width 图片宽， 若宽高只定义一个， 则按比例缩放
 * @param height 图片压缩后的高
 */
function fileResizeToFile(file, quality, cb, width = 0, height = 0) {
  fileToDataURL(file, function (dataurl) {
    dataUrlToImage(dataurl, function (image) {
      canvasResizeToFile(imageToCanvas(image, width, height), quality, cb);
    });
  });
}

function fileResizeToDataURL(file, quality = 0.1, cb, width = 0, height = 0) {
  fileToDataURL(file, function (dataurl) {
    dataUrlToImage(dataurl, function (image) {
      canvasResizeToDataURL(imageToCanvas(image, width, height), quality, cb);
    });
  });
}

/**
 * 将file类型文件转成DataURL
 * @param file 文件
 * @param cb 参数是转成的url
 */
function fileToDataURL(file, cb) {
  let reader = new FileReader();
  reader.onloadend = function (e) {
    cb(e.target.result);
  };
  reader.readAsDataURL(file);
}

/**
 * 将dataurl 转成image对象
 * @param dataurl
 * @param cb
 */
function dataUrlToImage(dataurl, cb) {
  let img = new Image();
  img.onload = function () {
    cb(img);
  };
  img.src = dataurl;
}

/**
 * 将图片转成canvas， 此时可设置图片宽高
 * @param image
 */
function imageToCanvas(image, width, height) {
  let cvs = document.createElement("canvas");
  let ctx = cvs.getContext("2d");
  if (width === 0 && height === 0) {
    width = image.width;
    height = image.height;
  } else if (width === 0) {
    width = image.width * (height / image.height);
  } else if (height === 0) {
    height = image.height * (width / image.width);
  }
  ctx.width = width;
  ctx.height = height;
  ctx.drawImage(image, 0, 0, width, height);
  return cvs;
}

/**
 * 将canvas 转成一个dataurl 字符串
 * @param canvas
 * @param quality
 */
function canvasResizeToDataURL(canvas, quality) {
  return canvas.toDataURL("image/jpeg", quality);
}

/**
 * 将canvas压缩转变为一个Blob对象
 * @param canvas
 * @param quality
 * @param cb
 */
function canvasResizeToFile(canvas, quality, cb) {
  canvas.toBlob(
    function (blob) {
      cb(blob);
    },
    "image/jpeg",
    quality
  );
}

function throttle(action, delay) {
  let timeout = null;
  let lastRun = 0;
  return function () {
    if (timeout) {
      return;
    }
    const elapsed = Date.now() - lastRun;
    const context = this;
    const args = arguments;
    const runCallback = function () {
      lastRun = Date.now();
      timeout = false;
      action.apply(context, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
  };
}

function elOn(el, ev, fn) {
  el.addEventListener(ev, fn);
}
function elOff(el, ev, fn) {
  el.removeEventListener(ev, fn);
}

export {
  fileResizeToFile,
  fileToDataURL,
  dataUrlToImage,
  imageToCanvas,
  canvasResizeToDataURL,
  canvasResizeToFile,
  throttle,
  elOff,
  elOn,
};
