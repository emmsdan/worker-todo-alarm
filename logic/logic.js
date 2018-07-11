
const submitForm = (node) => {
  
  const submitForm = document.querySelector('#'+node.id);
  let form = [{'formType': node.id}];
  let $response ='app-response';
  let fields = '';
  for (let adds of submitForm.querySelectorAll('[id]')){
    
    if(adds.value  == 'response'){
      $response = '.response';
    }
    if( adds.value === '') {
      toast (`Please Check Field Relating to ${adds.id}`);
      adds.focus();
      return false;
    }
    if (node.id === 'addOffice') {
      form[adds.id] = adds.value;
    }
 }
 console.log (' End Form Process ')
 serverProcess (form)
 return false;
}

const serverProcess = (fields) => {
  console.log (fields)
  if (fields[0].formType === 'addOffice'){
    let offices = localStorage.getItem('offices');
    if (offices){
      offices = JSON.parse(offices);
      offices.push (`{"name" : "${fields.officeName}", "open" : "${fields.closeHour}", "close" : "${fields.openHour}"}`);
      //const $object =  '{"office" : [, "Joshua"]}';

      offices = JSON.stringify(offices);
      localStorage.setItem ('offices', offices)
    }else{
      offices = [];
      offices.push (`{"name" : "${fields.officeName}", "open" : "${fields.closeHour}", "close" : "${fields.openHour}"}`);
      //const $object =  '{"office" : [, "Joshua"]}';

      offices = JSON.stringify(offices);
      localStorage.setItem ('offices', offices)
    }
  }
  
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

