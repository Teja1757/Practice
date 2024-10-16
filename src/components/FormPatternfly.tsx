import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelect,
  FormSelectOption,
  Checkbox,
  ActionGroup,
  Button,
  Radio,
  HelperText,
  HelperTextItem,
  FormHelperText
} from '@patternfly/react-core';
import { FileUpload, DropEvent } from '@patternfly/react-core';


export const FormHorizontal: React.FunctionComponent = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [experience, setExperience] = React.useState('');
  const [option, setOption] = React.useState('please choose');

  //file
  const [value, setValue] = React.useState('');
  const [filename, setFilename] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const handleFileInputChange = (_, file: File) => {
    setFilename(file.name);
  };

  const handleTextChange = (_event: React.ChangeEvent<HTMLTextAreaElement>, value: string) => {
    setValue(value);
  };

  const handleDataChange = (_event: DropEvent, value: string) => {
    setValue(value);
  };

  const handleClear = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilename('');
    setValue('');
  };

  const handleFileReadStarted = (_event: DropEvent, _fileHandle: File) => {
    setIsLoading(true);
  };

  const handleFileReadFinished = (_event: DropEvent, _fileHandle: File) => {
    setIsLoading(false);
  };

  //file

  const handleNameChange = (_event, name: string) => {
    setName(name);
  };

  const handleEmailChange = (_event, email: string) => {
    setEmail(email);
  };

  const handleExperienceChange = (_event, experience: string) => {
    setExperience(experience);
  };

  const handleOptionChange = (_event: React.FormEvent<HTMLSelectElement>, value: string) => {
    setOption(value);
  };

  const options = [
    { value: 'select one', label: 'Select one', disabled: false },
    { value: 'mr', label: 'Mr', disabled: false },
    { value: 'miss', label: 'Miss', disabled: false },
    { value: 'mrs', label: 'Mrs', disabled: false },
    { value: 'ms', label: 'Ms', disabled: false },
    { value: 'dr', label: 'Dr', disabled: false },
    { value: 'other', label: 'Other', disabled: false }
  ];

  return (
    <div>
    <Form isHorizontal>
      
      <FormGroup label="IP.Address" isRequired fieldId="horizontal-form-name">
        <TextInput
          value={name}
          isRequired
          type="text"
          id="horizontal-form-name"
          aria-describedby="horizontal-form-name-helper"
          name="horizontal-form-name"
          onChange={handleNameChange}
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem>Enter your valid IP Address</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <FormGroup label="Username" isRequired fieldId="horizontal-form-email">
        <TextInput
          value={email}
          isRequired
          type="email"
          id="horizontal-form-email"
          name="horizontal-form-email"
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FileUpload
      id="text-file-with-edits-allowed-example"
      type="text"
      value={value}
      filename={filename}
      filenamePlaceholder="Drag and drop a file or upload one"
      onFileInputChange={handleFileInputChange}
      onDataChange={handleDataChange}
      onTextChange={handleTextChange}
      onReadStarted={handleFileReadStarted}
      onReadFinished={handleFileReadFinished}
      onClearClick={handleClear}
      isLoading={isLoading}
      allowEditingUploadedText={true}
      browseButtonText="Upload"
    />
      <ActionGroup style={{marginTop:'-5px',marginLeft:'210px'}}>
        <Button variant="primary">Submit</Button>
        <Button variant="link">Cancel</Button>
      </ActionGroup>
    </Form>
    </div>
  );
};
