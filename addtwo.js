var base = 2;

exports.addtwo = function(input) {
  return parseInt(input) + base;
} 

var addtwo = require('./addtwo').addtwo;
var base = 10;
console.log(addtwo(base));