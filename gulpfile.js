var gulp = require('gulp')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var header = require('gulp-header')
var del = require('del')
var packageJSON = require('./package.json')

var banner = 
'/*!' + '\n' +
' * LastModifyTime: ' + new Date().toLocaleString()  + '\n' +
' * Process.js Version: ' + packageJSON.version  + '\n' +
' * Github:https://github.com/Lucifier129/process' + '\n' +
' * Copyright(c) 2015 Jade Gu <guyingjie129@163.com>'  + '\n' +
' * MIT Licensed'  + '\n' +
' */\n'
 

gulp.task('clean', function() {
	del('./dist/*.js')
})

gulp.task('default', ['clean'], function() {
	return gulp
		.src('./src/process.js')
		.pipe(header(banner))
		.pipe(gulp.dest('dist'))
		.pipe(rename('process.min.js'))
		.pipe(uglify())
		.pipe(header(banner))
		.pipe(gulp.dest('dist'))
})