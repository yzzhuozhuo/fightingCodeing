// 重写数组原生方法
const orginalProto = Array.prototype;
const arrayProto = Object.create(orginalProto); // 先克隆一份Array的原型出来
const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
methodsToPatch.forEach((method) => {
  arrayProto[method] = function () {
    // 调整方法指向使其指向arguments，而不是全局
    orginalProto[method].apply(this, arguments);
    console.log("监听赋值成功", method);
  };
});

function observer(obj) {
  if (typeof obj !== "object" || obj == null) {
    return;
  }
  if (Array.isArray(obj)) {
    // 如果是数组, 重写原型
    obj.__proto__ = arrayProto; // 让数组带上重写的数组方法。
    // 传入的数据可能是多维度的,也需要执行响应式
    for (let i = 0; i < obj.length; i++) {
      observer(obj[i]);
    }
  } else {
    for (const key in obj) {
      // 给对象中的每一个方法都设置响应式
      defineReactive(obj, key, obj[key]);
    }
  }
}

function defineReactive(data, key, val) {
  // observer(val)
  Object.defineProperties(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log(`对象属性:${key}访问defineReactive的get！`)
      return val
    },
    set: function (newVal) {
      if (val === newVal) {
        return
      }
      val = newVal
      console.log(`对象属性:${key}访问defineReactive的set！`)
    }
  })
}

const obj = {
  name: "张三",
  // hobby: ["游戏", "吉他"],
};
observer(obj);
obj.name = 'yz'
// obj.hobby.push("学习1");
// obj.hobby[0] = 'yz'
