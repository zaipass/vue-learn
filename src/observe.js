export let obj = (function(){
// 发布-订阅

// ==== 简单 ====
let obj = {};
obj.callbackList = [];
obj.listen = (function(fn) {
  obj.callbackList.push(fn);
});
obj.trigger = (function() {
  let args = arguments;
  obj.callbackList.forEach(fn => {
    fn.call(this, args);
  });
});

obj.listen(function() {
  console.log('demo one');
})
obj.listen(function() {
  console.log('demo two');
})
obj.trigger();

// ==== 参数 ====
let obj2 = {};
obj2.callbackList = [];
obj2.listen = function(fn) {
  obj2.callbackList.push(fn);
};
obj2.trigger = function() {
  obj2.callbackList.forEach(fn => {
    fn.call(this, ...arguments);
  });
};

let obj2fn1 = function(address, price) {
  console.log(`111111111 - price: ${price}; address: ${address}`);
}
let obj2fn2 = function(address, price) {
  console.log(`222222222 - price: ${price}; address: ${address}`);
}
obj2.listen(obj2fn1);
obj2.listen(obj2fn2);
obj2.trigger('和谐', 3000);

// ==== 分类 ====
let obj3 = {};
obj3.callback = {};
obj3.listen = function(key, fn) {
  if (!obj3.callback[key]) {
    obj3.callback[key] = [];
  }
  obj3.callback[key].push(fn);
};
obj3.trigger = function() {
  // 分类触发
  let key = Array.prototype.shift.apply(arguments); // 注意: 不需要指定this; Array已经相当于this
  // let key = [...arguments].shift.apply(arguments, arguments); // 等同于上面的使用
  console.log(key);
  let fns = obj3.callback[key];
  if (!fns || fns.length === 0) {
    return false;
  }
  fns.forEach(fn => {
    fn.apply(this, arguments);
  });
};
obj3.listen('fn1', obj2fn1);
obj3.listen('fn1', obj2fn1);
obj3.listen('fn2', obj2fn2);
obj3.trigger('fn1', 'zhongguo', 10000);

// ==== 对象 ====
let obj4 = {
  callbackList: {},
  listen(key, fn) {
    if (!this.callbackList[key]) {
      this.callbackList[key] = [];
    }
    this.callbackList[key].push(fn);
  },
  trigger() {
    let key = Array.prototype.shift.apply(arguments);
    let fns = this.callbackList[key];
    if (!fns || fns.length === 0) {
      return false
    }
    fns.forEach(fn => {
      fn.call(this, ...arguments);
    });
  },
  // ============== 添加移除订阅的功能 ==============
  remove(key, fn) {
    let fns = this.callbackList[key];
    if (!fns) return false;
    // 不传递对应的函数; 默认取消全部函数订阅
    if (!fn) {
      fns && (fns.length = 0);
    } else {
      for (let i=0; i<fns.length;i++) {
        if (fn === fns[i]) {
          fns.splice(i, 1)
        }
      }
    }
  },
};

obj4.listen('key1', obj2fn1);
obj4.listen('key1', obj2fn2);
obj4.listen('key2', obj2fn2);
// obj4.remove('key1');
obj4.trigger('key1', 'DI值', 200);
obj4.trigger('key2', 'key1值', 150);

return obj4
})();
