
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
  let offices = '';
  if (fields[0].formType === 'addOffice'){
    offices = _select('offices');
    if (offices){
      offices = JSON.parse(offices);
      offices.unshift (JSON.parse(`{"name" : "${fields.officeName}", "open" : "${fields.closeHour}", "close" : "${fields.openHour}"}`));
    }else{
      offices = [];
      offices.unshift (JSON.parse(`{"name" : "${fields.officeName}", "open" : "${fields.closeHour}", "close" : "${fields.openHour}"}`));
    }
    
    if ( _store ('offices', offices) ) return OfficeModal.close();

  }
  
}
