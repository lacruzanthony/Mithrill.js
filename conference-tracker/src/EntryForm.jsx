// conference-tracker\src\components\EntryForm.jsx

const m = require('mithril');

import UIButton from './ui/UIButton.jsx';

const EntryForm = {
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
        <input id="date" type="text" name="date" />
        <label class="form-question">
          {`Submitting paper?`}
          <label for="yes-cfp">Yes</label>
          <input value={true} type="radio" id="yes-cfp" name="CFP" />
          <label for="no-cfp">No</label>
          <input value={false} type="radio" id="no-cfp" name="CFP" />
        </label>
        <label for="cfp">
          {`Call for Papers Deadline`}
        </label>,
        <input id="cfp" type="text" name="CFPDate" />
        <UIButton action={() => console.log(`Guardando...`)} buttonName="GUARDAR" />
      </form>
  };