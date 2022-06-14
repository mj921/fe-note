# javascript

## 什么是深拷贝和浅拷贝?
  ### 深拷贝
  将一个对象从内存中完整的拷贝一份，并在堆内存中开辟一块新的区域放进去，修改新的对象不会对老对象造成影响
  1. JSON.stringify

  JSON.stringify()进行深拷贝有弊端：忽略value为function, undefind, symbol;有循环引用会报错;
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
    }
    return _copy(obj);
  }
  ```
  ### 浅拷贝
  只拷贝对象的一层数据，在深层次的引用类型将只会拷贝引用
  1. Object.assets()
  2. es6拓展运算符
    

## 什么是原型什么是原型链?

## 箭头函数和普通函数有什么区别?

## New操作符做了什么事情?

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