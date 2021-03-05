### 写出以下代码的运行结果
1.
```js
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

2.

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

### 手写函数题

1. reduce
2. Promise.all
3. 函数节流和防抖