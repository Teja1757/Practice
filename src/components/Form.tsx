import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  ActionGroup,
  Button,
  HelperText,
  HelperTextItem,
  FormHelperText
} from '@patternfly/react-core';
import { FileUpload, DropEvent } from '@patternfly/react-core';


export const FormHorizontal: React.FunctionComponent = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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

  const handlePasswordChange = (_event, password: string) => {
    setPassword(password);
  };


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

      <FormGroup label="Password" isRequired fieldId="horizontal-form-password">
      <TextInput
          value={password}
          isRequired
          type="text"
          id="horizontal-form-password"
          aria-describedby="horizontal-form-password-helper"
          name="horizontal-form-password"
          onChange={handlePasswordChange}
        />
      </FormGroup>
      <FileUpload
      id="text-file-with-edits-allowed-example"
      value={value}
      filename={filename}
      filenamePlaceholder="Drag and drop a file or upload one"
      onFileInputChange={handleFileInputChange}
      onDataChange={handleDataChange}
      onReadStarted={handleFileReadStarted}
      onReadFinished={handleFileReadFinished}
      onClearClick={handleClear}
      isLoading={isLoading}
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
