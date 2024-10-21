import React from 'react';
import {Button, Banner
} from '@patternfly/react-core';

import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import {FormHorizontal} from './Form.tsx';
import {Table_custom} from './Table.tsx';
export const Checkpoint: React.FunctionComponent = () => {
  const [isFormVisible, setIsFormVisible] = React.useState(true);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    
    <div>
        <Banner>
        <img 
        src="https://companieslogo.com/img/orig/CHKP-510367f9.png?t=1720244491" 
        style={{ height: '60px' }} />

        <img 
        src="https://ca-issa.org/wp-content/uploads/2023/01/checkpoint-logo-white-1-1200x424-1.png" 
        style={{ marginLeft: '750px', height: '70px' }} />

        
      </Banner>
        <br />
        {isFormVisible &&
            <div>
              <h1 style={{marginLeft:'430px'}}>This the Check Point Firewall</h1>
              <h2 style={{marginTop:'100px'}}> You can add host by clicking the Add_Host Button <Button style={{marginLeft:'500px' }} variant="primary" onClick={toggleFormVisibility}>Add_Host</Button> </h2>
              <Table_custom />
            </div>
        }

        {!isFormVisible &&
          <div>
            <h2 style={{marginTop:'2px'}}> Enter Below details and click submit form to add host </h2>
            <Button  style={{marginLeft:'1050px'}} variant="plain" id="with-icons-times-button" aria-label="times icon button" onClick={toggleFormVisibility}>
              <TimesIcon />
            </Button>
            <FormHorizontal />
            <h2 style={{marginTop:'50px'}}> Details Of available Hosts </h2>
            <Table_custom />
          </div>
        }
    </div>
  );
};
