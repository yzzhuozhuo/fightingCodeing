// function add(...args) {
//   console.log('...args', ...args)
//   // 在内部声明一个函数，利用闭包的特性保存并收集所有的参数值
//   let fn = function(...newArgs) {
//     console.log('...newArgs', ...newArgs)
//    return add.apply(null, args.concat(newArgs))
//   }

//   // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//   fn.toString = function() {
//     console.log('toString', args)
//     return args.reduce((total,curr)=> total + curr)
//   }

//   return fn
// }


// add(1).toString()
// add(1)(2).toString()
// console.log(add(1)(2)(3).toString())
// add(1)(2, 3).toString()
// add(1, 2)(3).toString()
// add(1, 2, 3).toString()

function add() {
  const _args = [...arguments];
  function fn() {
    _args.push(...arguments);
    return fn;
  }
  fn.toString = function() {
    return _args.reduce((sum, cur) => sum + cur);
  }
  return fn;
}

console.log(add(1)(3).toString())