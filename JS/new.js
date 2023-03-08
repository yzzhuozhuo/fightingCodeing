function _new () {
  // 创建一个空对象
  let obj = new Object()
  // 将 argument 转化成数组，再调用 shift 方法返回第一个参数，也就是构造函数
  let Constructor = [].shift.call(arguments)
  // 链接到原型
  obj.__proto__ = Constructor.prototype
  console.log('obj', obj)
  // 绑定 this，执行构造函数
  let result = Constructor.apply(obj, arguments)
  console.log('result', result)
  // 返回值进行判断，如果是一个对象，就返回这个对象，如果不是对象，则该返回 obj
  return result === 'object' ? result : obj
}

function Person (name, age) {
  this.name = name
  this.age = age
  return {
    habit: 'play'
  }
  // return 'yz'
}

var person = _new(Person, 'yz', 18)
console.log(person.name)