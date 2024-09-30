'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js": "f86105de215097b5d4e1bbfd5460a221",
"version.json": "f2776bb7204e9a0562dd988f37ad84b5",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "cb2b26bf64c26971e61e5d165d4c687e",
"/": "cb2b26bf64c26971e61e5d165d4c687e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "b727a17a82e1d5bc2dced88c00735c5f",
"manifest.json": "dd8ed880b6cfb669e618291d3019f25c",
"assets/AssetManifest.bin.json": "1a47304f0413906569213be4b140331e",
"assets/fonts/MaterialIcons-Regular.otf": "3a878054409aad420dcaecaf223c17fa",
"assets/NOTICES": "4bde1427fb788477364647c6b7823bcf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "5ed4c02ad8645a7c12fe53d4f38502e2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/img_slider01.png": "145bfe0604e26480946c7d190af3642a",
"assets/assets/images/ic_shoes.png": "97db3b073606f4b64570df75f6c826e0",
"assets/assets/images/ic_clothes.png": "d02ed11f7ab7987a3c5f8087b2c983f4",
"assets/assets/images/ic_jewelry.png": "323e22ac7b5a89c9ad6662005a6841d6",
"assets/assets/images/ic_apple.png": "4200d58185bc9e13f003e5d277351de4",
"assets/assets/images/ic_profile.png": "d2c877f84275d4ef5fe379d4a5def8c8",
"assets/assets/images/ic_lock_outlined.png": "77346ecf836846c0c0c3315159414a78",
"assets/assets/images/ic_gadget.png": "75491ed58e54628e2714dce90e2cd625",
"assets/assets/images/ic_heart.png": "7ff2f613fc2890cb13df8c5054e8e3ba",
"assets/assets/images/ic_search.png": "75b54dc3ed6b6d3b16a445d12adde85e",
"assets/assets/images/ic_sneakers.png": "e73deb34af6f6263fc0159f0fef4a726",
"assets/assets/images/logo.png": "142d3c057bd8723ff86f5d308a2161ed",
"assets/assets/images/ic_nav_profile.png": "6340e353fd3e79ce92628928327e5702",
"assets/assets/images/ic_nav_home.png": "1d5fb85a3963726de5cf992f6f93ed8e",
"assets/assets/images/img_placeholder.jpg": "77dc4548fb79fccebe1e4007f2d1887c",
"assets/assets/images/ic_bag.png": "1f3a105482acb756ae9bba848f05c9d3",
"assets/assets/images/ic_bag_category.png": "ab1d467e2c7d5421d85e22d33fffaa2b",
"assets/assets/images/ic_dropdown.png": "be0099b551b26001e9ba8269336d0d24",
"assets/assets/images/img_slider02.png": "d76d66db9484ee730b7c9eb10fcbde1e",
"assets/assets/images/ic_logo_quickmart.png": "cce70375f1eac3ab121e9a284686fe34",
"assets/assets/images/ic_nav_wishlist.png": "182597db9250f5a644fc708732dae75f",
"assets/assets/images/ic_category_fashion.png": "75d81cb7dd4e15ffd7221bf0f9f874c1",
"assets/assets/images/ic_shorts.png": "4765eb23162f6297d84fc5cb9f74c272",
"assets/assets/images/ic_avatar.jpg": "136a22418b416e3377fc608cd1907a5c",
"assets/assets/images/ic_category_industrial.png": "f9ffb33737b07a412fdeec66aba74d73",
"assets/assets/images/ic_category_furniture.png": "68c4f86da3906c03df6da405ebc671e2",
"assets/assets/images/ic_email_outlined.png": "6a0dd5a571b4e68a295d8e9a3d41b1a3",
"assets/assets/images/ic_nav_cart.png": "37f5c0abd53be57f414c7ff7c8c98aa7",
"assets/assets/images/ic_hoodies.png": "653f84b4e8c6b9115d391e229df5293d",
"assets/assets/images/ic_nav_category.png": "9ce676a7e906d214d919f84242dcee13",
"assets/assets/images/ic_cosmetics.png": "e95ee48439061e41fa3cf0ffb13c13a5",
"assets/assets/images/img_detail_product.png": "4b1cc757777560cbc73cb97e63389504",
"assets/assets/images/ic_category_electronics.png": "50ec207c5bb239d7e1172540921a58cf",
"assets/assets/animations/loading.json": "5c04ae3e764f59216dfea6d31bec9a8f",
"assets/assets/animations/loading_image.json": "6fee47581bbeaec3a1ce50b65492f16a",
"assets/assets/products.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "e56dd5fd0590f6dfee1590e95d7732a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
