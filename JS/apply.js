Function.prototype.myApply = function (context, [...args]) {
  if (typeof context === undefined || typeof context === null) {
    context = window
  }
  // 此时的 this 就是 调用 myCall 的函数
  context.fn = this
  const result = context.fn([...args])
  delete context.fn
  return result
}

function fun (arg) {
  console.log(arg)
}

const obj = {
  name: 2
}

fun.myApply(obj, [1, 2])
