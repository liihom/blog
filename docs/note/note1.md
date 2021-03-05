---
title: 前端面试题（一）
categories:
 - 面试题
tags:
 - 面试题
---

## CSS

### 1. 什么是盒模型？盒模型有哪些？不同点？

::: details 参考

#### 1、**盒模型** 又称框模型（Box Model）,包含了元素 **内容（`content`）**、**内边距（`padding`）**、**边框（`border`）**、**外边距（`margin`）** 几个要素。

#### 2、分为：标准模型（W3C 盒模型）、 IE 模型（怪异模型）。

#### 3、区别：对宽高的计算方式不同

**标准模型**：设置的宽高就是实际内容宽高

**IE 模型**：内容的宽度 = 设置的宽度 - border 的宽度 - padding 的宽度

::: tip 注
浏览器默认使用 标准盒模型，（IE 默认使用 IE 模型，IE8+ 支持使用 `box-sizing` 进行转换）
:::

### 2. BFC 是什么？

::: details 参考

#### 1、BFC，即 Block Formatting Contexts (块级格式化上下文)

是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。

#### 2、创建 BFC 的方式有：

1、html 根元素  
2、float 浮动元素  
3、绝对定位元素： position (absolute、fixed)  
4、overflow 除了 visiable 以外的元素  
5、display 为 inline-block、table-cells、flex

> [更多参见](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

#### 3、BFC 特性及应用：

- 1）同一个 BFC 下，2 个相邻元素垂直外边距会发生折叠，如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。
- 2）**清除浮动**:
  浮动的元素会脱离文档的普通流，如果盒子内的元素是浮动元素且盒子本身不具备 BFC 特性, 那么这个盒子在视觉上并不会包裹住内部浮动元素, 总大小也不包括内部浮动元素，比如常用的 overflow: hidden;
- 3）BFC 区域不会与 float box 重叠。
  eg: 左图右文布局

```html
<img src="image.png" />
<p>我是超长的文字</p>
<p></p>
```

```css
img {
  float: left;
}
p {
  overflow: hidden;
}
```

:::

### 3. 让一个 div 水平垂直居中的方法有哪些？

::: details 参考
1、 不定宽

```css
div.parent {
  position: relative;
}
div.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

```css
div.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
div.parent {
  display: table;
}
div.child {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```

```css
div.parent {
  display: grid;
}
div.child {
  justify-self: center;
  align-self: center;
}
```

2、定宽高

```css
div.parent {
  position: relative;
}
div.child {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  margin-top: -100px;
  margin-left: -100px;
}
```

:::

### 4. 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景？

::: details 参考
| 属性 | DOM 结构 | 事件监听 | 继承 | 性能 | transition |
| --- | --- | --- | --- | --- | --- |
| **display: none** | 不会渲染 | ❌ | 子元素不渲染，不继承 | 动态改变此属性时会引起重排，性能较差 | ❌
| **visibility: hidden** | 会渲染，但元素隐藏，不消失，占据空间 | ❌ | 会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏 | 动态改变此属性时会引起重绘，性能较高 | ❌ |
| **opacity: 0** | 会渲染，但元素透明度为 100%，不可见，占据空间 | ✅ | 会被子元素继承, 且子元素并不能通过 opacity: 1 来取消隐藏 | 修改元素会造成重绘, 性能消耗较少. | ✅ |
:::

## JS

### 1. 有哪些数据类型？

::: details 参考
最新的 ECMAScript 标准定义了 8 种数据类型:

- 7 种原始类型：`String`, `Number`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`
- 1 种引用类型：`Object`
:::

### 2. ES6 新增的数据结构有哪些？有什么区别？

::: details 参考

`Set` 本身是一个构造函数，用来生成 `Set` 数据结构。它类似于数组，但是成员的值都是唯一的，没有重复的值。
``` js
// 数组去重
[...new Set([1, 2, 2, 3, 4])]; // [1, 2, 3, 4]

Array.from(new Set([1, 2, 2, 3, 4])); // [1, 2, 3, 4]

// 字符串去重
[...new Set('ababbc')].join(''); //ababc
```

`Map` 类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

> 更多参见[阮一峰 ECMAScript 6 入门 - Set 和 Map 数据结构](https://es6.ruanyifeng.com/#docs/set-map)

:::


### 3. new 一个函数发生了什么？
::: details 参考

1、创建一个空对象
``` js
let obj = {};
```
2、让构造函数中的 `this` 指向新对象，并执行构造函数的函数体
``` js
let result = Person.call(obj);
```
3、设置新对象的 `__proto__` 属性指向构造函数的原型对象
``` js
obj.__proto__ = Person.prototype;
```
4、判断构造函数的返回值类型，如果是值类型，则返回新对象。如果是引用类型，就返回这个引用类型的对象。
``` js
if (typeof(result) == "object") 
    p = result;
else 
    p = obj;
```
> [参考文章](https://juejin.cn/post/6844904176837722120#heading-14)

### MDN 解释
  **`new` 运算符** 创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例

  **`new` 关键字** 会进行如下的操作：  
  1）创建一个空的简单 `JavaScript` 对象（即 {}）；  
  2）链接该对象（设置该对象的 `constructor` ）到另一个对象（把原型链直接赋值到了新的对象上） ；  
  3）将步骤 1）新创建的对象作为 `this` 的上下文 ；  
  4）如果该函数没有返回对象，则返回 `this`。  
:::

### 4. 写出以下代码运行结果？

1).
```js
1 + "1";
2 * "2";
[1, 2] + [2, 1];
"a" + +"b";
```

::: details 参考
```js
1 + "1"; // "11"
2 * "2"; // 4
[1, 2] + [2, 1]; // "1,22,1"
"a" + +"b"; // "aNAN"
```
- 非 `Number` 类型运用**数学运算符(- * /)**时，会先将非 `Number` 类型转换为 `Number` 类型。
- `➕` 特殊：
  当一侧为 `String` 类型，被识别为**字符串**拼接，并会优先将另一侧转换为**字符串类型**。
  当一侧为 `Number` 类型，另一侧为**原始类型**，则将**原始类型**转换为 `Number` 类型。
  当一侧为 `Number` 类型，另一侧为**引用类型**，将**引用类型**和 `Number` 类型转换成**字符串**后拼接。

::: tip js 隐式转换
:::

2).
```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function() {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
console.log("script end");
```

::: details 参考
```js
async function async1() {
  console.log("async1 start"); // 2
  await async2();
  console.log("async1 end"); // 6
}
async function async2() {
  console.log("async2"); // 3
}
console.log("script start"); // 1
setTimeout(function() {
  console.log("setTimeout"); // 8
}, 0);
async1();
new Promise(function(resolve) {
  console.log("promise1"); // 4
  resolve();
}).then(function() {
  console.log("promise2"); // 7
});
console.log("script end"); // 5
```
> [详解参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)

### 1.JS 是单线程的
JS 中的代码都是串行的, 前面没有执行完毕后面不能执行

### 2.执行顺序
2.1 程序运行会从上至下依次执行所有的同步代码  
2.2 在执行的过程中如果遇到异步代码会将异步代码放到事件循环中  
2.3 当所有同步代码都执行完毕后, JS 会不断检测 事件循环中的异步代码是否满足条件  
2.4 一旦满足条件就执行满足条件的异步代码  

### 3.宏任务和微任务
在 JS 的异步代码中又区分 "宏任务 (MacroTask)" 和 "微任务 (MicroTask)"  
宏任务: 宏/大的意思, 可以理解为比较费时比较慢的任务  
微任务: 微/小的意思, 可以理解为相对没那么费时没那么慢的任务  

### 4.常见的宏任务和微任务
宏任务: `setTimeout`, `setInterval`,   （IE独有）...  
微任务: `Promise`, `MutationObserver`, `process.nextTick`（`node`独有) ...  
> **注**:  
所有的宏任务和微任务都会放到自己的执行队列中, 也就是有一个宏任务队列和一个微任务队列  
所有放到队列中的任务都采用"先进先出原则", 也就是多个任务同时满足条件, 那么会先执行先放进去的  

### 5.完整执行顺序
1. 从上至下执行所有同步代码  
2. 在执行过程中遇到宏任务就放到宏任务队列中, 遇到微任务就放到微任务队列中  
3. 当所有同步代码执行完毕之后, 就执行微任务队列中满足需求所有回调  
4. 当微任务队列所有满足需求回调执行完毕之后, 就执行宏任务队列中满足需求所有回调  
... ...
> **注**:
每执行完一个宏任务都会立刻检查微任务队列有没有被清空, 如果没有就立刻清空

:::

### 4. 了解 RESTful 吗

::: details 参考
REST 是一种设计风格（不是标准），是一组架构的约束条件和原则，满足这些约束条件和原则的应用程序或设计就是 RESTful。

- 看 URL 就知道要什么
- 看 HTTP method 就知道干什么
- 看 HTTP status code 就知道结果如何
:::

## 网路

### 1. 从输入 URL 到页面加载发生了什么

::: details 参考
1. 浏览器会进行 `DNS` 域名解析，拿到域名对应的服务器 ip 地址，再用该 ip 去访问 web 服务器
2. 然后会和 `web` 服务器进行 `tcp` 的三次握手建立 `tcp` 连接
3. 连接建立成功后，浏览器会发送 `http` 的 `get` 请求
4. 服务器收到请求并给予响应，返回请求的数据
5. 浏览器拿到数据并进行解析、渲染
6. 浏览器和服务器进行 `tcp` 的四次挥手，断开连接

> [详情参考](https://zhuanlan.zhihu.com/p/133906695)

> [谈谈你对TCP三次握手和四次挥手的理解](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/15)
:::

## Vue

### 1. 为什么 data 是一个函数？

::: details 参考
当 `data` 的值是一个对象时，它会在这个组件的所有实例之间共享。
每一个 `vue` 组件都是一个 `vue` 实例，通过 `new Vue()` 实例化，引用同一个对象。
当 `data` 的值是一个对象时，它会在这个组件的所有实例之间共享。那么一旦修改其中一个组件的数据，其他组件相同数据就会被改变。
:::

### 2. 子组件为何不可以修改父组件传递的 Prop，如果修改了，Vue 是如何监控到属性的修改并给出警告的。

::: details 参考
1）**单向数据流**，易于监测数据的流动，出现了错误可以更加迅速的定位到错误发生的位置。 所有的 prop 都使得其父子 prop 之间形成了一个**单向下行绑定**：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。

额外的，每次父级组件发生变更时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你**不应该**在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

2）如何监控的：
``` js
if (process.env.NODE_ENV !== 'production') {
  var hyphenatedKey = hyphenate(key);
  if (isReservedAttribute(hyphenatedKey) ||
      config.isReservedAttr(hyphenatedKey)) {
    warn(
      ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
      vm
    );
  }
  defineReactive$$1(props, key, value, function () {
    if (!isRoot && !isUpdatingChildComponent) {
      warn(
        "Avoid mutating a prop directly since the value will be " +
        "overwritten whenever the parent component re-renders. " +
        "Instead, use a data or computed property based on the prop's " +
        "value. Prop being mutated: \"" + key + "\"",
        vm
      );
    }
  });
}
```

在 initProps 的时候，在 defineReactive 时通过判断是否在开发环境，如果是开发环境，会在触发 set 的时候判断是否此 key 是否处于 updatingChildren 中被修改，如果不是，说明此修改来自子组件，触发 warning 提示。

> 需要特别注意的是，当你从子组件修改的 prop 属于 **基础类型** 时会触发提示。 这种情况下，你是无法修改父组件的数据源的，因为基础类型赋值时是值拷贝。你直接将另一个 **非基础类型**（Object, array）赋值到此 key 时也会触发提示(但实际上不会影响父组件的数据源)， 当你修改 object 的属性时不会触发提示，并且会修改父组件数据源的数据。

> [更多讨论](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/60)

> [官方文档](https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)
:::

## React

### 1. 说一说 React Hooks？

::: details 参考
`Hook` 是 React 16.8 的新增特性。它可以让你在不编写 `class` 的情况下，使用 `state` 以及其他的 `React` 特性。

> [传送门](https://zh-hans.reactjs.org/docs/hooks-intro.html)
:::
