Function.prototype.myCall = function (context, ...args) {
  if (typeof context === undefined || typeof context === null) {
    context = window
  }
  // 此时的 this 就是 调用 myCall 的函数
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

function fun () {
  console.log(this.name)
}

const obj = {
  name: 2
}

fun.myCall(obj)
