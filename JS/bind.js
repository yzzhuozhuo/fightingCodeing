Function.prototype.myBind = function (context) {
  const self = this
  const args = [...arguments].slice(1)
  return function () {
    return self.apply(context, args.concat([...arguments]))
  }
}

function fun (arg) {
  console.log(arg)
}

const obj = {
  name: 2
}

fun.myBind(obj, 1)()
