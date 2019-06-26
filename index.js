#!/usr/bin/env node

const opts = require('commander');
const Jimp = require('jimp');
const path = require('path');

opts
  .version('0.1.0')
  .option('-i, --image [path]', 'input image [path]')
  .option('-w, --width [pixels]', 'sprite width [pixels]')
  .option('-h, --height [pixels]', 'sprite height [pixels]')
  .option('-o, --outdir [path]', 'output directory [path]')
  .parse(process.argv);

console.log(opts.image, opts.width, opts.height);
const bits = opts.image.split('.');
const extension = bits[bits.length-1];
const name = bits[bits.length-2];

const dimension = {
  width:Number(opts.width),
  height:Number(opts.height),
};

Jimp.read(opts.image)
  .then(img => {
    let i=0;
    // loop through a grid over the image
    for(let x = 0; x < img.bitmap.width; x += dimension.width){
      for(let y = 0; y < img.bitmap.width; y += dimension.height){
        i++;
        img
          .clone()
          .crop( x, y, dimension.width, dimension.height )
          .write(path.join(opts.outdir, `${name}-${i}.${extension}`));
      }
    }
    // return img
    //   .resize(256, 256) // resize
    //   .quality(60) // set JPEG quality
    //   .greyscale() // set greyscale
    //   .write('lena-small-bw.jpg'); // save
  })
  .catch(err => {
    console.error(err);
  });