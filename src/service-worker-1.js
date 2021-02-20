
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js')
// 设置相应缓存的名字的前缀和后缀
workbox.core.setCacheNameDetails({
    prefix:'movie-cache',
    suffix:'1.0.0'
})

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// 对我们请求的数据进行缓存，
// 缓存策略：一共五种
// networkFirst：网络优先策略，优先尝试通过网络获取资源，如果获取失败则使用缓存中的资源
// cacheFirst：缓存优先策略，优先使用缓存中的资源，如果缓存中没有相关资源，则进行网络请求获取资源
// networkOnly：只使用网络请求获取资源
// cacheOnly：只使用缓存中的资源
// stateWhileRevalidate：如果缓存有数据，直接返回缓存中的资源，让界面快速加载，然后再发起网络请求更新相关资源并进行缓存

workbox.routing.registerRoute(
//   new RegExp('.*/.*'),
  /^\/api/,
  workbox.strategies.networkFirst()
);

 