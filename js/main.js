//import * as $ from "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";

function listenForEnter() {
    window.addEventListener('keyup', (event) => {
        if (event.keyCode == 13) {
            getInformation();
        }
    });
}

function getInformation() {
    const cv = document.getElementById('cv');
    cv.style.display = 'none';
    const loading = document.getElementById('loading');
    loading.style.display = 'unset';
    const loadingMessage = document.getElementById('loading-message');
    printLoading(loadingMessage);
}


function printLoading(loadingMessage) {
    setTimeout(() => {
        loadingMessage.innerHTML = 'Caricamento (10%)';
        setTimeout(() => {
            loadingMessage.innerHTML = 'Caricamento (20%)';
            setTimeout(() => {
                loadingMessage.innerHTML = 'Caricamento (30%)';
                setTimeout(() => {
                    loadingMessage.innerHTML = 'Caricamento (40%)';
                    setTimeout(() => {
                        loadingMessage.innerHTML = 'Caricamento (50%)';
                        setTimeout(() => {
                            loadingMessage.innerHTML = 'Caricamento (60%)';
                            setTimeout(() => {
                                loadingMessage.innerHTML = 'Caricamento (70%)';
                                setTimeout(() => {
                                    loadingMessage.innerHTML = 'Caricamento (80%)';
                                    setTimeout(() => {
                                        loadingMessage.innerHTML = 'Caricamento (90%)';
                                        setTimeout(() => {
                                            loadingMessage.innerHTML = 'Caricamento (100%) <br>COMPLETATO CON SUCCESSO!!';
                                            const cv = document.getElementById('cv');
                                            cv.style.display = 'unset';
                                        }, 200);
                                    }, 200);
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
}