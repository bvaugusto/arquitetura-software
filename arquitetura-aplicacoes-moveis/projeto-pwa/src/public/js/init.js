(() => {
    //PRIMEIRO DEFINIR SE O USUÁRIO ESTÁ NA VERSÃO ONLINE OU OFFLINE
    var results_offline = document.getElementById('results_offline');
    var offline = false;

    if (typeof (results_offline) != 'undefined' && results_offline != null) {
        offline = true;
        var results = results_offline;
    } else {
        var results = document.getElementById('results');
    }

    //ABRIR JSON E INSERIR VALORES
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "data.json", true);
    ajax.send();

    ajax.onreadystatechange = function () {

        //Verificar se JSON foi baixado com sucesso
        if (ajax.readyState == 4 && ajax.status == 200) {

            var data = ajax.responseText
            var data_json = JSON.parse(data)

            if (data_json.length == 0) {
                results.innerHTML = "<p>Não existem dados para serem exibidos.</p>";
            } else {

                //Aqui tudo está OK e o JSON contem dados
                var html = "";

                //Renderizando cards
                for (var i = 0; i < data_json.length; i++) {
                    html += template_card(data_json[i].marca, data_json[i].nome, data_json[i].descricao, data_json[i].preco, data_json[i].url, data_json[i].images[0], offline);
                }

                results.innerHTML = html;

                //Quer dizer que estou online e preciso fazer cache desses novos dados que foram baixados
                if (offline == false) {

                    setTimeout(function () {
                        cache_cards(data_json);
                    }, 1000);

                    //cache_cards(data_json);
                }
            }

        } else {
            results.innerHTML = "<p>Ocorreu um erro ao receber dados do servidor</p>";
        }

    }
//Função Cache - guarda tudo para ser usado no modo offline

    var cache_cards = function (data_json) {

        if (data_json.length > 0) {

            var files = ['data.json'];

            for (var i = 0; i < data_json.length; i++) {
                files.push(data_json[i].images[0]);
            }
        }
        //agora armazeno os arquivos que foram estruturados
        caches.open('projeto-pwa').then(function (cache) {
            cache.addAll(files).then(function () {
                console.log("Arquivos dinâmicos armazenados em cache.");
            });
        });
    }

    //TEMPLATE CARD (Carro)

    function template_card(marca, nome, descricao, preco, url, images, offline) {
        // console.log('online_offline ====> ', marca, '| ', nome, '| ',descricao, '| ',preco, '| ',url, '| ',images, '| ',offline);return
        //true = Online
        if (offline == false) {
            var html = '<div class="col-lg-3 col-md-6 col-sm-12 cor"><div class="card"><img src="' + images + '" class="card-img-top img_card"><div class="card-body"><h5 class="card-title">' + nome + '</h5><p class="card-text">' + descricao + '</p><p class="card-price">' + preco + '</p><a href="' + url + '" target="_blank" class="btn btn-dark">Comprar</a></div></div></div>';
            //false = Offline
        } else {
            var html = '<div class="col-lg-3 col-md-6 col-sm-12 cor"><div class="card"><img src="' + images + '" class="card-img-top img_card"><div class="card-body"><h5 class="card-title">' + nome + '</h5><p class="card-text">' + descricao + '</p><p class="card-price">' + preco + '</p></div></div></div>';
        }

        return html;

    }


    //REGRAS DE MENU MOBILE

    window.onload = function () {
        if (window.jQuery) {
            $(document).ready(function () {
                $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show();
                $("body").append("<div class='overlay'></div>");
                $(".navbar-toggle, .navbar-toggler").on("click", function () {
                    $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass"));
                    $(".sideMenu, .overlay").toggleClass("open");
                    $(".overlay").on("click", function () {
                        $(this).removeClass("open");
                        $(".sideMenu").removeClass("open")
                    })
                });
                /*
                $("body").on("click", ".sideMenu.open", function() {
                    if (!$(this).hasClass("dropdown")) {
                        $(".sideMenu, .overlay").toggleClass("open")
                    }
                });*/
                $(window).resize(function () {
                    if ($(".navbar-toggler").is(":hidden")) {
                        $(".sideMenu, .overlay").hide()
                    } else {
                        $(".sideMenu, .overlay").show()
                    }
                })
            })
        } else {
            // console.log("sidebarNavigation Requires jQuery")
        }
    }

    /*###########################

Experiencia de Instalação

#############################*/

    let deferredInstallPrompt = null;
    const installButton = document.getElementById('butInstall');
    installButton.addEventListener('click', installPWA);
    window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

    function saveBeforeInstallPromptEvent(evt) {
        deferredInstallPrompt = evt;
        installButton.removeAttribute('hidden');
    }

    function installPWA(evt) {
        console.log('evt',evt)
        // CODELAB: Add code show install prompt & hide the install button.
        deferredInstallPrompt.prompt();
        // Escondendo botão
        evt.srcElement.setAttribute('hidden', true);

        //Interceptando se o usuário aceitou ou não a instalação
        deferredInstallPrompt.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log('Usuário aceitou', choice);
                } else {
                    console.log('Usuário não aceitou', choice);
                }
                deferredInstallPrompt = null;
            });

    }

    window.addEventListener('appinstalled', logAppInstalled);

    function logAppInstalled(evt) {
        console.log('Aplicativo já está instalado.', evt);

    }
})()