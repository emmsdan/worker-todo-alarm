
window.addEventListener("load", () => {
  if(typeof EventSource === "undefined" || typeof(Storage) === "undefined")  return unsupported();
    
  const modal = document.querySelector("[data-worker-modal='true']");
  // dynamically get the buttons that opens the modal
  const triggerModal = document.querySelectorAll("[data-worker-modal='trigger'] ");
    for (let btn of triggerModal) {
      btn.addEventListener("click", () => {
        modal.style.display = "block";
        fetchEvents ();
      });
    }
  // dynamically Get the element that closes the modal
  const closeModal = document.querySelectorAll("[data-worker-modal='close']");
    for (let btn of closeModal) {
      btn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", (event) => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });

  function fetchEvents () {
      return fetch('./logic/logic.js')
      .then ( (response) => {
        return response.text();
      })
      .then ( (response) => {
        let head = document.querySelector('head')
        
        let script = document.createElement('script');
        script.setAttribute ('src', './logic/database.js');
        head.appendChild(script);

        script = document.createElement('script');
        script.setAttribute ('src', './logic/logic.js');
        head.appendChild(script);
        
      })
      .catch ( (err) => {
        console.log (`Error: code E120:  ${err}`);
      })
  }
});

function unsupported () {
  document.querySelector('body').innerHTML = '<h1 style="margin: auto;"> Sorry, Your Browser is older than the Device !!!</h1>';
  return false;
}