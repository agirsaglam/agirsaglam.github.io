'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "41f85884bed901bcfd85a8b197fc942a",
"splash/img/light-2x.png": "7deb6922fe461821f9dee74c9b3c625b",
"splash/img/dark-4x.png": "4ce9012853da5deee8e9f8d564c0b88b",
"splash/img/light-3x.png": "6381baba9ab696d74ce50ba9f3cf6949",
"splash/img/dark-3x.png": "6381baba9ab696d74ce50ba9f3cf6949",
"splash/img/light-4x.png": "4ce9012853da5deee8e9f8d564c0b88b",
"splash/img/dark-2x.png": "7deb6922fe461821f9dee74c9b3c625b",
"splash/img/dark-1x.png": "ef9798d90e58abb4fed937c4ace894dd",
"splash/img/light-1x.png": "ef9798d90e58abb4fed937c4ace894dd",
"splash/style.css": "b61734b1c9829a5c3c2053eb18c7ae7b",
"index.html": "5cc650ac3f690fe2983b12e5b11f93d6",
"/": "5cc650ac3f690fe2983b12e5b11f93d6",
"main.dart.js": "f27e39df55305b8ac5b8359b0156aec0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "10fc72655124681742fa47aadfdf8628",
"assets/AssetManifest.json": "643abff6425ed263193341b5f7c31c98",
"assets/NOTICES": "03648f7b918de11eb94425d1c5db31cb",
"assets/FontManifest.json": "abb59e62508a8a6cf2ac32d0a1d3ce6a",
"assets/packages/lw_components/assets/icons/LwIcons.ttf": "ecf2963b00969415d1e429aa8fc84908",
"assets/packages/lw_components/assets/fonts/UnitedSansReg-Medium.otf": "001fbf0f03dcd8de5cf2fa710d1c66fa",
"assets/packages/lw_components/assets/fonts/UnitedSansReg-Black.otf": "6b6c88d5156760338eeb786493f9618d",
"assets/packages/lw_components/assets/fonts/UnitedSansReg-Bold.otf": "7a51f2c874e4c8e837c7b3937c651ba6",
"assets/packages/lw_components/assets/fonts/UnitedSansReg-Heavy.otf": "55a7a3e258709b90829e9d1846022067",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/contents/attemptTutorialLight2.png": "d4325c3c311e7ac59c86e6a470d4ea15",
"assets/assets/images/contents/attemptTutorialLight3.png": "99152ac174d1d99a75be9a186c021e8c",
"assets/assets/images/contents/attemptPaywallLight4.png": "4329cfe7d9806924f769f46dcc9434d6",
"assets/assets/images/contents/attemptTutorialLight1.png": "59cf5fd3aa69aa69bdc14f3ab8f31c4e",
"assets/assets/images/contents/attemptPaywallLight5.png": "672db9dd1bbab075485ac73c54c08a02",
"assets/assets/images/contents/attemptPaywallLight1.png": "cf776ce4e1398d339c0b88c2bec30519",
"assets/assets/images/contents/attemptTutorialLight4.png": "400ecfc54f544ef90d9cc6d049ff158c",
"assets/assets/images/contents/attemptPaywallLight2.png": "afcdd49fbef09b9b184abfdf6fda8682",
"assets/assets/images/contents/attemptPaywallLight3.png": "bc5f88205d2cb3921b2a72b96f0a10ae",
"assets/assets/images/contents/attemptTutorialDark1.png": "30493b022b517c6d64a6a1294582c566",
"assets/assets/images/contents/attemptTutorialDark2.png": "d0029b1639c9e6d7056c591762e03878",
"assets/assets/images/contents/attemptTutorialDark3.png": "a1411d7ee0faa691ca2ccaddfb6e8f65",
"assets/assets/images/contents/attemptTutorialDark4.png": "d09492fe3becce10b39ea74c0a1c4463",
"assets/assets/images/contents/attemptPaywallDark4.png": "e5ef846b320102aabca043211fdd3936",
"assets/assets/images/contents/attemptPaywallDark5.png": "ad08baa2fc2f8802f70f1ad86c81cb02",
"assets/assets/images/contents/attemptPaywallDark2.png": "7b83155ecfc32af377163d3dcc45eeaa",
"assets/assets/images/contents/attemptPaywallDark3.png": "07435ed10af105762e446fa337642da7",
"assets/assets/images/contents/attemptPaywallDark1.png": "7e10fd3fa3f535ca907969055a1738a3",
"assets/assets/images/logos/logoText.png": "a88a00ff2e182fe8302c5b809eef54e0",
"assets/assets/images/logos/storeApple.jpg": "f9a74a617665248c1f1d1e9399963681",
"assets/assets/images/logos/instagram.png": "9950268aa1c96de39bfbf51f58d0e0b8",
"assets/assets/images/logos/turkishFlag.png": "65dc03991770d443cc8de5b8bc484e05",
"assets/assets/images/logos/storeGoogle.jpg": "51fc79ccf30e90c058371f8385e7c2c8",
"assets/assets/images/logos/logo.png": "d572e00100942e406c794bc3ba725bf1",
"assets/assets/images/logos/logo2.png": "98700724837bfa9c1f181df8c89faa97",
"assets/assets/images/backgrounds/card.png": "c742a1135c607fedd6f8111ca6b533d8",
"assets/assets/images/backgrounds/goldenCard.png": "b4f1ea99409e3b73f20ad0c8ba64e4d8",
"assets/assets/images/backgrounds/storyRed.jpg": "0a3c881214ec2913da39266009a6f170",
"assets/assets/images/backgrounds/storyBlack.jpg": "504b18c5b88db7c9308e26a349e5c017",
"assets/assets/images/backgrounds/exerciseSquat.jpg": "bf927e6a4e9005e9615dcdc0b77df429",
"assets/assets/images/backgrounds/exerciseBench.jpg": "e7593fc0892e7c5d4f0de1c077f44e64",
"assets/assets/images/backgrounds/cardBehind.png": "8c6ee59f3fc3d714cb86e0b9607ded7a",
"assets/assets/images/backgrounds/storyWhite.jpg": "97c5357aacf50d62a212ad55e6389e16",
"assets/assets/images/backgrounds/exerciseDeadlift.jpg": "0f01cfd84d422199e839da8a53a51012",
"assets/assets/images/backgrounds/goldenCardBehind.png": "6655977a81120d9a2d54ca209331eac5",
"assets/assets/images/icons/forward.png": "76a9e8eb0d87f77db99a9f4953818422",
"assets/assets/images/equipment/plateFiveTeen.png": "d59ca78fa9b27d19e83bb630f900c3e5",
"assets/assets/images/equipment/plateFive.png": "110aa4f863bcdc3060575cb7646b2912",
"assets/assets/images/equipment/plateTen.png": "33a966a3383d56b84cbd599b9cb31c41",
"assets/assets/images/equipment/barHalfOlympic.png": "4966177d3be21251befae534018be625",
"assets/assets/images/equipment/plateTwenty.png": "dc82757ea1738122a98b91f4b1cb75f0",
"assets/assets/images/equipment/plateOneAndQuarter.png": "565bff3d1be0d33e826e2982aed4a543",
"assets/assets/images/equipment/plateTwentyFive.png": "32218dd85aff52dfdfcd45574cb955c2",
"assets/assets/images/equipment/plateTwoAndHalf.png": "e5428dbc0467dfe5b65f9e7c91ca281b",
"assets/assets/images/equipment/barOlympic.png": "5ac74147f16846ae3d70ba002ab6dd30",
"assets/assets/lang/tr-TR.json": "dd646257c535941ce585411e6ab7b652",
"assets/assets/lang/en-US.json": "cf530300f95005ccde4aea6c8495a005",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
