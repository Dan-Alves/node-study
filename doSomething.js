var fib = function(n) {
  if(n < 2)
    return n;
  return fib(n  - 1) + fib(n  - 2);
};

var Obj = function() { };

Obj.prototype.doSomething = function(arg1_) {
  var callback_ = arguments[arguments.length - 1];
  callback = (typeof(callback_) == 'function' ? callback_ : null);
  var arg1 = typeof arg1_ === 'number' ? arg1 : null;
  if(!arg1)
    return callback(new Error('firstarg missing or not a number'));

    //ensures that the loop is emptied
    process.nextTick(function() {
      //CPU block
      var data = fib(arg1);
      callback(null, data);
    });
}

var test = new Obj();
var number = 10;

test.doSomething(number, function(err, value) {
  if(err)
    console.log(err);
  else
    console.log('fibonaci value for %d is %d', number, valur);
});

console.log('called doSomething');