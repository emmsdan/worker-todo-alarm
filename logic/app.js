
window.addEventListener("load", () => {
  const OfficeModal = new Modal('true');

  function fetchEvents () {
      return fetch('./logic/logic.js')
      .then ( (response) => {
        return response.text();
      })
      .then ( (response) => {

      })
      .catch ( (err) => {
        console.log (`Error: code E120:  ${err}`);
      })
  }
  if (!_select('offices')) {
    OfficeModal.display('true');
  }
    setInterval(() => {
      if (_countOfficeItems() > 0 ) {
        loadOffices();
      }else{
        clearOffice();
      }
    }, 4000);
  
    console.log (_countOfficeItems(), 45678)
});

function unsupported () {
  document.querySelector('body').innerHTML = '<h1 style="margin: auto;"> Sorry, Your Browser is older than the Device !!!</h1>';
  return false;
}

if(typeof EventSource !== "undefined" || typeof(Storage) !== "undefined" || window.indexedDB) {
  let head = document.querySelector('head')
      
  let script = document.createElement('script');
  script.setAttribute ('src', './logic/database.js');
  head.appendChild(script);
  
  script = document.createElement('script');
  script.setAttribute ('src', './logic/toals.js');
  head.appendChild(script);

  script = document.createElement('script');
  script.setAttribute ('src', './logic/logic.js');
  head.appendChild(script);
}else{
  unsupported
}
