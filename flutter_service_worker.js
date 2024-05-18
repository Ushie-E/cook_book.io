'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2a27680ac4e6439cfc9556f9af1311a4",
".git/config": "fcff3745a08408c6d89cb03df90ca386",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9477cbc0cd0ea28ff9bceae4a39e741",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c4a1ab18b69efa10a1e7008135f8ae53",
".git/logs/refs/heads/main": "55ef0fc7bf0c0bfd30a8da211bb28ca5",
".git/logs/refs/remotes/origin/main": "f99199a708412ec6ed6a66cb7c12ed09",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/6953bfb1101badba7b2bc1ccada94157be6679": "bb0c1971cb69d61daa8743c58f158a24",
".git/objects/15/859e451522511574e7bb5cd72ddbb15c2563f2": "174285513f340821edb027b495c19864",
".git/objects/16/4581323ae25859df16ec5ad05ce604512adc1f": "6a6fcbe1c89d3e185afa726995b341a2",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/868a67b2517cb1081384278775d3161220100a": "bc148c060af0cb7f28fad33f6ba8c6b4",
".git/objects/33/f8f59a52808766a49e8addd03723e9295f0789": "482b6cf50b6c628f6c193d48934962a3",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/086b11f26869b89cff9d9c25cb071fd1ec88b0": "8b17465bf3206d7ce8131a7770043ec4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/63/f048b25a4b4f1f2409afc0841434de68886c37": "88066e7aa4324810763143b44efb3d63",
".git/objects/6b/363e0de0a5782d110646b9343b5a14e1ac546f": "9ad41366917249744e2e26d2c842a1b3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/903dd45fde17b32c46fda7edb75056f09b92e6": "17e81fbdb86c80276c75e456fa15f3ff",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/0b8afedf7b94e8a415ee9086f2a339319bb791": "9a4041cefa2ea4a2a72fdafaa8620c84",
".git/objects/a1/19e7065312d1c9983529b8597e828036a80876": "acdbfda28a049b5098b812edb8048286",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/cde2f5df0e13caf77656eab0ba68c587a62181": "976b3cc7cd062b492f2f0773356a0f2d",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/1932ba3edf9a1518efd274eb222b6ae8de35a5": "f4e50f7a9f9278dad76d31a10afdb2bc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/02be19155e821cffad3baa8ca7e9be60d80e3d": "a6d81f86a896fc9cb7fd6e34348057a1",
".git/objects/d0/d7d21e5f903d318d541b02033c1e56428ea9ba": "234f80b03f43371f9958eb7fcb1acdf3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/8dfdccde538326421208266f2cbeccc4df8fa5": "68f0aa4445ed839562ccb28736be437b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9ee595683a83f0fcd98ede70d8e1a8555ecc96": "6aa33dd9a3d8222f93f84ff975b5fbc5",
".git/objects/e2/1cd5cefa33f9fe82b7d1626c422f15f0729cdf": "217eccc6b8357fa01abe0c3373d4ec00",
".git/objects/e2/f9c15c37285b3a2f975f8ad889904ce2c61696": "7ad6a3d20324f39bb6623e85aa91dffe",
".git/objects/e8/11079eadaeb782f2bc5e9d7418a237202cc392": "0b81f10677c4f43a675b1287c76e8a5d",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "175290ba1cf4ac145c514bff698601dd",
".git/refs/remotes/origin/main": "175290ba1cf4ac145c514bff698601dd",
"assets/AssetManifest.bin": "7ea68a85b3fcfe06645765458ecf3bb5",
"assets/AssetManifest.bin.json": "5a04bb753563730967bebd1d3c6d9cbc",
"assets/AssetManifest.json": "555a1b627374cb16ecc2fba3b5432879",
"assets/assets/images/hut.png": "83b294b4f119bf13c72826964821fa4e",
"assets/assets/images/not_hut.png": "5b09c481ccd6ced9852e936de66095be",
"assets/assets/images/shot-hut.png": "1cc737451af49d80e73d82bfa19b89d7",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "6704ab181e4509c562591afda6de28a4",
"assets/NOTICES": "588ff9d77b8556d9e57ecc6ba5cf9876",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"cook_book.io/.git/config": "2c438222660c615dc1d77790745c39aa",
"cook_book.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"cook_book.io/.git/FETCH_HEAD": "f7c2f969bf40058f6a4a41b20bcbe9fc",
"cook_book.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"cook_book.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"cook_book.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"cook_book.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"cook_book.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"cook_book.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"cook_book.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"cook_book.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"cook_book.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"cook_book.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"cook_book.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"cook_book.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"cook_book.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"cook_book.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"cook_book.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"cook_book.io/.git/index": "a2943420509c0cd7173def6d8d44cf7a",
"cook_book.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"cook_book.io/.git/logs/HEAD": "72613b5a21401363aa3d9b076b0d1745",
"cook_book.io/.git/logs/refs/heads/main": "72613b5a21401363aa3d9b076b0d1745",
"cook_book.io/.git/logs/refs/remotes/origin/HEAD": "3ef55e68527e2b8afc813788470324ca",
"cook_book.io/.git/objects/pack/pack-06eaad0df69d3bcc037e62d8fc5014c85d883ece.idx": "cb5139b42ed5ce20153e96be2e3a63eb",
"cook_book.io/.git/objects/pack/pack-06eaad0df69d3bcc037e62d8fc5014c85d883ece.pack": "0ef15a3bdbdf2c012bd70fa789bfa104",
"cook_book.io/.git/objects/pack/pack-06eaad0df69d3bcc037e62d8fc5014c85d883ece.rev": "c41f96341e7154a9c559a7df66e49e05",
"cook_book.io/.git/packed-refs": "c13b3b6abd9d53bccb5f78d6e25ccd60",
"cook_book.io/.git/refs/heads/main": "869bb6376650ada498b587afe1a4acca",
"cook_book.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"cook_book.io/assets/AssetManifest.bin": "7ea68a85b3fcfe06645765458ecf3bb5",
"cook_book.io/assets/AssetManifest.bin.json": "5a04bb753563730967bebd1d3c6d9cbc",
"cook_book.io/assets/AssetManifest.json": "555a1b627374cb16ecc2fba3b5432879",
"cook_book.io/assets/assets/images/hut.png": "83b294b4f119bf13c72826964821fa4e",
"cook_book.io/assets/assets/images/not_hut.png": "5b09c481ccd6ced9852e936de66095be",
"cook_book.io/assets/assets/images/shot-hut.png": "1cc737451af49d80e73d82bfa19b89d7",
"cook_book.io/assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"cook_book.io/assets/fonts/MaterialIcons-Regular.otf": "6704ab181e4509c562591afda6de28a4",
"cook_book.io/assets/NOTICES": "b183c74ad07ac6869ca317bfa8ea9445",
"cook_book.io/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"cook_book.io/canvaskit/canvaskit.js": "b8f4beed9f92960c33fac4f3ec0f49db",
"cook_book.io/canvaskit/canvaskit.js.symbols": "a5abd9548c1ac52492fb83682355175c",
"cook_book.io/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"cook_book.io/canvaskit/chromium/canvaskit.js": "ae8a22c690cdbe6db931f7fcfa32793c",
"cook_book.io/canvaskit/chromium/canvaskit.js.symbols": "e6a058eeb908ce2c2c30d450cffb438a",
"cook_book.io/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"cook_book.io/canvaskit/skwasm.js": "78e709d9dc8ed5e0288a151e3cf3e95d",
"cook_book.io/canvaskit/skwasm.js.symbols": "d10d5b9ecde9454f3b5e0574a3d4649c",
"cook_book.io/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"cook_book.io/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"cook_book.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"cook_book.io/flutter.js": "9fd90a6808bad6cfbaf32408c99eee90",
"cook_book.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"cook_book.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"cook_book.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"cook_book.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"cook_book.io/index.html": "63a9bb3d68ac580fcc00046ac60f2925",
"cook_book.io/main.dart.js": "6b5a9d1891271b520d08c2500666c292",
"cook_book.io/manifest.json": "8d7c2284ffdcb7d66ca0dcbe5fef4bba",
"cook_book.io/version.json": "17b32ce5cec4a2a8cb4c197a270ec162",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf92dcbd75b5421ed94801751d51ffe5",
"/": "bf92dcbd75b5421ed94801751d51ffe5",
"main.dart.js": "5af03c20131e60e5bedfb449559eeff0",
"manifest.json": "8d7c2284ffdcb7d66ca0dcbe5fef4bba",
"version.json": "17b32ce5cec4a2a8cb4c197a270ec162"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
