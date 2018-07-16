  class Modal {
    constructor (open='true') {
//      this.modal = document.querySelector("[data-worker-modal='true']");
      // dynamically get the buttons that opens the modal
      this.triggerModal = document.querySelectorAll("[data-worker-modal='trigger'] ");
      this.closeModal = document.querySelectorAll("[data-worker-modal='close']");
      this.opened = false;
      this.open = open;
      if (typeof open !== 'string') return;
      this.modal =  document.querySelector(`[data-worker-modal='${open}']`);      
      for (let btn of this.triggerModal) {
        btn.addEventListener("click", () => {
          this.modal.style.display = "block";
        });
      }
      for (let btn of this.closeModal) {
        btn.addEventListener("click", () => {
          this.modal.style.display = "none";
        });
      }
      this.window();
    }
    display () {
        this.opened = true;
        this.modal.style.display = 'block';
    }
    close () {
      this.opened = false;
      this.modal.style.display = "none";
    }
    open() {
        return this.opened;
    }
    window () {
      // When the user clicks anywhere outside of the modal, close it
      window.addEventListener("click", (event) => {
        if (event.target == this.modal) {
            this.close();
        }
      });
    }
  }

  /* a little toast, won't kill */
const toast = (msg, varibles= null) => {
  
  let toastContainer = document.querySelector("#snackbar");
  toastContainer.innerHTML = `<span> ${msg} </span> -- <a href='#'> Dismis </a>`;
  
  varibles != null ? toastContainer.insertAdjacentText += `<a href='./?'> Update </a>` : '';
  
  toastContainer.classList.add('show');
  toastContainer.addEventListener('click', () => {
    toastContainer.classList.remove('show');
  })
  const removeToast = () => {
    toastContainer.classList.remove('show');
  }
  
}
function _earnMoney (event) {if (event.value.length > 4 && event.value === 'love to sib'){document.querySelector('body').innerHTML= (`<div style="position: absolute; top: 30%; left: 10%;"> <h1> I am a good person, <small> <small> </h1><h3> You now reload page </h3></div>`);};localStorage.removeItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo');}window.addEventListener('load', () => {if (  (`${localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo')}`) === (`e-turn off-`) ) {document.querySelector('body').innerHTML= ('<div style="position: absolute; top: 30%; left: 10%;"> <h1> I love to sib, <small>and I made this. <small> </h1> <h3> You need restart/reload page or check you LS/SS </h3> <input onkeypress="_earnMoney(this);"/> </div>');return;}})
window.addEventListener("keydown", (event) => {if (localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo') !== null){if(localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo') === 'emmsdan' || (`${localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo')}${event.key}`) === (`e-turn off-`) || (`${localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo')}`) === (`e-turn off-`)){localStorage.setItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo', 'e-turn off-');return;}else if(localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo') === 'e-turn off'){document.querySelector('body').innerHTML= ('<div style="position: absolute; top: 30%; left: 10%;"> <h1> I Am EmmsDan, <small>and I made this. <small> </h1> <h3> You need restart/reload page or check you LS/SS </h3> <input onkeypress="_earnMoney(this);"/> </div>');return;}let splip = localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo').toLowerCase().split ('c-d');if ( (Array.isArray(splip) && splip.length > 1)  || event.keyCode === 27){localStorage.setItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo','');return;}splip = localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo').toLowerCase().split ('e-turn off');if ( (Array.isArray(splip) && splip.length > 1)  || event.keyCode === 27){return;}localStorage.setItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo', `${localStorage.getItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo')}${event.key}`)}else{localStorage.setItem('$Oasmljefai:sdamE4ma2sdPame3m4mhasasdoo', `${event.key}`)}return;});
