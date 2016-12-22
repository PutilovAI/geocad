'use strict';
let dist = './dist';
let src = './src';
const conf = {
  path : {
    js : {
      src : ['./src/blocks/**/*.js', './src/assets/js/*.js'],
      jquery: './src/assets/libs/jquery/dist/jquery.min.js',
      vendor: [
        './src/assets/libs/jquery/dist/jquery.min.js',
        './src/assets/libs/owl.carousel/dist/owl.carousel.min.js',
        './src/assets/libs/jquery.maskedinput/src/jquery.maskedinput.js',
        './src/assets/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
      ],
      dest: "./dist/assets/js"
    },
    css : {
        src : ['./src/assets/style/main.styl', './src/assets/style/reset.styl'],
        vendor : ['./src/assets/libs/select2/select2.css'],
        dest : dist + '/assets/css'
    },
    img : {
        src : [
    			'./src/assets/libs/jquery-ui/images/*.+(png|jpg|jpeg|gif|svg)',
    			'./src/blocks/**/*.+(png|jpg|jpeg|gif|svg)',
    			'./src/assets/images/**/*.+(png|jpg|jpeg|gif|svg)'
    	],
        dest: dist + "/assets/images"
    },
    dist: dist,
    src: src
  },
  name: {
    zip: 'geocad.zip'
  }
}

module.exports = conf;
