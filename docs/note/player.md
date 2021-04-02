---
title: 视频
categories:
 - Web 媒体技术
tags:
 - Web
---


`<video>`

`HLS` HTTP Live Streaming

`Blob` Binary Large Object

`DASH` Dynamic Adaptive Streaming over HTTP

`FLV` FLASH Video

`MSE` Media Source Extensions


## `<video>`

支持播放 mp4/webm 格式

### `<video>` 元素的属性

#### autoplay 自动播放

## WebRTC

**网页即时通信** (即：Web Real-Time Communication)，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和音频流或者其他任意数据的传输。WebRTC 包含的这些标准使用户在无需安装任何插件或者第三方软件的情况下，创建点对点的数据分享和电话会议成为可能。

> 参考资料：[WebRTC.语雀](https://www.yuque.com/webmedia/handbook/webrtc)

> 参考资料：[媒体源扩展 API（MES：Media Source Extensions API）](https://developer.mozilla.org/zh-CN/docs/Web/API/Media_Source_Extensions_API)


## MSE（即：Media source extensions）媒体源扩展 API
提供了实现无插件且基于 Web 的流媒体的功能。使用 MSE，媒体串流能够通过 JavaScript 创建，并且能通过使用 `<audio>` 和 `<video>` 元素进行播放。

该规范允许通过 JavaScript 为 `<audio>` 和 `<video>` 动态构造媒体源，它定义了 MediaSource 对象，作为 HTML5 中 HTMLMediaElement 的媒体数据源。MediaSource 对象可以有一个或多个 SourceBuffer 对象。应用程序可以向 SourceBuffer 对象动态添加数据片段，并可以根据系统性能及其他因素自适应调整所添加媒体数据的数据质量。来自 SourceBuffer 对象的数据可以解码为音频、视频或文本数据，并由浏览器或播放器处理。与媒体源扩展一同使用的，还是包括媒体原扩展字节流格式注册表及一组预定义的字节流格式规范。

### 背景
MSE 大大地扩展了浏览器的媒体播放功能，提供允许 JavaScript  生成媒体流。这可以用于自适应流（adaptive streaming）及随时间变化的视频直播流（live streaming）等应用场景。

在这之前，浏览器提供的媒体播放功能（音频、视频）都是相当简陋的，一个 video 或者 audio 标签再加上相对应的数据 url 就搞定了。

``` html
<video src="/xxxx.mp4"></video>
```

### MediaSource 的简单使用
``` js
var supportMediaSource = 'MediaSource' in window // 判断是否支持 MediaSource
if (supportMediaSource) {
  // 新建一个 MediaSource 对象，并且把 mediaSource 作为 objectURL 附加到 video 标签上
  var mediaSource = new MediaSource()
  var video = document.querySelector('video')
  video.src = URL.createObjectURL(mediaSource)
  
  // 监听 mediaSource 上的 sourceOpen 事件
  mediaSource.addEventListener('sourceopen', sourceOpen);
  function sourceOpen {
    // todo...
  }
}
```

### SourceBuffer
SourceBuffer 对象提供了一系列接口，可以动态地向 MediaSource 中添加视频/音频片段（对于一个 MediaSource，可以同时存在多个 SourceBuffer）。

``` js
function sourceOpen () {
  var mime = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  // 新建一个 sourceBuffer
  var sourceBuffer = mediaSource.addSourceBuffer(mime);

  // 加载一段 chunk，然后 append 到 sourceBuffer 中
  fetchBuffer('/xxxx.mp4', buffer => {
    sourceBuffer.appendBuffer(buffer)
  })
}

// 以二进制格式请求某个url
function fetchBuffer (url, callback) {
  var xhr = new XMLHttpRequest;
  xhr.open('get', url);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function () {
      callback(xhr.response);
  };
  xhr.send();
}
```


## RTMP Real Time Messaging Protocol（实时消息传输协议）

很多视频应用的 app 中都是使用 RTMP 格式的协议

## video.js

## flv.js

[《「1.4万字」玩转前端 Video 播放器 | 多图预警》](https://segmentfault.com/a/1190000023243743)
