import React from 'react';
import { Icon } from '@patternfly/react-core';
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Button,
  Banner
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { NavMixed } from './NavFly.tsx';
import { Avatar } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import { NotificationBadge, NotificationBadgeVariant } from '@patternfly/react-core';
import {FormHorizontal} from './FormPatternfly.tsx';
import {TableActions} from './Table.tsx';
import { Grid, GridItem } from '@patternfly/react-core';
import { BreadcrumbHomeLink } from './BreadcrumbHomeLink.tsx';

export const PageWithOrWithoutFill: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [selectedItem, setSelectedItem] = React.useState('Dashboard'); // State to store selected item
  const [isFormVisible, setIsFormVisible] = React.useState(true);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [readExpanded, setReadExpanded] = React.useState(false);

  const onReadClick = () => {
    setReadExpanded(!readExpanded);
  };

  // Function to update selected item
  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  const breadcrumbItems = [
    { name: 'Home', link: '/page1' },
    { name: selectedItem, isActive: true }
  ];

  const headerToolbar = (
    <Toolbar id="fill-toolbar">
      <ToolbarContent style={{ marginLeft: '1000px' }}>
        <ToolbarItem>
          <Icon>
            <CogIcon />
          </Icon>
        </ToolbarItem>
        <ToolbarItem>
          <NotificationBadge
            variant={NotificationBadgeVariant.read}
            onClick={onReadClick}
            aria-label="Basic notification badge with read variant"
            isExpanded={readExpanded}
          />
        </ToolbarItem>
        <ToolbarItem>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixWENwTZdvqJbo7WMo7JJX4yBrk5Mif_bxg&s"
            alt="avatar"
            border="dark"
          />
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={onSidebarToggle}
          id="fill-nav-toggle"
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/768px-Tata_Consultancy_Services_Logo.svg.png?20210617123944"
            alt="TCS Logo"
            style={{ height: '40px' }} /* Adjust the size of the logo */
          />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar isSidebarOpen={isSidebarOpen} id="fill-sidebar">
      <PageSidebarBody>
        <NavMixed onSelectItem={handleSelectItem} /> {/* Pass the update function */}
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page header={header} sidebar={sidebar}>
      {/* Conditionally render content based on selectedItem */}
      <PageSection>
        <BreadcrumbHomeLink items={breadcrumbItems} />
        { selectedItem=='Dashboard' &&

            <h1 style={{marginLeft:'400px',marginTop: '250px'}}> This is the dashboard</h1>

        }

        { selectedItem=='User Information' &&

        <h1 style={{marginLeft:'400px',marginTop: '250px'}}> Username: Teja Parapati</h1>

        }


        {selectedItem=='CheckPoint' && isFormVisible &&
            <div style={{marginTop:'10px'}}> 
              <Banner>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <h1 style={{marginTop:'8px'}}>This the Check Point Firewall</h1>
                <img
            src="https://seeklogo.com/images/C/check-point-logo-34ACABBADF-seeklogo.com.png"
            alt="TCS Logo"
            style={{ height: '40px' }} /* Adjust the size of the logo */
          />
                </div>
                </Banner>
              <br/>
              <h2 style={{marginTop:'10px'}}> You can add host by clicking the Add_Host Button <Button style={{marginLeft:'500px' }} variant="primary" onClick={toggleFormVisibility}>Add_Host</Button> </h2>
              <TableActions />
            </div>
        }

        {selectedItem=='CheckPoint' && !isFormVisible &&
          <div>
            <h2 style={{marginTop:'10px'}}> Enter Below details and click submit form to add host </h2>
            <Button  style={{marginLeft:'950px'}} variant="plain" id="with-icons-times-button" aria-label="times icon button" onClick={toggleFormVisibility}>
              <TimesIcon />
            </Button>
            <FormHorizontal />
            <h2 style={{marginTop:'50px'}}> Details Of available Hosts </h2>
            <TableActions />
          </div>
        }



      </PageSection>
    </Page>
  );
};
