import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, CustomInput } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
       <FormGroup>
          <Label for="exampleEmail">Input without validation</Label>
          <Input />
          <FormFeedback>You will not be able to see this</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input valid />
          <FormFeedback valid>Sweet! that name is available</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid />
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Checkboxes</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" invalid/>
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" invalid/>
          </div>
          <FormFeedback>Please make selection.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Radios</Label>
          <div>
            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" invalid/>
            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" invalid/>
          </div>
          <FormFeedback>Please make selection.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="exampleCustomSelect">Custom Select</Label>
          <CustomInput type="select" id="exampleCustomSelect" name="customSelect" invalid>
            <option value="">Select</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
          <FormFeedback>Please make a selection.</FormFeedback>
        </FormGroup>
      </Form>

    );
  }
}
