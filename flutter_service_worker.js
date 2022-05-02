'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ea3a8772d3d1f0a4dbeeb9addb717ea3",
"index.html": "475f91aaccebb53d0071b7b3b119a916",
"/": "475f91aaccebb53d0071b7b3b119a916",
"main.dart.js": "edf848d5cdd130f80c9ea10900bbd10e",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ee54cec9430a1de75155c149bd98726c",
"assets/AssetManifest.json": "f24340442ac39a57681ab7db314d2274",
"assets/NOTICES": "81abe0a0818bfef7047a9779bc3561c6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/personal/document_text.svg": "80456e137f1ce6cf42e0629ef7cae0fc",
"assets/assets/images/personal/logout.svg": "f1c156f030475c8f0a843ae2627358a3",
"assets/assets/images/personal/password_check.svg": "458d4384bb4d8be47e7f769418ffc59d",
"assets/assets/images/personal/send_square_2.svg": "edcbd779479d2c3563a0d2bf61504931",
"assets/assets/images/personal/wallet.svg": "f60ce8da05ef97ef67d6a404e2d4cf62",
"assets/assets/images/personal/security_user.svg": "aaf01265c6d4e878727c6e9b6068221a",
"assets/assets/images/personal/facebook.svg": "c6c71b538db828adb24701e9f5172318",
"assets/assets/images/personal/google.svg": "e6d4221c5607dcdfc98270326c34392e",
"assets/assets/images/personal/star.svg": "3bdf94eff17835c4c37137d434d19324",
"assets/assets/images/personal/frame.svg": "3cab276a6e8afce0c556c0c82f14c7d3",
"assets/assets/images/personal/gift.svg": "60e2f4102ac51f258697e2fa1081c116",
"assets/assets/images/personal/apple.svg": "2020f03a344c0eb95b3f84d886bd42b0",
"assets/assets/images/splash/splash_logo.png": "bb189252ad0bcaa349bba4f77ef26b30",
"assets/assets/images/viettel.png": "d47c599503bd1e842525276c6b711e5f",
"assets/assets/images/vietnammobile.png": "656ef977ceb488b8538b4f2d06d748f1",
"assets/assets/images/svg_icons/coin_2.svg": "d6008821b8c3aecf4639795f93672fe0",
"assets/assets/images/svg_icons/arrow_down_bold.svg": "eb4fdba823be945feaf4450e6b415da4",
"assets/assets/images/svg_icons/tick_square.svg": "8b761216e442073972960c1ab8baebc8",
"assets/assets/images/svg_icons/face_id.svg": "e44b66a4325f9f785bffd36882335aec",
"assets/assets/images/svg_icons/arrow_right_2.svg": "e6445376e54bf4939bfe4dd97515b590",
"assets/assets/images/svg_icons/dollar_circle.svg": "a02f676232f647c7f48555b7aa26e575",
"assets/assets/images/svg_icons/export.svg": "72458a55c49e34605f69059e1849ebb4",
"assets/assets/images/svg_icons/tag.svg": "1df9982835eeb5778e812defe69503ae",
"assets/assets/images/svg_icons/arrow_right_3.svg": "8502c9bb8b2519ae494147835d565288",
"assets/assets/images/svg_icons/moneys.svg": "64c37cb2d1c903006835236956e051db",
"assets/assets/images/svg_icons/card_pos.svg": "e6cefe736e4a3761eac896f2470bd6d1",
"assets/assets/images/svg_icons/heart_slash.svg": "198b3903f8af644b5083fdf785f4c4cb",
"assets/assets/images/svg_icons/money_send.svg": "9e41572b5b8b05a68acb8819487de6c9",
"assets/assets/images/svg_icons/discount.svg": "4bc88609c96c7f7df583234dec1dfa4d",
"assets/assets/images/svg_icons/arrow_left.svg": "6681a52ed1b489db0b9250b5d34b7653",
"assets/assets/images/svg_icons/link.svg": "07fc5da08b1d0fb511d9094fb3da58d8",
"assets/assets/images/svg_icons/ticked_square.svg": "e95df53532883a867ecbe04066434387",
"assets/assets/images/svg_icons/touchId.svg": "1af2dcd1df98fe03d8e2f4343cfa06e1",
"assets/assets/images/svg_icons/android_face.svg": "547c51e501a3333c7cdab1041f2303af",
"assets/assets/images/svg_icons/close_circle.svg": "6a52065da404fca42b0943338b59ef07",
"assets/assets/images/svg_icons/book.svg": "834a04e5b8226257d0382136210694f8",
"assets/assets/images/svg_icons/arrow_up.svg": "43c3674929a3f3dcf63dfaa94ab8d150",
"assets/assets/images/svg_icons/search_normal.svg": "8a47a1b91cba103ae5a6813fabc7be2d",
"assets/assets/images/svg_icons/wallet.svg": "8fff9f843a2466f0a90a6667e3c98ded",
"assets/assets/images/svg_icons/flash.svg": "bd70f8f0dede3a83576539891e61e191",
"assets/assets/images/svg_icons/money_add.svg": "92c45a612272c520b303c1b110b67a84",
"assets/assets/images/svg_icons/arrow_right.svg": "69ca1497925e5802435a27462466a4f5",
"assets/assets/images/svg_icons/card.svg": "df79c38619ac2b488e6d85f146dc4d51",
"assets/assets/images/svg_icons/info.svg": "4fb5c5d70aed59c7a29274be89df6081",
"assets/assets/images/svg_icons/add.svg": "d2354fcf4e561a965662a49b5ae910ce",
"assets/assets/images/svg_icons/info_circle.svg": "ef38a13701a9b02b5b3f8b39004b7be6",
"assets/assets/images/svg_icons/moneys_2.svg": "83f716fc7ed4c0a5d5dca41a175d76f5",
"assets/assets/images/svg_icons/tick_circle.svg": "6e0f66d9aa6864b8d0d4c2f152e67a9f",
"assets/assets/images/svg_icons/message.svg": "11031d4134879e7a6dc4dd5d5f4bca79",
"assets/assets/images/svg_icons/arrow_down.svg": "d8bc919100f0300927043703f828cba0",
"assets/assets/images/svg_icons/notification.svg": "6eb3e490cfaf21a8ca3fcac7bb88385e",
"assets/assets/images/svg_icons/tick_cir.svg": "5f6745f9b88cf58c87a8b69449229127",
"assets/assets/images/svg_icons/coin.svg": "0361afa4da0febfb2256f6e028ccbf4e",
"assets/assets/images/svg_icons/bill.svg": "c3dc6b4f0fa4b4f303da9a287abea0a2",
"assets/assets/images/svg_icons/camera.svg": "9a8d3610271d3e9681eb8e29ca087c4e",
"assets/assets/images/svg_icons/faceId.svg": "49094f1858fe8497bcc18388fdbc57f7",
"assets/assets/images/svg_icons/more.svg": "21b682ed1c7f942b22013ef6ce2298b9",
"assets/assets/images/svg_icons/bill_noti.svg": "a356aa909e904af17f97eabf8896e60d",
"assets/assets/images/svg_icons/trash.svg": "ebf30dadd83ca28a94ae1406a805080c",
"assets/assets/images/svg_icons/shield_tick.svg": "bdb63eeb1bfe1ee4aef79c3a4049973e",
"assets/assets/images/svg_icons/wallet_add.svg": "b11c31f9c2994b04b154bd7faf05d1f7",
"assets/assets/images/svg_icons/direct_inbox.svg": "1b9eb694cf1b2e4d4f195bacae31e33b",
"assets/assets/images/svg_icons/edit.svg": "5bd65e3f06bdd4badaed138423ba93bb",
"assets/assets/images/svg_icons/strongbox.svg": "a8479f4949ca2ac8a1101cba1157d2b4",
"assets/assets/images/svg_icons/arrow_down_2.svg": "030b44c70925284ac7f4a7fdc50d62c7",
"assets/assets/images/svg_icons/eye_slash.svg": "c48d3217517c176313370ab02ee1b004",
"assets/assets/images/svg_icons/frame.svg": "2f355a479984789ff515cac5f9cc0d32",
"assets/assets/images/svg_icons/call.svg": "1c6c0f1974874b434a8079b54623cc4f",
"assets/assets/images/svg_icons/eye.svg": "c3159ded6293af02b95f01c6b2c3f373",
"assets/assets/images/svg_icons/money_receive.svg": "78ff7b360c2983d17e2bc975502468c9",
"assets/assets/images/svg_icons/personalcard.svg": "49388f7197ee8884f6ef65fe68b12cd1",
"assets/assets/images/svg_icons/gift.svg": "3613a960b78466f68154193f5adb12fe",
"assets/assets/images/svg_icons/arrow_22.svg": "51fa014761e96e6cccae8ec496e86a7a",
"assets/assets/images/svg_icons/money.svg": "e18e3e76faba4f2947a85e636fbb83bd",
"assets/assets/images/svg_icons/filter.svg": "54aae3adb57a628474620d24b4955c51",
"assets/assets/images/svg_icons/water.svg": "4b2a2997a422d95d843c4d023e33c5ec",
"assets/assets/images/svg_icons/calendar.svg": "4d870bc751c4f5d9e75feb7ac588e421",
"assets/assets/images/svg_icons/android_finger.svg": "cbc9d16e02d95d776cbdd6cf8a8f5962",
"assets/assets/images/svg_icons/arrow_up_bold.svg": "85ad3abde98eaa61d6cbc9a8fe9df2cf",
"assets/assets/images/svg_icons/lock_circle.svg": "aff31e74699492c1a1530a6f16838008",
"assets/assets/images/svg_icons/balance.svg": "4e7b71919923e043099fbb718f595799",
"assets/assets/images/svg_icons/arrow_up_2.svg": "536e01bc7d027da1dae30f98301211c2",
"assets/assets/images/svg_icons/status_up.svg": "daba6d80034db4d93f43ed1cee111e6a",
"assets/assets/images/svg_icons/arrange_circle_2.svg": "68faf4a7d95a65aa1cd025f170b8e78d",
"assets/assets/images/svg_icons/money-recive.svg": "78ff7b360c2983d17e2bc975502468c9",
"assets/assets/images/svg_icons/minus.svg": "08e2f45c7b8b2f1d451f2aa491d52883",
"assets/assets/images/svg_icons/arrow_left_2.svg": "467b26052aab236b348a48cc5e4e06bd",
"assets/assets/images/mobiphone.png": "937ec2f4e4d75c2747ef77c731d27b58",
"assets/assets/images/gmobile.png": "61e2d90b395a3b440c67876739d30aa5",
"assets/assets/images/start/start_image_1.png": "b9baa7709594a93581aa79c2ba8e264e",
"assets/assets/images/start/start_image_3.png": "6a95dc4093663b200beb48d8a397ad9d",
"assets/assets/images/start/start_image_2.png": "6a95dc4093663b200beb48d8a397ad9d",
"assets/assets/images/start/start_image_6.png": "9ccbe1097da6dd17341e78a8a94e2e06",
"assets/assets/images/start/start_image_5.png": "7985ae93cd51bfc6044049abaaea33d6",
"assets/assets/images/start/start_image_4.png": "cecd1453a799340924747fbc9d651786",
"assets/assets/images/warning/emo_sad.png": "63c477b893e2da0b2ef36ddda969c2d3",
"assets/assets/images/button/google_icon.png": "f1e50f00408b6db93a2441ec92ebbc34",
"assets/assets/images/button/idcard.png": "20b4ec6ed78c926af818990ef2c3c836",
"assets/assets/images/button/arrow_left.png": "83a3f77a09bee6399303b867a9ae8dac",
"assets/assets/images/button/face_id.png": "b267de384dc60705b1f9c93bbb29482c",
"assets/assets/images/button/clear_icon.png": "a05e409b93c1114e31f2bcd485d9010b",
"assets/assets/images/button/selected.png": "b96beae133614a9b805182ea0bba0ec9",
"assets/assets/images/button/passport.png": "7f778de0cc673502039ecb1b63ff2fc4",
"assets/assets/images/button/no_selected.png": "f61a7f3a2a350b0ff1192b298bc363c2",
"assets/assets/images/button/apple_icon.png": "28583e6f09f6d4c3bf39f42cec064b4b",
"assets/assets/images/button/eye.png": "b678fe771aa45f019bd25174b355cb66",
"assets/assets/images/button/camera_button.png": "c0f13a531a7c6969bcf9a6519063e7c8",
"assets/assets/images/button/touch_id.png": "d03968b6fc8f102d93f8868c1fdfa119",
"assets/assets/images/button/phone_icon.png": "3e39cdf257c1c8237d2caf957050b2e9",
"assets/assets/images/logo/coin_invest1.png": "0591121c96f4e07cbb78ab4fc6e04e10",
"assets/assets/images/logo/coin_invest3.png": "acfda455db0762441098b10d30e798bb",
"assets/assets/images/logo/coin_invest2.png": "31375533c02a76151df970be20bfe4b8",
"assets/assets/images/logo/mb.png": "12a44dbca5e640d12d4e5ab869e48c40",
"assets/assets/images/logo/coin_invest4.png": "981b1905f8d09beb43f7e24fc02212f1",
"assets/assets/images/logo/coin_top1.png": "702c30b87602d0a29a66b68bb47254bb",
"assets/assets/images/logo/gift.png": "b4c754b3bd5ddf7d41b330a037ba90d5",
"assets/assets/images/logo/coin_top2.png": "f583ad3c7360fb231b5bc5da20b00306",
"assets/assets/images/logo/coin_top3.png": "116d96c07a6438f4ab2e4fff1c1ef4bc",
"assets/assets/images/tabbar_icons/home.svg": "687d0994ede8b1834b8ebf3b486239e3",
"assets/assets/images/tabbar_icons/main.svg": "9827cba6e5462b7d6d67fd345eb146ed",
"assets/assets/images/tabbar_icons/personal.svg": "169630468da1a354014521b60769e648",
"assets/assets/images/tabbar_icons/cash.svg": "35686e682a9a108246914f5d5e50222e",
"assets/assets/images/tabbar_icons/arrow_m.png": "5eaef2f00e2fe16b75187146515e6e2b",
"assets/assets/images/tabbar_icons/portfolio.svg": "493f0574e37ba1b9b67f25f2b12928e1",
"assets/assets/images/login/lock.png": "833b73f214a31e162b63857e903adacb",
"assets/assets/images/login/login_image_1.png": "b3184f8f1d9f193477d07c00d39f59fe",
"assets/assets/images/new_mobile/viettel.png": "e3201c63f68c690a9d3fb662a67ff997",
"assets/assets/images/new_mobile/gate.png": "c29cc1e231581ca4c47eeb2bac7300a3",
"assets/assets/images/new_mobile/garena.png": "ad89fe8d41b7f69317d4c81b3bab548d",
"assets/assets/images/new_mobile/soha.png": "0924b1790d8222b138acabf92f06e222",
"assets/assets/images/new_mobile/vcoin.png": "36cde7dfdf9603b9efb5cfa91d5a054c",
"assets/assets/images/new_mobile/gmobile.png": "b7dbed5cc5078b5df4a78acfe9b843ea",
"assets/assets/images/new_mobile/vietnamobile.png": "c07c099606f147651d891fa750008bb7",
"assets/assets/images/new_mobile/garana.png": "ad89fe8d41b7f69317d4c81b3bab548d",
"assets/assets/images/new_mobile/reddi.png": "a2fcaaa6e646462c1793f06d492faf9b",
"assets/assets/images/new_mobile/gosu.png": "378b6fa25273593a408bddd798f86566",
"assets/assets/images/new_mobile/scoin.png": "cc5864983c1b0bc9dc1e781a7de24b5b",
"assets/assets/images/new_mobile/mobifone.png": "661b3fdc93aa940ab6b5bef5d606048e",
"assets/assets/images/new_mobile/appota.png": "7cf4195cb0a31e5815068f066b237216",
"assets/assets/images/new_mobile/zing.png": "12bb23b8e48e5fd2a3f808f5b25e7766",
"assets/assets/images/new_mobile/vinaphone.png": "792d697b31d5421d1d42825f8d6db6c9",
"assets/assets/images/vinaphone.png": "92ba8013caf7932042535bd96dd30449",
"assets/assets/lottie/lottie_loading.json": "e46fe1b0940c8ef06af8ac48ad910d7c",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
