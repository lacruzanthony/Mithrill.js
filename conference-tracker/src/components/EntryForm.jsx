// \src\components\EntryForm.jsx

const m = require('mithril');

import UIButton from './ui/UIButton.jsx';

import {setMockData} from '../store/data';

const entryFormHandler = (formDOM) => 
{
  const formData = new FormData(formDOM);
  const newEntry = {};

  Array.from(formData.entries()).map((entryValue) => {
    const key = entryValue[0];
    const value = entryValue[1];

    switch(value){
      case "false":
        newEntry[key] = false;
      break;
      
      case "true":
        newEntry[key] = true;
      break;
      
      default:
        newEntry[key] = value;
      break;
    }
  });

  newEntry["favorite"] = false;
  newEntry["CFPCompleted"] = newEntry.CFP ? false : "null";
  // Creamos un nuevo objeto en nuestro datos de prueba.
  setMockData(newEntry);
  console.log(newEntry);
  
  formDOM.reset();  // El documento del demo tenía un error en esta instrucción. 
};

const EntryForm = {
    
    data: {
      CFP: false
    },
    
    view: (vnode) =>

      <form name="entry-form" id="entry-form">
        <label for="conf-name">
          {`Conference Name`}
        </label>

        <input id="conf-name" type="text" name="name" />
        
        <label for="location">
          {`Location`}
        </label>
        
        <input id="location" type="text" name="location" />
        
        <label for="date">
          {`Date`}
        </label>
        
        <input id="date" type="date" name="date" />
        
        <label class="form-question">
          {`Submitting paper?`}
          <label for="yes-cfp">Yes</label>
          <input value={true} type="radio" id="yes-cfp" name="CFP" 
            onclick = {() => {
              vnode.state.CFP = true;
            }}
          />
          <label for="no-cfp">No</label>
          <input value={false} type="radio" id="no-cfp" name="CFP"
            onclick = {() => {
              vnode.state.CFP = false;
            }}
          />
        </label>
        
        {
          vnode.state.CFP ?
            [
              <label for="cfp">
                {`Call for papers Deadline`}
              </label>,
              <input id="cfp" type="text" name="CFPDate"/>
            ] :
            null
        }
        
        <UIButton action={() => entryFormHandler(vnode.dom)} buttonName="GUARDAR" />
      
      </form>
  };

  export default EntryForm;