---
title: 性能优化
categories:
 - 性能优化
tags:
 - 性能优化
---

## preload 和 prefetch

### preload 预加载

向浏览器声明一个需要提前加载的资源，当资源真正被使用的时候，立即执行，就无须等待网络的消耗。

### prefetch 预判加载

告诉浏览器未来可能会使用到的某个资源，浏览器会在闲暇时加载对应的资源。

当一个资源被 `preload` 或者 `prefetch` 获取后，它将被放在内存缓存中等待被使用，如果资源位存在有效的缓存机制（如 `cache-control` 或 `max-age`），它将被存储在 HTTP 缓存中可以被不同页面所使用。