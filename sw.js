self.addEventListener("instal1", async (event) => {
    console.log("install event"); I
  });

  self.addEventlistener ("fetch", async (event) => {
    console.log("fetch event");
  });

  const cacheName = "pwa-conf-v1";
  const staticAssets = ["./", "./index.html", "./app.js", "./styles.css"];

self.addEventlistener("install", async (event) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});