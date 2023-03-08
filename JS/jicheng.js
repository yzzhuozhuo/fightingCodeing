/*
继承
1.原型继承
2.借用构造函数（经典继承）
3.组合继承
4.原型式继承
5.寄生式继承
6.寄生组合式继承
 */ 

// 原型继承
// 缺点：1. 引用类型的属性被所有实例共享
// 2.无法传参
// function Parent () {
//   this.name = 'kevin'
//   this.list = []
// }
// Parent.prototype.getName = function () {
//   console.log(this.name)
// }
// Parent.prototype.getList = function () {
//   console.log(this.list)
// }
// function Child () {
// }
// Child.prototype = new Parent()
// const child1 = new Child()
// child1.list.push('1')
// console.log(child1.getName())
// const child2 = new Child()
// console.log(child2.getList())

// 借用构造函数（经典继承）
function Parent () {
  console.log(this)
  this.names = ['kevin', 'daisy'];
}

function Child () {
  Parent.call(this);
}

var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]

