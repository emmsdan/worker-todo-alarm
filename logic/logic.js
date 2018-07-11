
const submitForm = (node) => {
  
  const submitForm = document.querySelector('#'+node.id);
  let form = [{node: node.id}];
  let $response ='app-response';
  let fields = '';
  for (let adds of submitForm.querySelectorAll('[id]')){
    fields = adds.id;
    if(adds.value  == 'response'){
      $response = '.response';
    }
    if( adds.value === '') {
      toast (`Please Check Field Relating to ${adds.id}`);
      adds.focus();
      return false;
    }
    if (node.id === 'addOffice') {
      let ff = { fields : adds.value}
      form.push (ff)
    }
 }
 console.log (' End Form Process ')
 serverProcess (form)
 return false;
}

const serverProcess = (fields) => {
  console.log (fields)
}

/* a little toast, won't kill */
const toast = (msg, varibles= null) => {
  
  let toastContainer = document.querySelector("#snackbar");
  toastContainer.innerHTML = `<span> ${msg} </span>`;
  
  varibles != null ? toastContainer.insertAdjacentText += `<a href='./?'> Update </a>` : '';
  
  toastContainer.classList.add('show');
  
  const removeToast = () => {
    toastContainer.classList.remove('show');
  }
  
}
setTimeout(
  document.querySelector('#snackbar').classList.remove('show')
, 10000);

