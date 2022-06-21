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

1. **外形不同**：箭头函数使用箭头定义。
2. **匿名函数**：普通函数可以是匿名函数，也可以是具名函数，箭头函数都是匿名函数。
3. **构造函数**：普通函数可以用做构造函数，使用new创建对象实例，箭头函数不能用作构造函数，它没有 <code>prototype</code> 属性。
4. **this指向**：普通函数的 <code>this</code> 指向它的调用者，而箭头函数的 <code>this</code> 指向它定义时执行上下文的this，且不会改变。
5. **arguments**: 普通函数调用后会有一个arguments对象可以取到传递的参数，而箭头函数没有。
6. **Generator函数**：箭头函数不能用作Generator函数,不能使用yeild关键字。


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

- <code>typeof</code> : 数组、对象、null返回的都是object，其他正常。
- instanceof: 只能判断引用类型，不能判断基本数据类型
- constructor：<code>obj.\_\_proto\_\_.constrocutr</code>，可以判断基本类型中的 number string boolean symbol。
- Object.prototype.toString.call(): 可以判断所有类型。

## 说一下slice splice split 的区别?

## 说一下怎么把类数组转换为数组?

## 说一下数组如何去重,你有几种方法?

1. Set
```javascript
let arr = [1, 1, 2, 2, 2, '1', 'true', 'null', 'undefined', 'a', 'a', true, true, false, false, null, null, undefined, undefined];
console.log(Array.from(new Set(arr))); // [1, 2, '1', 'true', 'null', 'undefined', 'a', true, false, null, undefined]
```

2. 循环用map记录是否已经存在
```javascript
let arr = [1, 1, 2, 2, 2, '1', 'true', 'null', 'undefined', 'a', 'a', true, true, false, false, null, null, undefined, undefined];
const unique = arr => {
  const map = new Map();
  const list = [];
  arr.forEach(item => {
    if (!map.has(item)) {
      map.set(item, true);
      list.push(item);
    }
  })
  return list;
}
console.log(unique(arr)); // [1, 2, '1', 'true', 'null', 'undefined', 'a', true, false, null, undefined]
```

3. 循环用indexOf或includee判断是否已经存在
```javascript
let arr = [1, 1, 2, 2, 2, '1', 'true', 'null', 'undefined', 'a', 'a', true, true, false, false, null, null, undefined, undefined];
const unique = arr => {
  const list = [];
  arr.forEach(item => {
    if (list.indexOf(item) === -1) { // 或者 list.includes(item)
      list.push(item);
    }
  })
  return list;
}
console.log(unique(arr)); // [1, 2, '1', 'true', 'null', 'undefined', 'a', true, false, null, undefined]
```

4. 上面的循环可以换成filter或者reduce
```javascript
let arr = [1, 1, 2, 2, 2, '1', 'true', 'null', 'undefined', 'a', 'a', true, true, false, false, null, null, undefined, undefined];
const unique = arr => {
  return arr.filter((item, index) => {
    if (arr.slice(0, index).indexOf(item) === -1) { // 或者 arr.slice(0, index).includes(item)
      list.push(item);
    }
  });
  // 或者
  // return arr.reduce((list, item) => {
  //   if (list.indexOf(item) === -1) { // 或者 list.includes(item)
  //     list.push(item);
  //   }
  // }, []);
}
console.log(unique(arr)); // [1, 2, '1', 'true', 'null', 'undefined', 'a', true, false, null, undefined]
```

## 说一下怎么取出数组最多的一项？
```javascript
const map = new Map();
const arr = [1, 1, 1, 1, 2, 2, 2, 3, 1, 2, 3, 4, 5, 5, 6];
let maxItem;
arr.forEach(item => {
  map.set(item, (map.get(item) || 0) + 1);
  if (map.get(item) > (map.get(maxItem) || 0)) {
    maxItem = item;
  }
});
console.log(maxItem);
```

## 说一下JSON.stringify有什么缺点？
1. Date对象会转成字符串
2. 正则表达式、Error对象会转成空对象
3. 函数和undefined会丢失；
4. NaN、Infinity和-Infinity，会变成null
5. 只能序列化对象的可枚举的自有属性，例如: 如果obj中的对象是有构造函数生成的，会丢失构造函数prototype上的属性方法。
```javascript
console.log(JSON.stringify({
  date: new Date(1655795895262),
  reg: /\d/,
  err: new Error(),
  fun: function() {},
  a: undefined,
  nan: NaN,
  inf: Infinity,
  inf1: -Infinity
})); // {"date":"2022-06-21T07:18:15.262Z","reg":{},"err":{},"nan":null,"inf":null,"inf1":null}

const Foo = function() {
  this.a = 1;
}
Foo.prototype.b = 2;
console.log(new Foo()); // {"a":1}
```

## 说一下for...in 和 for...of的区别?

for...of遍历获取的是对象的键值, for...in获取的是对象的键名;
for...in会遍历对象的整个原型链, 性能非常差不推荐使用,而for...of只遍历当前对象不会遍历原型链;
对于数组的遍历,for...in会返回数组中所有可枚举的属性(包括原型链上可枚举的属性),for...of只返回数组的下标对应的属性值;
总结：for...in循环主要是为了遍历对象而生,不适用遍历数组; for....of循环可以用来遍历数组、类数组对象、字符串、Set、Map以及Generator对象