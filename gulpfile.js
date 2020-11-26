var requireDir = require('require-dir');
let enableArr = {
    'publish.js':1
}
let path = require("path");
var dir = requireDir('./.laya',{filter:function (fullPath){
        let fileName = path.basename(fullPath);
       return enableArr.hasOwnProperty(fileName);
}});
// const gulp = require("gulp");
// console.log("process.args:", process.argv)
// gulp.task("default",["publish"],()=>{})