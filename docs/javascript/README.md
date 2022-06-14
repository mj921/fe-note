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

  主要用于存储各种基本类型的变量，包括Boolean、Number、String、Undefined、Null，以及对象变量的指针（地址值）。栈内存中的变量一般都是已知大小或者有范围上限的，算作一种简单存储。

  ### 堆内存

  主要负责像对象Object这种引用类型的存储，对于大小这方面，一般都是未知的。

  ::: tip 注意
  一般来说栈内存是线性有序存储，容量小，系统分配效率高。而堆内存首先要在堆内存新分配存储区域，之后又要把指针（地址值）存储到栈内存中，效率相对就要低一些了。

  垃圾回收方面，栈内存变量基本上用完就回收了，而推内存中的变量因为存在很多不确定的引用，只有当所有指向堆内存的指针全部销毁之后才会被垃圾回收。所以，使用匿名函数和当调用完函数之后把储存在栈内存中的指针赋值为null也是一种优化性能防止内存泄漏的一种方式。
  :::


## 什么是原型什么是原型链?
``` javascript
  function Person () {

  }
  var person  = new Person();
  person.name = 'Kevin';
  console.log(person.name) // Kevin

  // prototype
  function Person () {

  }
  Person.prototype.name = 'Kevin';
  var person1 = new Person();
  var person2 = new Person();
  console.log(person1.name)// Kevin
  console.log(person2.name)// Kevin

  // __proto__
  function Person () {

  }
  var person = new Person();
  console.log(person.__proto__ === Person.prototype) // true

  //constructor
  function Person() {

  }
  console.log(Person === Person.prototype.constructor) // true

  //综上所述
  function Person () {

  }
  var person = new Person()
  console.log(person.__proto__ == Person.prototype) // true
  console.log(Person.prototype.constructor == Person) // true
  //顺便学习一下ES5得方法,可以获得对象得原型
  console.log(Object.getPrototypeOf(person) === Person.prototype) // true

  //实例与原型
  function Person () {

  }
  Person.prototype.name = 'Kevin';
  var person = new Person();
  person.name = 'Daisy';
  console.log(person.name) // Daisy
  delete person.name;
  console.log(person.name) // Kevin

  //原型得原型
  var obj = new Object();
  obj.name = 'Kevin',
  console.log(obj.name) //Kevin

    //原型链
    console.log(Object.prototype.__proto__ === null) //true
    // null 表示"没用对象" 即该处不应该有值

    // 补充
    function Person() {

    }
    var person = new Person()
    console.log(person.constructor === Person) // true
    //当获取person.constructor时，其实person中并没有constructor属性,当不能读取到constructor属性时,会从person的原型
    //也就是Person.prototype中读取时,正好原型中有该属性,所以
    person.constructor === Person.prototype.constructor

    //__proto__
    //其次是__proto__，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于Person.prototype中，实际上，它
    // 是来自与Object.prototype,与其说是一个属性，不如说是一个getter/setter,当使用obj.__proto__时，可以理解成返回了
    // Object.getPrototypeOf(obj)
```
::: tip 总结
1. 当一个对象查找属性和方法时会从自身查找,如果查找不到则会通过__proto__指向被实例化的构造函数的prototype

2. 隐式原型也是一个对象,是指向我们构造函数的原型

3. 除了最顶层的Object对象没有__proto_，其他所有的对象都有__proto__,这是隐式原型

4. 隐式原型__proto__的作用是让对象通过它来一直往上查找属性或方法，直到找到最顶层的Object的__proto__属性，它的值是null,这个查找的过程就是原型链
:::

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