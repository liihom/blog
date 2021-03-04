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

- 7 种原始类型：String, Number, BigInt（ES2020），Boolean, Undefined, Null, Symbol（ES6）
- 1 种引用类型：Object。
  :::

### 2. es6 新增的数据结构有哪些？有什么区别？

::: details 参考

:::

### 3. 写出以下代码运行结果？

1.

```javascript
var name = "小明";
(function Test() {
  if (typeof name === "undefined") {
    var name = "小王";
    console.log("Hello" + name);
  } else {
    console.log("Hello" + name);
  }
})();
```

::: details 参考
::: tip 考察变量提升
:::

2）

```js
1 + "1";
2 * "2";
[1, 2] + [2, 1];
"a" + +"b";
```

::: details 参考
::: tip js 隐式转换
:::

3.

```javascript
[] == false;
false == false;
[1] == [1];
1 === "1";

console.log(null == undefined);
console.log([] == 0);
console.log({} == 0);
```

::: details 参考
::: tip `==` 和 `===` 判断
:::

4.

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
::: tip js 事件执行机制 EventLoop
:::

### 4. 手写函数题

1. reduce
2. Promise.all
3. 函数节流和防抖

### 5. 了解 RESTful 吗

::: details 参考
REST 是一种设计风格（不是标准），是一组架构的约束条件和原则，满足这些约束条件和原则的应用程序或设计就是 RESTful。

- 看 URL 就知道要什么
- 看 HTTP method 就知道干什么
- 看 HTTP status code 就知道结果如何
  :::

## HTTP

### 1. 从输入 URL 到页面加载发生了什么

::: details 参考

1. 浏览器会进行 `DNS` 域名解析，拿到域名对应的服务器 ip 地址，再用该 ip 去访问 web 服务器
2. 然后会和 `web` 服务器进行 `tcp` 的三次握手建立 `tcp` 连接
3. 连接建立成功后，浏览器会发送 `http` 的 `get` 请求
4. 服务器收到请求并给予响应，返回请求的数据
5. 浏览器拿到数据并进行解析、渲染
6. 浏览器和服务器进行 `tcp` 的四次挥手，断开连接
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

:::

## React

### 1. 说一说 React Hooks？

::: details 参考
`Hook` 是 React 16.8 的新增特性。它可以让你在不编写 `class` 的情况下，使用 `state` 以及其他的 `React` 特性。

通过 **自定义 Hook**，可以将组件逻辑提取到可复用的函数中。
:::
