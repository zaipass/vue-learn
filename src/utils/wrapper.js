// 包装器 => 相当于装饰器: 原有的代码结构不变, 新增代码逻辑
Function.prototype.before = function(fn) {
  let _thisFn = this;
  return function() {
    fn.apply(this, arguments)
    return _thisFn.apply(this, arguments)
  }
}