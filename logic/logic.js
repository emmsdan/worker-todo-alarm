
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

const checkOfficeData = (count=0) => {
  console.log(count , _countOfficeItems())
  if ( count === _countOfficeItems() ){
    return false;
  }
  loadOffices(_countOfficeItems());
  console.log('Checking Office', count);
}
const loadOffices = (count=0) => {
  let i = 0;
  const displayOffice = document.querySelector(".officeData");
  displayOffice.innerHTML = '';
  for ( let offices of _selectJSON("offices") ){
      let li = document.createElement("li");;
      li.innerHTML += (`<h3>${offices["name"]}</h3>- Opening Hour: <b>${offices["open"]}am</b> -- Closing Hour: <b>${offices["close"]}pm</b>`);
      displayOffice.appendChild(li);
    i++
  }
  setTimeout(loadOffices, 1234)
  return;
}
