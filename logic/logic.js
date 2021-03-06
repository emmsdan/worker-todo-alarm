
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
  offices = JSON.parse(offices);
      offices.unshift (JSON.parse(`{"name" : "${fields.officeName}", "open" : "${fields.closeHour}", "close" : "${fields.openHour}", "id" : "${codedNumber(fields.officeName+fields)}"}`));
    }else{
      offices = [];
      offices.unshift (JSON.parse(`{"name" : "${fields.officeName}", "open" : "${fields.closeHour}", "close" : "${fields.openHour}", "id" : "${codedNumber(fields.officeName+fields)}"}`));
    }
    
    if ( _store ('offices', offices) ) return OfficeModal.close();

  }
  
}

const loadOffices = (count=0) => {
  const displayOffice = document.querySelector(".officeData");
  displayOffice.innerHTML = '';
  if (_countOfficeItems() === count) {
    console.log (`No Item to Load...`)
    return;
  }
  for ( let offices of _selectJSON("offices") ){
    let li = document.createElement("li");
    li.setAttribute('onclick', `department('${offices.id}');`); 
    let h3 = document.createElement("h3");
      h3.textContent = offices["name"];
      li.appendChild(h3)
      li.innerHTML += (`Opening Hour: <b>${offices["open"]}am</b> -- Closing Hour: <b>${offices["close"]}pm</b>`);
      displayOffice.appendChild(li);
  }
  return;
}

const clearOffice = () => {
  const displayOffice = document.querySelector(".officeData");
  displayOffice.innerHTML = `<h2> Ops Nothing in the Office </h2>`;
  const OfficeModal = new Modal();
  if ( OfficeModal.opened === true){
      return OfficeModal.display();
  }
}

function department (departments){
  console.log ('I love ' + departments);
  return;
}

