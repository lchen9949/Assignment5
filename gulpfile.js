/*

var {src, dest} = require('gulp');        //require the gult dependency
var sass = require('gulp-sass');         //require the gulp-sass dependency 
sass.compiler = require('node-sass');     //setting the compiler to node-sass

function css () {                         //function is cerating our task 
    return src('src/*.scss')            // input is come from the src folder about scss
        .pipe(sass())                   // run the sass compiler
        .pipe(dest('dist/css'))          //splid out the result into the dist folder
};
exports.default = css;                   //set the default task equals to be css

*/


var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');

function css () {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'))
}

exports.default = function() {
    watch('src/*.scss',css);
}

//exports.default = css;

//const _default = css;
//export { _default as default };


