(() => {
    'use strict';

    const CACHE_NAME = 'projeto-pwa-v1';
    const CACHE_DINAMIC = 'projeto-pwa';

    const FILES_TO_CACHE = [
        '/src/public/js/jquery-3.3.1.slim.min.js',
        '/src/public/js/popper.min.js',
        '/src/public/js/bootstrap.min.js',
        '/src/public/js/init.js',
        '/src/public/css/bootstrap.min.css',
        '/src/public/css/styles.css',
        '/src/public/img/logo/logo.png',
        '/src/public/img/offline.png',
        '/src/public/img/produtos/BROOKLYN/BROOKLYN.webp',
        '/src/public/img/produtos/FRANZISKANER/FRANZISKANER.webp',
        '/src/public/img/produtos/GooseMidway/GooseMidway.webp',
        '/src/public/img/produtos/HocusPocus/HocusPocus.webp',
        '/src/public/img/produtos/LOHN-BIER/LOHN-BIER.webp',
        '/src/public/img/produtos/patagonia/patagonia.webp',
        '/src/public/img/produtos/SURICATO-ALES/SURICATO-ALES.webp',
        '/src/public/img/produtos/TREZE/TREZE.webp',
        '/manifest.json',
        '/src/public/img/icons/favicon-32x32.png',
        '/src/public/img/icons/android-icon-144x144.png',
        '/service_worker.js',
        '/offline.html'
    ];

//Gravando arquivos arquivos estáticos - Somente para montar Front-end

    self.addEventListener('install', evt => {
        console.log('======= entrou addEventListener install ======');

        console.log("[Service Worker] Instalando caches estáticos");


        evt.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {

                return cache.addAll(FILES_TO_CACHE);

            })
        );

        self.skipWaiting();

    });

//Ativando o Service Worker e removendo cache antigo


    self.addEventListener('activate', (evt) => {
        console.log('======= entrou addEventListener activate ======');

        console.log("[Service Worker] Ativando e removendo cache antigo");

        evt.waitUntil(
            caches.keys().then((keyList) => {

                return Promise.all(keyList.map((key) => {

                    if (key !== CACHE_NAME) {
                        console.log('[ServiceWorker] Removendo cache antigo', key);
                        return caches.delete(key);

                    }

                }));

            })
        );
        self.clients.claim();
    });

//Respondendo a página offline

    self.addEventListener('fetch', function (event) {

        console.log('======= entrou addEventListener fetch ======');

        // if (event.request.mode !== 'navigate') {
        //     return;
        // }

        event.respondWith(
            caches.match(event.request).then(function (resp) {
                return resp || fetch(event.request).then(function (response) {
                    caches.open(CACHE_NAME).then(function (cache) {
                        //cache.put(event.request, response.clone());
                    });
                    return response;
                });
            }).catch(function () {
                return caches.match('offline.html');
            })
        );
    });

    self.addEventListener('push', function(event) {
        console.log('[Service Worker] Notificação recebida.');
        console.log(`[Service Worker] O conteúdo da notificação é: "${event.data.text()}"`);

        const title = 'Cerveja Artesanal';
        const options = {
            body: event.data.text(),
            icon: 'src/public/img/logo/logo.png',
        };

        event.waitUntil(self.registration.showNotification(title, options));
    });

    self.addEventListener('notificationclick', function(event) {
        console.log('[Service Worker] Clique na notificação recebido.');

        event.notification.close();

        event.waitUntil(
            clients.openWindow('/')
        );
    });

    self.addEventListener('sync', function(event) {
        if (event.tag == 'syncOcasional') {
            event.waitUntil(syncOcasional());
        }
    });



})()