'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "b243051d1f61a9ff665552e28bf1db29",
"version.json": "dda1778f75118e4ac41a274c85e4b8c5",
"assets/NOTICES": "831f6c1889d5e8b34d2621144a03e17d",
"assets/assets/fonts/urbanist/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/urbanist/Urbanist-ExtraBold.ttf": "f4a05764495d2286312d1c6edd9513b4",
"assets/assets/fonts/urbanist/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/urbanist/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/fonts/urbanist/Urbanist-Black.ttf": "06b9bd346b763cf5ad3cc2ace60a2f21",
"assets/assets/fonts/urbanist/Urbanist-Thin.ttf": "b33ca161a200a34abdfcd4a25c30cccb",
"assets/assets/fonts/urbanist/Urbanist-ExtraLight.ttf": "9b0816f8a9ed26357eaddff6013d614c",
"assets/assets/fonts/urbanist/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/urbanist/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/images/svgs/grid_icon1.svg.vec": "5f429075fea9236301b403091cb0ed9d",
"assets/assets/images/svgs/no.svg.vec": "2b590d64d311295b73ef32718dc228a2",
"assets/assets/images/svgs/solid_happy.svg.vec": "0c9a2482f66b432ee4518275a4fc6d51",
"assets/assets/images/svgs/light/male.svg.vec": "34e4c40f9bdde8a8fa180b1e89ce036c",
"assets/assets/images/svgs/light/forgot_password.svg.vec": "841aaa6c3116e86347745791ac9a5b47",
"assets/assets/images/svgs/light/page6.svg.vec": "f6477ebac1e00eeb1e365a9a62f58c7e",
"assets/assets/images/svgs/light/onboarding_1.svg.vec": "ecbdd942191e7e2e09dc49504dc1395a",
"assets/assets/images/svgs/light/onboarding_2.svg.vec": "f158a31c97a62467251f4f76c2d3731c",
"assets/assets/images/svgs/light/page11.svg.vec": "744aa52e6f3262516e91ac176c7ff78a",
"assets/assets/images/svgs/light/onboarding_0.svg.vec": "55170ab8201235fcf2b0ff58ec523870",
"assets/assets/images/svgs/light/page13.svg.vec": "1885a746724864a08958f6529d8c43e2",
"assets/assets/images/svgs/light/onboarding_4.svg.vec": "438ad35d544898c7780f3db057824d2d",
"assets/assets/images/svgs/light/female.svg.vec": "1d398c1070e9fba2a1cc9df996ca366a",
"assets/assets/images/svgs/light/onboarding_3.svg.vec": "3e533b12cb5c8e11aea9dc188bcf532e",
"assets/assets/images/svgs/light/icon.svg.vec": "43668d7c9fa04acc393ea3736c2c9650",
"assets/assets/images/svgs/light/onboarding_5.svg.vec": "7d10509db9d8870ea9437e4a62609a46",
"assets/assets/images/svgs/wheel_selector.svg.vec": "1caebebe7eded6bc40a97b5ffae8ab96",
"assets/assets/images/svgs/icon_14_1.svg": "a2a721ee48bd8c9711e91e3c9bebd523",
"assets/assets/images/svgs/arrow2.svg.vec": "987c2298e6f03365a6d1c383157c6193",
"assets/assets/images/svgs/google_auth.svg.vec": "35c39605cbaf8f66ba0277929edeeaff",
"assets/assets/images/svgs/emoji2.svg.vec": "342ef35fcfef74b6371417648c51be88",
"assets/assets/images/svgs/lock.svg.vec": "ac3067f43afe0a46f9ab94e2107315b4",
"assets/assets/images/svgs/icon_white.svg.vec": "5fdda91f2880b9106bad07dc0fb81ee4",
"assets/assets/images/svgs/dark/male.svg.vec": "39205f1600a35aaf6adb0b5e7937f081",
"assets/assets/images/svgs/dark/forgot_password.svg.vec": "69bd94a4aa22803e0efdb50a12e01af1",
"assets/assets/images/svgs/dark/page6.svg.vec": "0a2c2e6561f82861ba88247fcd06c346",
"assets/assets/images/svgs/dark/onboarding_1.svg.vec": "62a3184a1045575962a85a1544e7a4d1",
"assets/assets/images/svgs/dark/onboarding_2.svg.vec": "1aec9c978fd2e97da74a08585ffda0d1",
"assets/assets/images/svgs/dark/page11.svg.vec": "301882acb6c42f60471037f3595fe965",
"assets/assets/images/svgs/dark/onboarding_0.svg.vec": "67bc0b09eb65775fa68f0848d4c4191f",
"assets/assets/images/svgs/dark/page13.svg.vec": "eb423a98c4894abad60f54d0c6d37903",
"assets/assets/images/svgs/dark/onboarding_4.svg.vec": "d0532270e69a7a956b53af7ec313b648",
"assets/assets/images/svgs/dark/female.svg.vec": "978e9a1ccbf8f43d943b59f33d84649f",
"assets/assets/images/svgs/dark/onboarding_3.svg.vec": "704436c21a4d0bf454a00af57b64988b",
"assets/assets/images/svgs/dark/icon.svg.vec": "1f3068cb1fdb200165003a2cd06034a8",
"assets/assets/images/svgs/dark/onboarding_5.svg.vec": "49eb831f49e79c4b7e1628dbb758f953",
"assets/assets/images/svgs/2fa.svg.vec": "1e47234bdc4bdec4b47eb8e5520bb71e",
"assets/assets/images/svgs/grid_icon3.svg.vec": "72335e4b4ea93b3a4ab325632a330360",
"assets/assets/images/svgs/solid_flag.svg.vec": "1cd38675834a88ff701973142c2c587e",
"assets/assets/images/svgs/instagram.svg.vec": "b8b1f745228b36193484f0d77a0ece92",
"assets/assets/images/svgs/emoji4.svg.vec": "4271c7e1436ac7a50604721855042a1d",
"assets/assets/images/svgs/solid_robot.svg.vec": "106c9fb77e3fc78ee34b38eb212b1955",
"assets/assets/images/svgs/male_icon.svg.vec": "3fbc92f6ee40de54bfd73126fe89a079",
"assets/assets/images/svgs/solid_mobile.svg.vec": "dd51dad6562084be5c861d05f6611b5f",
"assets/assets/images/svgs/icon_14_2.svg.vec": "af9f6de82647eabfd44578576e752c83",
"assets/assets/images/svgs/grid_icon4.svg.vec": "a35dea4eec961ab8583377c9c1216089",
"assets/assets/images/svgs/grid_icon2.svg.vec": "b3242de2cecdbce966b6fe7dd4b58174",
"assets/assets/images/svgs/emoji1.svg.vec": "87887498ac5eeab30768f22ed3a04942",
"assets/assets/images/svgs/eye.svg.vec": "63eebf689df602a0ab6f8e98cb1363ac",
"assets/assets/images/svgs/back.svg.vec": "1bf3606f1389eb22039370b280ef3490",
"assets/assets/images/svgs/facebook.svg.vec": "7d7457e2cfb7a14c5a8c706a16b747e9",
"assets/assets/images/svgs/yes.svg.vec": "76698c609f9c56d2ad8294573becc8c0",
"assets/assets/images/svgs/slider_center.svg.vec": "85c9e7cfe78fcaee940b4a10b0dd6197",
"assets/assets/images/svgs/arrow.svg.vec": "552784d09f773d927296e57fb0ba5f5c",
"assets/assets/images/svgs/pointer.svg.vec": "247cf5f2ca7cc577ad3a96df4e6f3df1",
"assets/assets/images/svgs/X.svg.vec": "5a573380fea7ae000cd0b2d1dd6a23e3",
"assets/assets/images/svgs/emoji3.svg.vec": "82e873d7c536e146f3a078b631f5ab69",
"assets/assets/images/svgs/solid_heart.svg.vec": "7e8d5177b584b2a505925c061fb062f1",
"assets/assets/images/svgs/email.svg.vec": "4abe2c089cead8b5af6b586c77b296a2",
"assets/assets/images/svgs/female_icon.svg.vec": "4442d638a6c575dd929bc84f5d09d2ad",
"assets/assets/images/svgs/emoji5.svg.vec": "2b6188ed458b567011d0a1608671d633",
"assets/assets/images/svgs/password.svg.vec": "7456190ba2da5ce5144841e1e33ad460",
"assets/assets/images/svgs/google.svg.vec": "8afc5fbab0ed02a5fb2541b76dee5d1b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "f0e29726f9930a917593617f4046969f",
"assets/FontManifest.json": "ebc895e8c6e60783b55f9ed5c7c6227e",
"assets/fonts/MaterialIcons-Regular.otf": "7582db59bee30142e3234471ba5189db",
"assets/AssetManifest.bin": "bc1a3974d8c84f274e9df8e222b723c8",
"assets/AssetManifest.json": "105ee1cbf5a803bf4d63519d4a7b51f0",
"flutter_bootstrap.js": "9fe1d6025e413b8c365261d2d080bfb3",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b6295369e5b6048ad07444d7d405e170",
"/": "b6295369e5b6048ad07444d7d405e170",
"manifest.json": "5b031fa97867e5931d378ffabb40ea33",
"main.dart.js": "4ece928f019eb727e5a471a75faf9458",
"splash/img/light-3x.png": "95a7142e89ebc7ec55944c69c9db247b",
"splash/img/light-2x.png": "17ea0da9cfbcf4fec8e18869cc41fa6c",
"splash/img/dark-1x.png": "0a6e576aab07e02d150178aa74ed876e",
"splash/img/light-1x.png": "6013e1b693c1c98c85085eecb340a56a",
"splash/img/dark-2x.png": "2d79db4e3e0fa8de4b8c7793d58eb178",
"splash/img/dark-3x.png": "0f4b964d2a3b53173d75a3ad72628750",
"splash/img/dark-4x.png": "f343d52287a413b0ff97af5b6a666572",
"splash/img/light-4x.png": "5bdb2ff3e30778a394d137525f0ac51a"};
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
