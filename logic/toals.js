  class Modal {
    constructor (open) {
//      this.modal = document.querySelector("[data-worker-modal='true']");
      // dynamically get the buttons that opens the modal
      this.triggerModal = document.querySelectorAll("[data-worker-modal='trigger'] ");
      this.closeModal = document.querySelectorAll("[data-worker-modal='close']");

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
        this.modal.style.display = 'block';
        return loadOffices();
    }
    close () {
      this.modal.style.display = "none";
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

