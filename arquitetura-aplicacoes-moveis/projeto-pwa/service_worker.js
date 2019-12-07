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
        '/src/public/css/main.css',
        '/src/public/css/bootstrap.min.css',
        '/src/public/css/main.css',
        '/src/public/img/logo/logo.png',
        '/src/public/img/produtos/german-weizen/1.jpg',
        '/src/public/img/produtos/diabolique/1.png',
        '/src/public/img/produtos/blondine/1.png',
        '/src/public/img/produtos/wals/1.png',
        '/src/public/img/produtos/andarilha/1.jpg',
        '/src/public/img/produtos/brown/1.jpg',
        '/src/public/img/produtos/conexao/1.jpeg',
        '/src/public/img/produtos/chimay/1.png',
        '/manifest.json',
        '/src/public/img/icons/favicon-32x32.png',
        '/src/public/img/icons/android-icon-144x144.png',
        '/src/public/img/icons/favicon-32x32.png',
        '/src/public/img/icons/android-icon-144x144.png',
        '/service_worker.js',
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

        event.respondWith(
            caches.match(event.request).then(function (resp) {
                return resp || fetch(event.request).then(function (response) {
                    caches.open(CACHE_NAME).then(function (cache) {
                        //cache.put(event.request, response.clone());
                    });
                    return response;
                });
            }).catch(function () {
                return caches.match('./src/views/offline.html');
            })
        );
    });


})()