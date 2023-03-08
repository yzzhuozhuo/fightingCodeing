// const compose = function () {
//   // 将接收的参数存到一个数组， args == [multiply, add]
//   const args = [].slice.call(arguments)
//   return function (x) {
//     return args.reduceRight((res, cb) => cb(res), x)
//   }
// }

// const compose = (...args) => (x) => args.reduceRight((res, cb) => cb(res), x)


const add = x => x + 10;
const multiply = x => x * 10;

// // 我们来验证下这个方法
// let calculate = compose(multiply, add);
// let res = calculate(10);
// console.log(res);    // 结果还是200


const pipe = function () {
  const args = [].slice.call(arguments)
  return function(x) {
    return args.reduce((res, cb) => cb(res), x)
  }
}

// 参数顺序改为从左往右
let calculate = pipe(add, multiply);
let res = calculate(10);
console.log(res);    // 结果还是200