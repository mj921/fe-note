# javascript

## 什么是深拷贝和浅拷贝
  ### 深拷贝
  将一个对象从内存中完整的拷贝一份，并在堆内存中开辟一块新的区域放进去，修改新的对象不会对老对象造成影响
  1. JSON.stringify

  <code>JSON.stringify()</code> 进行深拷贝有弊端：忽略 <code>value</code> 为 <code>function</code> <code>undefind</code> <code>
  symbol</code> ;有循环引用会报错;
  ``` javascript
  JSON.parse(JSON.stringify(obj));
  ```
  2. 递归实现
  ``` javascript
  const deepCopy = obj => {
    const map = new WeakMap();
    const _copy = o => {
      if (!o || typeof o !== 'object') return o;
      const hasObj = map.get(o);
      if (hasObj) return hasObj;
      const newObj = {};
      map.set(o, newObj);
      for (let key in o) {
        newObj[key] = _copy(o[key]);
      }
      return newObj;
    }
    return _copy(obj);
  }
  ```
  ### 浅拷贝
  只拷贝对象的一层数据，在深层次的引用类型将只会拷贝引用
  1. Object.assets()
  2. es6拓展运算符

## 栈内存与堆内存
  ### 栈内存

  主要用于存储各种基本类型的变量，包括 <code>Boolean</code> <code>Number</code> <code>String</code> <code>Undefined</code> <code>Null</code> ，以及对象变量的指针（地址值）。栈内存中的变量一般都是已知大小或者有范围上限的，算作一种简单存储。

  ### 堆内存

  主要负责像对象 <code>Object</code> 这种引用类型的存储，对于大小这方面，一般都是未知的。

  ::: tip 注意
  一般来说栈内存是线性有序存储，容量小，系统分配效率高。而堆内存首先要在堆内存新分配存储区域，之后又要把指针（地址值）存储到栈内存中，效率相对就要低一些了。

  垃圾回收方面，栈内存变量基本上用完就回收了，而推内存中的变量因为存在很多不确定的引用，只有当所有指向堆内存的指针全部销毁之后才会被垃圾回收。所以，使用匿名函数和当调用完函数之后把储存在栈内存中的指针赋值为null也是一种优化性能防止内存泄漏的一种方式。
  :::

## 箭头函数和普通函数有什么区别

## new操作符做了什么事情
1. 首先创建了一个新对象
2. 设置原型，将对象的原型设置为函数的 <code>prototype</code> 对象
3. 让函数的 <code>this</code> 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象

```javascript
function newFn(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.apply(obj, args);
  return typeof result === 'object' ? result : obj;
}
```

## 说一下eventloop

## 什么是闭包，闭包的作用是什么？

## Promise是什么?

## Set 和 Map有什么区别？

## map和foreach有什么区别？

## 说一下防抖和节流?

## 说一下常见的检测数据类型的几种方式?

## 说一下slice splice split 的区别?

## 说一下怎么把类数组转换为数组?

## 说一下数组如何去重,你有几种方法?

## 说一下怎么取出数组最多的一项？

## 说一下JSON.stringify有什么缺点？

## 说一下for...in 和 for...of的区别?