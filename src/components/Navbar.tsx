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
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';

import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import { Avatar } from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import { NotificationBadge, NotificationBadgeVariant } from '@patternfly/react-core';
import {Sidebar} from './Sidebar.tsx';



export const Navbar: React.FunctionComponent = () =>{

  const [readExpanded, setReadExpanded] = React.useState(false);

  const onReadClick = () => {
    setReadExpanded(!readExpanded);
  };

  const [activeItem, setActiveItem] = React.useState('');
    const [activeGroup, setActiveGroup] = React.useState('');
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    const onSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    const sidebar = (
      <PageSidebar isSidebarOpen={isSidebarOpen} id="fill-sidebar">
        <PageSidebarBody>
          <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} activeGroup={activeGroup} setActiveGroup={setActiveGroup}/>
        </PageSidebarBody>
      </PageSidebar>
    );
  const headerToolbar = (
    <Toolbar id="fill-toolbar">
      <ToolbarContent style={{ marginLeft: '1090px' }}>
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


  return (
    <>
    {header}
    {sidebar}
    </>
  );
};
