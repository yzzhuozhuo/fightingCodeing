/*
  手写发布订阅
  发布-订阅模式其实是一种对象间一对多的依赖关系，当一个对象的状态发送改变时，所有依赖于它的对象都将得到状态改变的通知
  订阅者（subscriber）把自己想订阅的事件注册（subscribe）到调度中心（event chnannel），当发布者（Publisher）发布该事件（Publish Event）到调度中心，
  也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码
 */

/* 
  实现思路
  1.在该对象上创建一个缓存列表（调度中心Event Channel）
  2.on方法用来把函数添加到缓存列表中（订阅者注册事件到调度中心）
  3.emit方法取到argument里第一个当作event，根据event值去执行对应缓存列表中的函数（发布者发布事件到调度中心，调度中心处理代码）
  4.off方法可以根据event值取消订阅（取消订阅）
  5.once方法只监听一次，调用完毕后删除缓存函数（订阅一次）
*/

class EventEmitter {
  constructor () {
    this.linsteners = {}
  }

  // 订阅
  on = (eventName, fn) => {
    if (!eventName || !fn) return
    // 如果没有 eventName 的话，就定义一个初始值
    if (!this.linsteners[eventName]) {
      this.linsteners[eventName] = []
    }
    this.linsteners[eventName].push(fn)
  }

  // 发布
  emit = (eventName, ...args) => {
    if (!this.linsteners[eventName]) return
    this.linsteners[eventName].forEach((linstener) => linstener.call(this, ...args))
  }

  // 取消订阅
  off = (eventName, fn) => {
    if (!this.linsteners[eventName]) return

    // 删除全部事件
    if (!fn) {
      console.log('delete all')
      this.linsteners[eventName] && (this.linsteners[eventName].length = 0)
      return
    }

    // 删除指定的事件
    this.linsteners[eventName] = this.linsteners[eventName].filter(item => item !== fn)
  }

  // 发布一次
  once = (eventName, fn) => {
    function one () {
      fn.apply(this, arguments)
      this.off(eventName, one)
    }
    one.fn = fn
    this.on(eventName, one)
  }

  hasListener = (eventName) => {
    return this.linsteners[eventName]
  }
}

const eventEmitter = new EventEmitter()
function getName(name) {
  console.log('getName', name)
}

function getOld(old) {
  console.log('getOld', old)
}

function getOnce(val) {
  console.log('getOnce', val)
}

// 订阅
eventEmitter.on('get', getName)
eventEmitter.on('get', getOld)
eventEmitter.once('getOnce', getOnce)

// 取消订阅
eventEmitter.off('get', getName)

// 发布
// eventEmitter.emit('get', 'yz')
eventEmitter.emit('getOnce', 'yz')
eventEmitter.emit('getOnce', 'yz')

// console.log(eventEmitter.hasListener('getOnce'))







