if('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('./sw.js')
  .then((d)=> {
    console.log("Service Worker registrado",d);
  })
  .catch((e)=> {
    console.log("Service worker, registro falhou",e)
  });
}



let deferredPrompt;
const addBtn = document.querySelector('#enable-banner-install');

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt...');
    addBtn.style.display = 'block';
    e.preventDefault();
    deferredPrompt = e;
    addBtn.addEventListener('click', (e) => {
        addBtn.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the prompt');
                
            } else {
                console.log('User dismissed the prompt');
            }
            deferredPrompt = null;
        });
    });
});